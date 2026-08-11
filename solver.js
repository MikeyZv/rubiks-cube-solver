import { Cube } from './cube.js';

// Colors painted on each face of the solved cube.
export const COLOR = { front: 'G', back: 'B', left: 'R', right: 'O', top: 'Y', bottom: 'W' };

// Neighbors of each side face, as seen while looking straight at that face.
const RIGHT_OF = { front: 'right', right: 'back', back: 'left', left: 'front' };
const LEFT_OF = { front: 'left', left: 'back', back: 'right', right: 'front' };
const OPPOSITE = { front: 'back', back: 'front', left: 'right', right: 'left' };

// The app sign that turns each face clockwise as seen while looking at that face.
const CW = { front: '+', back: '-', left: '-', right: '+', top: '-', bottom: '+' };

// Pure per-face turn data (shared with rotate.js): which position slots form the
// layer, how the corner and edge pieces cycle on a '+' turn, and which whole-piece
// color spin a '+' turn applies.
export const TURNS = {
    front:  { indices: [18, 19, 20, 21, 22, 23, 24, 25, 26], corners: [18, 24, 26, 20], edges: [19, 21, 25, 23], spin: 'spinZ' },
    back:   { indices: [0, 1, 2, 3, 4, 5, 6, 7, 8], corners: [0, 6, 8, 2], edges: [1, 3, 7, 5], spin: 'spinZ' },
    top:    { indices: [0, 1, 2, 9, 10, 11, 18, 19, 20], corners: [0, 2, 20, 18], edges: [1, 11, 19, 9], spin: 'spinY' },
    bottom: { indices: [6, 7, 8, 15, 16, 17, 24, 25, 26], corners: [6, 8, 26, 24], edges: [7, 17, 25, 15], spin: 'spinY' },
    left:   { indices: [18, 9, 0, 21, 12, 3, 24, 15, 6], corners: [18, 24, 6, 0], edges: [9, 21, 15, 3], spin: 'spinX' },
    right:  { indices: [20, 11, 2, 23, 14, 5, 26, 17, 8], corners: [20, 26, 8, 2], edges: [11, 23, 17, 5], spin: 'spinX' },
};

// The inverse turn cycles the same 4 pieces the other way: swap positions 1 and 3.
export const rev = a => [a[0], a[3], a[2], a[1]];

// Move the four pieces at the cycle's slots one step: the piece at cycle[i+1]
// ends up at cycle[i].
function cycleSlots(state, cycle) {
    const temp = state[cycle[0]];
    for (let i = 0; i < 3; i++) state[cycle[i]] = state[cycle[i + 1]];
    state[cycle[3]] = temp;
}

// Apply one face turn to a 27-piece color state, mirroring what the visual cube does:
// every piece in the layer spins around the turn axis, and the corner and edge
// pieces move one step along their cycles.
export function applyTurn(state, face, sign) {
    const t = TURNS[face];
    const minus = sign === '-';
    const spin = minus ? t.spin + 'Inverse' : t.spin;
    for (const i of t.indices) state[i][spin]();
    cycleSlots(state, minus ? rev(t.corners) : t.corners);
    cycleSlots(state, minus ? rev(t.edges) : t.edges);
}

export function solvedState() {
    const state = [];
    for (let i = 0; i < 27; i++) state[i] = new Cube('G', 'B', 'R', 'O', 'Y', 'W');
    return state;
}

// Slot index = depth*9 + row*3 + col (depth 0=back..2=front, row 0=top..2=bottom,
// col 0=left..2=right). These tables list which world faces each slot's stickers show.
const EDGE_SLOTS = {
    1: ['top', 'back'], 9: ['top', 'left'], 11: ['top', 'right'], 19: ['top', 'front'],
    3: ['back', 'left'], 5: ['back', 'right'], 21: ['front', 'left'], 23: ['front', 'right'],
    7: ['bottom', 'back'], 15: ['bottom', 'left'], 17: ['bottom', 'right'], 25: ['bottom', 'front'],
};
const CORNER_SLOTS = {
    0: ['top', 'back', 'left'], 2: ['top', 'back', 'right'], 18: ['top', 'front', 'left'], 20: ['top', 'front', 'right'],
    6: ['bottom', 'back', 'left'], 8: ['bottom', 'back', 'right'], 24: ['bottom', 'front', 'left'], 26: ['bottom', 'front', 'right'],
};
const CENTER_SLOTS = { front: 22, back: 4, left: 12, right: 14, top: 10, bottom: 16 };

// Edge and corner slots around each side face f (corners are the ones between
// f and the face to its right).
const U_EDGE = { front: 19, right: 11, back: 1, left: 9 };
const D_EDGE = { front: 25, right: 17, back: 7, left: 15 };
const MID_EDGE = { front: 23, right: 5, back: 3, left: 21 };
const U_CORNER = { front: 20, right: 2, back: 0, left: 18 };
const D_CORNER = { front: 26, right: 8, back: 6, left: 24 };

export function isSolved(state) {
    for (const table of [EDGE_SLOTS, CORNER_SLOTS])
        for (const [slot, faces] of Object.entries(table))
            for (const f of faces)
                if (state[slot][f] !== COLOR[f]) return false;
    for (const [f, slot] of Object.entries(CENTER_SLOTS))
        if (state[slot][f] !== COLOR[f]) return false;
    return true;
}

// Cancel adjacent inverse moves and collapse three equal turns into one inverse.
function simplify(moves) {
    const out = [];
    for (const m of moves) {
        out.push(m);
        let n = out.length;
        while (n >= 2 && out[n - 1].face === out[n - 2].face) {
            if (out[n - 1].sign !== out[n - 2].sign) {
                out.splice(n - 2, 2);
                n -= 2;
            } else if (n >= 3 && out[n - 3].face === out[n - 1].face && out[n - 3].sign === out[n - 1].sign) {
                out.splice(n - 3, 3, { face: out[n - 1].face, sign: out[n - 1].sign === '+' ? '-' : '+' });
                n -= 2;
            } else break;
        }
    }
    return out;
}

// Layer-by-layer solve: white cross, white corners, middle edges, yellow cross,
// yellow edges, yellow corner positions, yellow corner twists. Works on a copy of
// the given state and returns the move list that solves it.
export function solve(startState) {
    const state = startState.map(c => new Cube(c.front, c.back, c.left, c.right, c.top, c.bottom));
    const out = [];

    const doMove = (face, sign) => { applyTurn(state, face, sign); out.push({ face, sign }); };
    const cw = face => doMove(face, CW[face]);
    const ccw = face => doMove(face, CW[face] === '+' ? '-' : '+');

    // Run a standard-notation algorithm with its letters mapped onto `front` as the
    // face currently treated as the front (U and D always mean top and bottom).
    const runAt = (front, alg) => {
        const faces = { F: front, B: OPPOSITE[front], R: RIGHT_OF[front], L: LEFT_OF[front], U: 'top', D: 'bottom' };
        for (const token of alg.split(' ')) {
            const face = faces[token[0]];
            if (token[1] === '2') { cw(face); cw(face); }
            else if (token[1] === "'") ccw(face);
            else cw(face);
        }
    };

    const sticker = (slot, face) => state[slot][face];
    const findEdge = (a, b) => {
        for (const [slot, faces] of Object.entries(EDGE_SLOTS)) {
            const [c1, c2] = faces.map(f => state[slot][f]);
            if ((c1 === a && c2 === b) || (c1 === b && c2 === a)) return Number(slot);
        }
        throw new Error(`edge ${a}${b} not found`);
    };
    const findCorner = (a, b, c) => {
        const want = [a, b, c].sort().join('');
        for (const [slot, faces] of Object.entries(CORNER_SLOTS))
            if (faces.map(f => state[slot][f]).sort().join('') === want) return Number(slot);
        throw new Error(`corner ${a}${b}${c} not found`);
    };

    const SIDES = ['front', 'right', 'back', 'left'];

    // ---- Stage 1: white cross (bottom edges) ----
    for (const f of SIDES) {
        const color = COLOR[f];
        let slot = findEdge('W', color);
        if (slot === D_EDGE[f] && sticker(slot, 'bottom') === 'W') continue;

        // Get the edge into the top layer without disturbing solved cross edges.
        if (EDGE_SLOTS[slot][0] === 'bottom') {
            runAt(EDGE_SLOTS[slot][1], 'F2');
        } else if (!EDGE_SLOTS[slot].includes('top')) {
            // Lift with the neighboring face, park the edge away with U, then restore.
            const g = SIDES.find(s => MID_EDGE[s] === slot);
            runAt(g, "R U R'");
        }

        slot = findEdge('W', color);
        if (sticker(slot, 'top') === 'W') {
            // White up: park the edge over its own face, then drop it in.
            while (slot !== U_EDGE[f]) { cw('top'); slot = findEdge('W', color); }
            runAt(f, 'F2');
        } else {
            // White sideways: park it over the face right of home, then hook it in.
            while (slot !== U_EDGE[RIGHT_OF[f]]) { cw('top'); slot = findEdge('W', color); }
            runAt(f, "R' F R");
        }
    }

    // ---- Stage 2: white corners ----
    for (const f of SIDES) {
        const r = RIGHT_OF[f];
        const find = () => findCorner('W', COLOR[f], COLOR[r]);
        const solved = () => {
            const slot = find();
            return slot === D_CORNER[f] && sticker(slot, 'bottom') === 'W';
        };
        if (solved()) continue;

        // If it's stuck in the bottom layer, pop it up to the top first.
        let slot = find();
        if (CORNER_SLOTS[slot][0] === 'bottom') {
            const g = SIDES.find(s => D_CORNER[s] === slot);
            runAt(g, "R U R'");
            slot = find();
        }

        // Park it directly above its home slot, then repeat the insertion trigger
        // until it drops in correctly oriented.
        while (slot !== U_CORNER[f]) { cw('top'); slot = find(); }
        for (let i = 0; i < 6 && !solved(); i++) runAt(f, "R U R' U'");
        if (!solved()) throw new Error('white corner failed');
    }

    // ---- Stage 3: middle layer edges ----
    const rightInsert = "U R U' R' U' F' U F";
    const leftInsert = "U' L' U L U F U' F'";
    for (const f of SIDES) {
        const colors = [COLOR[f], COLOR[RIGHT_OF[f]]];
        let slot = findEdge(...colors);
        if (slot === MID_EDGE[f] && sticker(slot, f) === COLOR[f]) continue;

        // If it sits (wrongly) in some middle slot, kick it out to the top.
        if (!EDGE_SLOTS[slot].includes('top')) {
            runAt(SIDES.find(s => MID_EDGE[s] === slot), rightInsert);
            slot = findEdge(...colors);
        }

        // Turn the top until the edge's side sticker sits over its own center.
        let side = EDGE_SLOTS[slot].find(face => face !== 'top');
        while (sticker(slot, side) !== COLOR[side]) {
            cw('top');
            slot = findEdge(...colors);
            side = EDGE_SLOTS[slot].find(face => face !== 'top');
        }

        // The top sticker decides whether it hooks in to the right or to the left.
        const g = SIDES.find(s => COLOR[s] === sticker(slot, 'top'));
        runAt(side, g === RIGHT_OF[side] ? rightInsert : leftInsert);
        if (findEdge(...colors) !== MID_EDGE[f]) throw new Error('middle edge failed');
    }

    // ---- Stage 4: yellow cross (orient top edges) ----
    const yellowUp = f => sticker(U_EDGE[f], 'top') === 'Y';
    for (let i = 0; i < 8 && !SIDES.every(yellowUp); i++) {
        // A line lying left-right, or an L pointing back-left, in some frame.
        const line = SIDES.find(f => yellowUp(LEFT_OF[f]) && yellowUp(RIGHT_OF[f]) && !yellowUp(f));
        const ell = SIDES.find(f => yellowUp(OPPOSITE[f]) && yellowUp(LEFT_OF[f]) && !yellowUp(f) && !yellowUp(RIGHT_OF[f]));
        if (line) runAt(line, "F R U R' U' F'");
        else if (ell) runAt(ell, "F U R U' R' F'");
        else runAt('front', "F R U R' U' F'");
    }
    if (!SIDES.every(yellowUp)) throw new Error('yellow cross failed');

    // ---- Stage 5: put the yellow edges over their matching centers ----
    const edgeMatches = () => SIDES.filter(f => sticker(U_EDGE[f], f) === COLOR[f]).length;
    for (let i = 0; i < 12; i++) {
        // Find the top-layer alignment with the most matches and go there.
        let best = -1, bestK = 0;
        for (let k = 0; k < 4; k++) {
            if (edgeMatches() > best) { best = edgeMatches(); bestK = k; }
            if (k < 3) cw('top');
        }
        for (let n = 0; n < (bestK + 1) % 4; n++) cw('top');
        if (best === 4) break;

        // Cycle three edges with a matched edge (if any) held at the back.
        const matched = SIDES.find(f => sticker(U_EDGE[f], f) === COLOR[f]);
        runAt(matched ? OPPOSITE[matched] : 'front', "R U R' U R U2 R'");
    }
    if (edgeMatches() !== 4) throw new Error('yellow edges failed');

    // ---- Stage 6: put the yellow corners in their slots (ignoring twist) ----
    const cornerPlaced = f => {
        const slot = U_CORNER[f];
        const want = ['Y', COLOR[f], COLOR[RIGHT_OF[f]]].sort().join('');
        return CORNER_SLOTS[slot].map(face => state[slot][face]).sort().join('') === want;
    };
    for (let i = 0; i < 8 && SIDES.filter(cornerPlaced).length < 4; i++) {
        // Cycle the three corners around a placed one held at the front-right.
        const placed = SIDES.find(cornerPlaced);
        runAt(placed || 'front', "U R U' L' U R' U' L");
    }
    if (SIDES.filter(cornerPlaced).length !== 4) throw new Error('yellow corner position failed');

    // ---- Stage 7: twist the yellow corners in place ----
    const cornersDone = () => SIDES.every(f => sticker(U_CORNER[f], 'top') === 'Y');
    for (let i = 0; i < 16 && !cornersDone(); i++) {
        if (sticker(U_CORNER.front, 'top') !== 'Y') {
            // Twist the corner sitting front-right-top. The lower layers look
            // scrambled between corners but always restore once all are twisted.
            for (let j = 0; j < 5 && sticker(U_CORNER.front, 'top') !== 'Y'; j++) runAt('front', "R' D' R D");
        } else {
            cw('top'); // bring the next untwisted corner around
        }
    }
    if (!cornersDone()) throw new Error('yellow corner twist failed');

    // Final top-layer alignment.
    while (sticker(U_EDGE.front, 'front') !== COLOR.front) cw('top');

    if (!isSolved(state)) throw new Error('solver finished unsolved');
    return simplify(out);
}
