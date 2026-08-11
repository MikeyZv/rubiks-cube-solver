// Headless test of the visual pipeline: replicates the quaternion math that
// rotate.js performs per turn (spinCubes + the paintCubes axis-angle round trip),
// interprets each quaternion the way the browser interprets the CSS rotate3d
// transform, and checks sticker-by-sticker that the displayed colors always match
// the solver's tracked color state.
//
// NOTE: visualTurn below is a replica of spinCubes/cycleQuaternions in rotate.js
// (which can't be imported here because it touches the DOM at load). If the turn
// math in rotate.js changes, this replica must change with it.
import { Quaternion } from './quaternion.js';
import { applyTurn, solvedState, TURNS } from './solver.js';

const AXIS = { front: [0, 0, 1], back: [0, 0, 1], top: [0, 1, 0], bottom: [0, 1, 0], left: [1, 0, 0], right: [1, 0, 0] };
const rev = a => [a[0], a[3], a[2], a[1]];

// --- replica of the quaternion side of rotate.js ---
const cubes = [];
for (let i = 0; i < 27; i++) { cubes[i] = new Quaternion(0, 0, 0, 0); cubes[i].toQuaternion(); }

function cycleQuaternions(quats) {
    let temp = new Quaternion(quats[0].w, quats[0].x, quats[0].y, quats[0].z);
    for (let i = 0; i < 3; i++) quats[i].update(quats[i + 1]);
    quats[3].update(temp);
}

function visualTurn(face, sign) {
    const t = TURNS[face];
    const minus = sign === '-';
    let q2 = new Quaternion(90, ...AXIS[face]);
    q2.toQuaternion();
    if (minus) q2.conjugate();

    for (const i of t.indices) cubes[i].multiply(q2);
    cycleQuaternions((minus ? rev(t.corners) : t.corners).map(i => cubes[i]));
    cycleQuaternions((minus ? rev(t.edges) : t.edges).map(i => cubes[i]));

    // The round trip every piece goes through in paintCubes.
    for (let i = 0; i < 27; i++) { cubes[i].toAxisAngle(); cubes[i].toQuaternion(); }
}

// --- interpret a quaternion the way the browser interprets the CSS transform ---
function cssMatrix(q) {
    const c = new Quaternion(q.w, q.x, q.y, q.z);
    c.toAxisAngle();
    let [deg, x, y, z] = [c.w, c.x, c.y, c.z];
    const len = Math.hypot(x, y, z);
    if (!Number.isFinite(deg + x + y + z)) return null; // invalid transform
    if (len < 1e-12) return [[1, 0, 0], [0, 1, 0], [0, 0, 1]]; // zero axis: no rotation
    x /= len; y /= len; z /= len;
    const a = deg * Math.PI / 180, s = Math.sin(a), co = Math.cos(a), t = 1 - co;
    return [
        [co + x * x * t, x * y * t - z * s, x * z * t + y * s],
        [y * x * t + z * s, co + y * y * t, y * z * t - x * s],
        [z * x * t - y * s, z * y * t + x * s, co + z * z * t],
    ];
}

// Base sticker directions in CSS coords (y points down): which world direction
// each colored face of an unrotated piece points.
const BASE = { G: [0, 0, 1], B: [0, 0, -1], R: [-1, 0, 0], O: [1, 0, 0], Y: [0, -1, 0], W: [0, 1, 0] };
const DIR_TO_FACE = { '0,0,1': 'front', '0,0,-1': 'back', '-1,0,0': 'left', '1,0,0': 'right', '0,-1,0': 'top', '0,1,0': 'bottom' };

// What colors does the quaternion say this piece shows, per world face?
function displayedColors(q) {
    const m = cssMatrix(q);
    if (!m) return null;
    const shown = {};
    for (const [color, v] of Object.entries(BASE)) {
        const r = [0, 1, 2].map(row => m[row][0] * v[0] + m[row][1] * v[1] + m[row][2] * v[2]);
        const snapped = r.map(n => Math.abs(n) < 0.5 ? 0 : Math.sign(n));
        shown[DIR_TO_FACE[snapped.join(',')]] = color;
    }
    return shown;
}

// --- run random turns, comparing every sticker after each one ---
const faces = Object.keys(TURNS);
const state = solvedState();
const FACE_NAMES = ['front', 'back', 'left', 'right', 'top', 'bottom'];
const turns = 20000;
let mismatches = 0;

for (let turn = 0; turn < turns; turn++) {
    const face = faces[Math.floor(Math.random() * 6)];
    const sign = Math.random() < 0.5 ? '+' : '-';
    visualTurn(face, sign);
    applyTurn(state, face, sign);

    for (let i = 0; i < 27; i++) {
        const shown = displayedColors(cubes[i]);
        if (!shown) { console.log(`turn ${turn}: piece ${i} has an invalid transform`); mismatches++; continue; }
        for (const f of FACE_NAMES) {
            if (shown[f] !== state[i][f]) {
                if (mismatches < 5) console.log(`turn ${turn} (${face}${sign}): piece ${i} face ${f} shows ${shown[f]}, tracked ${state[i][f]}`);
                mismatches++;
            }
        }
    }
    if (mismatches > 200) break;
}

if (mismatches) {
    console.log(`${mismatches} sticker mismatches`);
    process.exit(1);
}
console.log(`visual pipeline matches tracked state for ${turns} turns`);
