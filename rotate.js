import { Quaternion } from './quaternion.js';
import { Cube } from './cube.js';
import { animateFront, animateBack, animateLeft, animateRight, animateBottom, animateTop } from './animations.js';

// Two ways the 9 stickers of a layer are read out of the DOM into grid order.
const GRID = {
    A: [0, 3, 6, 1, 4, 7, 2, 5, 8], // front / back / left / right
    B: [6, 7, 8, 3, 4, 5, 0, 1, 2], // top / bottom
};

// The inverse turn cycles the same 4 pieces the other way: swap positions 1 and 3.
const rev = a => [a[0], a[3], a[2], a[1]];

export let cubes = [];
let solverCubes = [];
for (let i = 0; i < 27; i++) {
    cubes[i] = new Quaternion(0, 0, 0, 0);
    cubes[i].toQuaternion();
    solverCubes[i] = new Cube('G', 'B', 'R', 'O', 'Y', 'W');
}

// Rotate the four given quaternions one step around their shared cycle.
function cycleQuaternions(quats) {
    let temp = new Quaternion(quats[0].w, quats[0].x, quats[0].y, quats[0].z);
    for (let i = 0; i < 3; i++) quats[i].update(quats[i + 1]);
    quats[3].update(temp);
}

// Core layer spin shared by every face turn and every middle-slice turn.
function spinLayer(indices, grid, axis, conjugate, corners, edges) {
    let q2 = new Quaternion(90, ...axis);
    q2.toQuaternion();
    if (conjugate) q2.conjugate();

    for (const i of indices) cubes[i].multiply(q2);

    cycleQuaternions(corners.map(i => cubes[i]));
    cycleQuaternions(edges.map(i => cubes[i]));

    for (let i = 0; i < 9; i++) {
        const c = cubes[indices[i]];
        c.toAxisAngle();
        grid[i].style.transform = `rotate3d(${c.x}, ${c.y}, ${c.z}, ${c.w}deg)`;
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

// Per-face configuration. Everything a turn needs that differs between faces.
const FACES = {
    front:  { selector: '.front-side',   grid: 'A', axis: [0, 0, 1], spin: 'spinZ', animate: animateFront,
              indices: [18, 19, 20, 21, 22, 23, 24, 25, 26], corners: [18, 24, 26, 20], edges: [19, 21, 25, 23] },
    back:   { selector: '.back-side',    grid: 'A', axis: [0, 0, 1], spin: 'spinZ', animate: animateBack,
              indices: [0, 1, 2, 3, 4, 5, 6, 7, 8], corners: [0, 6, 8, 2], edges: [1, 3, 7, 5] },
    top:    { selector: '.top-layer',    grid: 'B', axis: [0, 1, 0], spin: 'spinY', animate: animateTop, hide: 'top',
              indices: [0, 1, 2, 9, 10, 11, 18, 19, 20], corners: [0, 2, 20, 18], edges: [1, 11, 19, 9] },
    bottom: { selector: '.bottom-layer', grid: 'B', axis: [0, 1, 0], spin: 'spinY', animate: animateBottom, hide: 'bottom',
              indices: [6, 7, 8, 15, 16, 17, 24, 25, 26], corners: [6, 8, 26, 24], edges: [7, 17, 25, 15] },
    left:   { selector: '.left-side',    grid: 'A', axis: [1, 0, 0], spin: 'spinX', animate: animateLeft,
              indices: [18, 9, 0, 21, 12, 3, 24, 15, 6], corners: [18, 24, 6, 0], edges: [9, 21, 15, 3] },
    right:  { selector: '.right-side',   grid: 'A', axis: [1, 0, 0], spin: 'spinX', animate: animateRight,
              indices: [20, 11, 2, 23, 14, 5, 26, 17, 8], corners: [20, 26, 8, 2], edges: [11, 23, 17, 5] },
};

function performRotation(cfg, sign) {
    const els = document.querySelectorAll(cfg.selector);
    const grid = GRID[cfg.grid].map(i => els[i]);
    const minus = sign == '-';

    if (cfg.hide) setHiddenFaces(cfg.hide, false);

    const anim = cfg.animate(sign);

    const spin = minus ? cfg.spin + 'Inverse' : cfg.spin;
    for (const i of cfg.indices) solverCubes[i][spin]();

    const corners = minus ? rev(cfg.corners) : cfg.corners;
    const edges = minus ? rev(cfg.edges) : cfg.edges;

    // Wait for the animation to finish before applying the permanent rotation to the cubes.
    anim.onfinish = () => {
        if (cfg.hide) setHiddenFaces(cfg.hide, true);
        spinLayer(cfg.indices, grid, cfg.axis, minus, corners, edges);
    };
}

export function rotateFront(sign) { performRotation(FACES.front, sign); }
export function rotateBack(sign) { performRotation(FACES.back, sign); }
export function rotateTop(sign) { performRotation(FACES.top, sign); }
export function rotateBottom(sign) { performRotation(FACES.bottom, sign); }
export function rotateLeft(sign) { performRotation(FACES.left, sign); }
export function rotateRight(sign) { performRotation(FACES.right, sign); }

function randomRotation() {
    const rotations = [rotateFront, rotateBack, rotateTop, rotateBottom, rotateLeft, rotateRight];
    rotations[Math.floor(Math.random() * 6)]('+');
}

function addListeners() {
    const rotators = { front: rotateFront, back: rotateBack, top: rotateTop, bottom: rotateBottom, left: rotateLeft, right: rotateRight };
    for (const [face, fn] of Object.entries(rotators)) {
        document.querySelector(`#${face}-listener`).addEventListener('click', () => fn('+'));
    }
}

let shuffle = setInterval(randomRotation, 300);

setTimeout(() => {
    clearInterval(shuffle);
    addListeners();
}, 3000);
