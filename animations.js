let rotations;
let cubeWidth = 50;
const rotationTiming = {
    duration: 250,
    iterations: 1
};


export function animateFront(sign) {
    let front = document.querySelector(".side-front");

    if (sign == '-') {
        rotations = [
            {transform: `rotate3d(0,0,-1, 0deg) translate3d(0,0,${cubeWidth}px`},
            {transform: `rotate3d(0,0,-1, 90deg) translate3d(0,0,${cubeWidth}px`},
        ];
        front.animate(rotations, rotationTiming);
    } else {
        rotations = [
            {transform: `rotate3d(0,0,1, 0deg) translate3d(0,0,${cubeWidth}px`},
            {transform: `rotate3d(0,0,1, 90deg) translate3d(0,0,${cubeWidth}px`},
        ];
        front.animate(rotations, rotationTiming);
    }
};

export function animateBack(sign) {
    let back = document.querySelector(".side-back");

    if (sign == '-') {
        rotations = [
            {transform: `rotate3d(0,0,-1, 0deg) translate3d(0,0,-${cubeWidth}px`},
            {transform: `rotate3d(0,0,-1, 90deg) translate3d(0,0,-${cubeWidth}px`},
        ];
        back.animate(rotations, rotationTiming);
    } else {
        rotations = [
            {transform: `rotate3d(0,0,1, 0deg) translate3d(0,0,-${cubeWidth}px`},
            {transform: `rotate3d(0,0,1, 90deg) translate3d(0,0,-${cubeWidth}px`},
        ];
        back.animate(rotations, rotationTiming);
    }
};

export function animateLeft(sign) {
    let leftFront = document.querySelector(".left-side-col-front");
    let leftMid = document.querySelector(".left-side-col-mid");
    let leftBack = document.querySelector(".left-side-col-back");
    
    leftFront.style.transformOrigin = `center center -${cubeWidth}px`
    leftBack.style.transformOrigin = `center center ${cubeWidth}px`

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
    
    rightFront.style.transformOrigin = `center center -${cubeWidth}px`
    rightBack.style.transformOrigin = `center center ${cubeWidth}px`

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