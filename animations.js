import {cubes} from './rotate.js';
let rotations;
const root = document.documentElement; 
const cubeWidth = getComputedStyle(root).getPropertyValue("--cube-width"); 
const rotationTiming = {
    duration: 250,
    iterations: 1
};


export function animateFront(sign) {
    let front = document.querySelector(".side-front");

    if (sign == '-') {
        rotations = [
            {transform: `rotate3d(0,0,-1, 0deg) translate3d(0,0,${cubeWidth}`},
            {transform: `rotate3d(0,0,-1, 90deg) translate3d(0,0,${cubeWidth}`},
        ];
        front.animate(rotations, rotationTiming);
    } else {
        rotations = [
            {transform: `rotate3d(0,0,1, 0deg) translate3d(0,0,${cubeWidth}`},
            {transform: `rotate3d(0,0,1, 90deg) translate3d(0,0,${cubeWidth}`},
        ];
        front.animate(rotations, rotationTiming);
    }
};

export function animateBack(sign) {
    let back = document.querySelector(".side-back");

    if (sign == '-') {
        rotations = [
            {transform: `rotate3d(0,0,-1, 0deg) translate3d(0,0,-${cubeWidth}`},
            {transform: `rotate3d(0,0,-1, 90deg) translate3d(0,0,-${cubeWidth}`},
        ];
        back.animate(rotations, rotationTiming);
    } else {
        rotations = [
            {transform: `rotate3d(0,0,1, 0deg) translate3d(0,0,-${cubeWidth}`},
            {transform: `rotate3d(0,0,1, 90deg) translate3d(0,0,-${cubeWidth}`},
        ];
        back.animate(rotations, rotationTiming);
    }
};

export function animateLeft(sign) {
    let leftFront = document.querySelector(".left-side-col-front");
    let leftMid = document.querySelector(".left-side-col-mid");
    let leftBack = document.querySelector(".left-side-col-back");
    
    leftFront.style.transformOrigin = `center center -${cubeWidth}`
    leftBack.style.transformOrigin = `center center ${cubeWidth}`

    if (sign == '-') {
        rotations = [
            {transform: `rotate3d(-1,0,0, 0deg)`},
            {transform: `rotate3d(-1,0,0, 90deg)`},
        ];
        leftFront.animate(rotations, rotationTiming);
        leftMid.animate(rotations, rotationTiming);
        leftBack.animate(rotations, rotationTiming);
    } else {
        rotations = [
            {transform: `rotate3d(1,0,0, 0deg)`},
            {transform: `rotate3d(1,0,0, 90deg)`},
        ];
        leftFront.animate(rotations, rotationTiming);
        leftMid.animate(rotations, rotationTiming);
        leftBack.animate(rotations, rotationTiming);
    }
};

export function animateRight(sign) {
    let rightFront = document.querySelector(".right-side-col-front");
    let rightMid = document.querySelector(".right-side-col-mid");
    let rightBack = document.querySelector(".right-side-col-back");
    
    rightFront.style.transformOrigin = `center center -${cubeWidth}`
    rightBack.style.transformOrigin = `center center ${cubeWidth}`

    if (sign == '-') {
        rotations = [
            {transform: `rotate3d(-1,0,0, 0deg)`},
            {transform: `rotate3d(-1,0,0, 90deg)`},
        ];
        rightFront.animate(rotations, rotationTiming);
        rightMid.animate(rotations, rotationTiming);
        rightBack.animate(rotations, rotationTiming);
    } else {
        rotations = [
            {transform: `rotate3d(1,0,0, 0deg)`},
            {transform: `rotate3d(1,0,0, 90deg)`},
        ];
        rightFront.animate(rotations, rotationTiming);
        rightMid.animate(rotations, rotationTiming);
        rightBack.animate(rotations, rotationTiming);
    }
};

export function animateBottom(sign) {
    let bottom = document.querySelectorAll(".hidden-bottom-cube");

    let bottomGrid = [bottom[6], bottom[7], bottom[8],  // 6 7 8
                      bottom[3], bottom[4], bottom[5],  // 15 16 17
                      bottom[0], bottom[1], bottom[2]]; // 24 25 26

    let index = [6,7,8,15,16,17,24,25,26];

    for (let i = 0; i < 9; i++) {
        cubes[index[i]].toAxisAngle();
        bottomGrid[i].style.transform = `rotate3d(${cubes[index[i]].x}, ${cubes[index[i]].y}, ${cubes[index[i]].z}, ${cubes[index[i]].w}deg)`;
        cubes[index[i]].toQuaternion();
    }

    let hiddenBottom = document.querySelector("#hidden-bottom");

    if (sign == '-') {
        rotations = [
            {transform: `rotate3d(0,-1,0, 0deg)`},
            {transform: `rotate3d(0,-1,0, 90deg)`},
        ];
        hiddenBottom.animate(rotations, rotationTiming);
    } else {
        rotations = [
            {transform: `rotate3d(0,1,0, 0deg)`},
            {transform: `rotate3d(0,1,0, 90deg)`},
        ];
        hiddenBottom.animate(rotations, rotationTiming);
    }
};

export function animateTop(sign) {
    let top = document.querySelectorAll(".hidden-top-cube");

    let topGrid = [top[6], top[7], top[8],  // 0 1 2
                   top[3], top[4], top[5],  // 9 10 11
                   top[0], top[1], top[2]]; // 18 19 20

    let index = [0,1,2,9,10,11,18,19,20];

    for (let i = 0; i < 9; i++) {
        cubes[index[i]].toAxisAngle();
        topGrid[i].style.transform = `rotate3d(${cubes[index[i]].x}, ${cubes[index[i]].y}, ${cubes[index[i]].z}, ${cubes[index[i]].w}deg)`;
        cubes[index[i]].toQuaternion();
    }

    let hiddenTop = document.querySelector("#hidden-top");

    if (sign == '-') {
        rotations = [
            {transform: `rotate3d(0,-1,0, 0deg)`},
            {transform: `rotate3d(0,-1,0, 90deg)`},
        ];
        hiddenTop.animate(rotations, rotationTiming);
    } else {
        rotations = [
            {transform: `rotate3d(0,1,0, 0deg)`},
            {transform: `rotate3d(0,1,0, 90deg)`},
        ];
        hiddenTop.animate(rotations, rotationTiming);
    }
};