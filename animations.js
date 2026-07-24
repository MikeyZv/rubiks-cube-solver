import { cubes } from './rotate.js';

const root = document.documentElement;
const rotationTiming = { duration: 250, iterations: 1 };

const cubeWidth = () => getComputedStyle(root).getPropertyValue("--cube-width");

// A '-' turn just negates the rotation axis.
const dir = sign => (sign == '-' ? -1 : 1);

// Standard 0deg -> 90deg keyframe pair around an axis, with an optional transform suffix.
function keyframes(x, y, z, suffix = '') {
    return [
        { transform: `rotate3d(${x},${y},${z}, 0deg)${suffix}` },
        { transform: `rotate3d(${x},${y},${z}, 90deg)${suffix}` },
    ];
}

// Every animator returns its Animation so the caller can track when the rotation finishes.

// Front/back: spin the whole flat side around Z, translated to its depth.
export function animateFront(sign) {
    return document.querySelector(".side-front")
        .animate(keyframes(0, 0, dir(sign), ` translate3d(0,0,${cubeWidth()}`), rotationTiming);
}

export function animateBack(sign) {
    return document.querySelector(".side-back")
        .animate(keyframes(0, 0, dir(sign), ` translate3d(0,0,-${cubeWidth()}`), rotationTiming);
}

// Left/right: spin three depth-columns around X about a shifted origin.
function animateCols(prefix, sign) {
    const front = document.querySelector(`.${prefix}-side-col-front`);
    const mid = document.querySelector(`.${prefix}-side-col-mid`);
    const back = document.querySelector(`.${prefix}-side-col-back`);

    const w = cubeWidth();
    front.style.transformOrigin = `center center -${w}`;
    back.style.transformOrigin = `center center ${w}`;

    const frames = keyframes(dir(sign), 0, 0);
    front.animate(frames, rotationTiming);
    back.animate(frames, rotationTiming);

    // The mid column's animation is returned so the caller can track when the rotation finishes.
    return mid.animate(frames, rotationTiming);
}

export function animateLeft(sign) { return animateCols('left', sign); }
export function animateRight(sign) { return animateCols('right', sign); }

// Top/bottom: paint the flat hidden layer from the live cubes, then spin it around Y.
function animateSlice(prefix, index, sign) {
    const cells = document.querySelectorAll(`.hidden-${prefix}-cube`);
    const grid = [cells[6], cells[7], cells[8],
                  cells[3], cells[4], cells[5],
                  cells[0], cells[1], cells[2]];

    for (let i = 0; i < 9; i++) {
        cubes[index[i]].toAxisAngle();
        grid[i].style.transform = `rotate3d(${cubes[index[i]].x}, ${cubes[index[i]].y}, ${cubes[index[i]].z}, ${cubes[index[i]].w}deg)`;
        cubes[index[i]].toQuaternion();
    }

    return document.querySelector(`#hidden-${prefix}`).animate(keyframes(0, dir(sign), 0), rotationTiming);
}

export function animateBottom(sign) { return animateSlice('bottom', [6, 7, 8, 15, 16, 17, 24, 25, 26], sign); }
export function animateTop(sign) { return animateSlice('top', [0, 1, 2, 9, 10, 11, 18, 19, 20], sign); }
