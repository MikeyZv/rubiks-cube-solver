let red = [];
let yellow = [];
let blue = [];
let green = [];
let white = [];
let orange = [];
frontDegree = 90;
backDegree = 90;
leftSideDegree = 90;
rightSideDegree = 90;
midVertDegree = 90;
midVert2Degree = 90;
midHorDegree = 90;
bottomDegree = 90;
topDegree = 90;


function rotateFront() {
    // let transformations = {
    //     transform: "rotate3d(0,0,1, 0deg) translate3d(0,0,100px)",
    //     transform: "rotate3d(0,0,1, 90deg) translate3d(0,0,100px)",
    // }
    // let keyframesTiming = {duration: 1000}
    // front.animate(transformations, keyframesTiming);
    let front = document.querySelector(".side-front");
    front.style.transform = "rotate3d(0,0,1," +frontDegree+ "deg) translate3d(0,0,100px)";
    if (frontDegree >= 360) {
        frontDegree = 90;
    } else {
        frontDegree += 90;
    }
    // setTimeout(()=>{
    //     front.style.transform = "rotate3d(0,0,1, 90deg) translate3d(0,0,100px)";
    //     if (degree > 360) {
    //         degree = 0;
    //     } else {
    //         degree += 90;
    //     }
    // }, 1500)
};

function rotateMiddleVertical() {
    let midVert = document.querySelector(".side-middle");
    midVert.style.transform = "rotate3d(0,0,1," +midVertDegree+ "deg)";
    if (midVertDegree >= 360) {
        midVertDegree = 90;
    } else {
        midVertDegree += 90;
    }
};

function rotateBack() {
    let back = document.querySelector(".side-back");
    back.style.transform = "rotate3d(0,0,1," +backDegree+ "deg) translate3d(0,0,-100px)";
    if (backDegree >= 360) {
        backDegree = 90;
    } else {
        backDegree += 90;
    }
};

function rotateMiddleHorizontal() {
    let midHor = document.getElementsByClassName("mid-layer");
    for (let i = 0; i < midHor.length; i++) {
        midHor[i].style.transform = "rotate3d(0,1,0," +midHorDegree+ "deg)";
    }
    if (midHorDegree >= 360) {
        midHorDegree = 90;
    } else {
        midHorDegree += 90;
    }
};

function rotateTop() {
    let top = document.getElementsByClassName("top-layer");
    for (let i = 0; i < top.length; i++) {
        top[i].style.transform = "rotate3d(0,1,0," +topDegree+ "deg)";
    }
    if (topDegree >= 360) {
        topDegree = 90;
    } else {
        topDegree += 90;
    }
};

function rotateBottom() {
    let bottom = document.getElementsByClassName("bottom-layer");
    for (let i = 0; i < bottom.length; i++) {
        bottom[i].style.transform = "rotate3d(0,1,0," +bottomDegree+ "deg)";
    }
    if (bottomDegree >= 360) {
        bottomDegree = 90;
    } else {
        bottomDegree += 90;
    }
};

function rotateLeftSide() {
    let leftSide = document.getElementsByClassName("left-side");
    for (let i = 0; i < leftSide.length; i++) {
        leftSide[i].style.transform = "rotate3d(1,0,0," +leftSideDegree+ "deg)";
    }
    if (leftSideDegree >= 360) {
        leftSideDegree = 90;
    } else {
        leftSideDegree += 90;
    }
}

function rotateMiddleVertical2() {
    let midVert = document.getElementsByClassName("middleVert");
    for (let i = 0; i < midVert.length; i++) {
        midVert[i].style.transform = "rotate3d(1,0,0," +midVert2Degree+ "deg)";
    }
    if (midVert2Degree >= 360) {
        midVert2Degree = 90;
    } else {
        midVert2Degree += 90;
    }
};

function rotateRightSide() {
    let rightSide = document.getElementsByClassName("right-side");
    for (let i = 0; i < rightSide.length; i++) {
        rightSide[i].style.transform = "rotate3d(1,0,0," +rightSideDegree+ "deg)";
    }
    if (rightSideDegree >= 360) {
        rightSideDegree = 90;
    } else {
        rightSideDegree += 90;
    }
};

setInterval(rotateTop, 200);
setInterval(rotateBottom, 250);
setInterval(rotateFront, 350);
setInterval(rotateBack, 400);
setInterval(rotateMiddleVertical2, 450);
setInterval(rotateLeftSide, 500);
setInterval(rotateRightSide, 550);
setInterval(rotateMiddleHorizontal, 600);


