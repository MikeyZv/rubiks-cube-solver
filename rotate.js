import { Quaternion } from './quaternion.js';
import { TURNS, applyTurn, solvedState, rev, solve } from './solver.js';
import { animateFront, animateBack, animateLeft, animateRight, animateBottom, animateTop } from './animations.js';

// Two ways the 9 stickers of a layer are read out of the DOM into grid order.
// 
const GRID = {
    A: [0, 3, 6, 1, 4, 7, 2, 5, 8], // front / back / left / right
    B: [6, 7, 8, 3, 4, 5, 0, 1, 2], // top / bottom
};

export let cubes = [];
let solverCubes = solvedState();
for (let i = 0; i < 27; i++) {
    cubes[i] = new Quaternion(0, 0, 0, 0);
    cubes[i].toQuaternion();
}

// Rotate the four given quaternions one step around their shared cycle.
function cycleQuaternions(quats) {
    let temp = new Quaternion(quats[0].w, quats[0].x, quats[0].y, quats[0].z);
    for (let i = 0; i < 3; i++) quats[i].update(quats[i + 1]);
    quats[3].update(temp);
}

// Advance the quaternion state of one layer: multiply every piece by the 90-degree
// turn and cycle the corner and edge pieces one step.
function spinCubes(cfg, minus) {
    let q2 = new Quaternion(90, ...cfg.axis);
    q2.toQuaternion();
    if (minus) q2.conjugate();

    for (const i of cfg.indices) cubes[i].multiply(q2);

    cycleQuaternions((minus ? rev(cfg.corners) : cfg.corners).map(i => cubes[i]));
    cycleQuaternions((minus ? rev(cfg.edges) : cfg.edges).map(i => cubes[i]));
}

// Write every piece's current orientation into the DOM. Repainting the whole cube
// (not just the turned layer) makes each bake self-correcting: if a repaint were
// ever lost to a timing bug, the next one restores the entire cube.
function paintCubes() {
    for (const [slot, el] of Object.entries(PIECE_ELEMENTS)) {
        const c = cubes[slot];
        c.toAxisAngle();
        el.style.transform = `rotate3d(${c.x}, ${c.y}, ${c.z}, ${c.w}deg)`;
        c.toQuaternion();
    }
}

// Blank (or restore) the flat "hidden" face used while a top/bottom turn animates.
function setHiddenFaces(prefix, visible) {
    const colors = { front: 'green', back: 'blue', top: 'yellow', bottom: 'white', left: 'red', right: 'orange' };
    for (const face of Object.keys(colors)) {
        const els = document.querySelectorAll(`.hide-${prefix}-face-${face}`);
        for (let i = 0; i < 9; i++) els[i].style.background = visible ? colors[face] : 'none';
    }
    document.querySelector(`#hidden-${prefix}`).style.display = visible ? 'none' : 'block';
}

// Per-face configuration: the shared turn data from solver.js (indices, cycles,
// spin) plus everything DOM-specific a turn needs.
const FACES = {
    front:  { ...TURNS.front,  selector: '.front-side',   grid: 'A', axis: [0, 0, 1], animate: animateFront },
    back:   { ...TURNS.back,   selector: '.back-side',    grid: 'A', axis: [0, 0, 1], animate: animateBack },
    top:    { ...TURNS.top,    selector: '.top-layer',    grid: 'B', axis: [0, 1, 0], animate: animateTop, hide: 'top' },
    bottom: { ...TURNS.bottom, selector: '.bottom-layer', grid: 'B', axis: [0, 1, 0], animate: animateBottom, hide: 'bottom' },
    left:   { ...TURNS.left,   selector: '.left-side',    grid: 'A', axis: [1, 0, 0], animate: animateLeft },
    right:  { ...TURNS.right,  selector: '.right-side',   grid: 'A', axis: [1, 0, 0], animate: animateRight },
};

// Slot index -> the piece's DOM element, built once from the per-face selectors.
// (The invisible core piece, slot 13, has no element.)
const PIECE_ELEMENTS = {};
for (const cfg of Object.values(FACES)) {
    const elements = document.querySelectorAll(cfg.selector);
    const grid = GRID[cfg.grid].map(i => elements[i]);
    for (let i = 0; i < 9; i++) PIECE_ELEMENTS[cfg.indices[i]] = grid[i];
}

// Pending bake function for the current turn, if any.
let pendingBake = null;

function performRotation(face, sign, duration) {
    // Snap any ongoing animations to the end and bake their state immediately.
    for (const a of document.getAnimations()) a.finish();
    if (pendingBake) {
        const stale = pendingBake;
        pendingBake = null;
        stale();
    }

    const cfg = FACES[face];
    const minus = sign == '-';

    if (cfg.hide) setHiddenFaces(cfg.hide, false);

    // The animation must start before the state advances: the hidden top/bottom
    // stand-in paints itself from the pre-turn quaternions.
    const anim = cfg.animate(sign, duration);

    // Advance both models immediately; only the repaint waits for the animation.
    applyTurn(solverCubes, face, sign);
    spinCubes(cfg, minus);

    // Prepare the bake function that repaints the cube once the animation finishes.
    const bake = () => {
        if (cfg.hide) setHiddenFaces(cfg.hide, true);
        paintCubes();
    };
    pendingBake = bake;
    anim.onfinish = () => {
        if (pendingBake === bake) {
            pendingBake = null;
            bake();
        }
    };
}

export function rotateFront(sign) { performRotation('front', sign); }
export function rotateBack(sign) { performRotation('back', sign); }
export function rotateTop(sign) { performRotation('top', sign); }
export function rotateBottom(sign) { performRotation('bottom', sign); }
export function rotateLeft(sign) { performRotation('left', sign); }
export function rotateRight(sign) { performRotation('right', sign); }

// While a solve or shuffle plays back, user taps and both buttons are ignored.
let busy = false;
function setBusy(value) {
    busy = value;
    document.querySelector('#solve-button').disabled = value;
    document.querySelector('#shuffle-button').disabled = value;
}

// Play a list of {face, sign} moves, one turn every `pace` ms, each animated
// over `duration` ms.
function playMoves(moves, pace = 300, duration = 250) {
    setBusy(true);
    let i = 0;
    const player = setInterval(() => {
        const m = moves[i++];
        performRotation(m.face, m.sign, duration);
        if (i === moves.length) {
            clearInterval(player);
            setBusy(false);
        }
    }, pace);
}

// Compute a solution from the tracked color state and play it back.
function solveCube() {
    if (busy) return;
    const moves = solve(solverCubes);
    if (moves.length > 0) playMoves(moves);
}

// Scramble the cube with a burst of random turns.
function shuffleCube() {
    if (busy) return;
    const faces = Object.keys(FACES);
    const moves = [];
    for (let i = 0; i < 20; i++) {
        moves.push({ face: faces[Math.floor(Math.random() * 6)], sign: Math.random() < 0.5 ? '+' : '-' });
    }
    playMoves(moves, 150, 130);
}

function randomRotation() {
    const rotations = [rotateFront, rotateBack, rotateTop, rotateBottom, rotateLeft, rotateRight];
    rotations[Math.floor(Math.random() * 6)]('+');
}

function addListeners() {
    // Tapping a face always turns it clockwise as seen while looking at that face.
    const rotators = {
        front: [rotateFront, '+'], back: [rotateBack, '-'],
        left: [rotateLeft, '-'], right: [rotateRight, '+'],
        top: [rotateTop, '-'], bottom: [rotateBottom, '+'],
    };

    // Each tap waits briefly to see whether a second tap follows before turning.
    const DOUBLE_TAP_MS = 200;
    let pending = null;

    function firePending() {
        clearTimeout(pending.timer);
        const { fn, sign } = pending;
        pending = null;
        // Dropped if a solve/shuffle started while the tap was waiting.
        if (!busy) fn(sign);
    }

    function tap(face, fn, sign) {
        if (busy) return;
        if (pending && pending.face === face) {
            clearTimeout(pending.timer);
            pending = null;
            fn(sign === '+' ? '-' : '+');
            return;
        }
        // A tap on a different face ends the wait: run the earlier turn now.
        if (pending) firePending();
        pending = { face, fn, sign, timer: setTimeout(firePending, DOUBLE_TAP_MS) };
    }

    for (const [face, [fn, sign]] of Object.entries(rotators)) {
        const el = document.querySelector(`#${face}-listener`);
        el.addEventListener('click', () => tap(face, fn, sign));
        // The listeners are role="button" divs, so Enter/Space must be wired up manually.
        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (!e.repeat) tap(face, fn, sign);
            }
        });
    }
    document.querySelector('#solve-button').addEventListener('click', solveCube);
    document.querySelector('#shuffle-button').addEventListener('click', shuffleCube);
}

let shuffle = setInterval(randomRotation, 300);

setTimeout(() => {
    clearInterval(shuffle);
    addListeners();
}, 3000);
