let red = [];
let yellow = [];
let blue = [];
let green = [];
let white = [];
let orange = [];
frontDegree = 0;
midVertDegree = 0;
backDegree = 0;
leftSideDegree = 0;
rightSideDegree = 0;
midVert2Degree = 0;
midHorDegree = 0;
bottomDegree = 0;
topDegree = 0;


function rotateFront() { 
    let front = document.querySelector(".side-front");
    let transformations = {
        transform: "rotate3d(0,0,1, " +(frontDegree)+ "deg) translate3d(0,0,100px)",
        transform: "rotate3d(0,0,1, " +(frontDegree+90)+ "deg) translate3d(0,0,100px)",
    }
    let keyframesTiming = {
        duration: 500,
        iterations: 1,
    }
    front.animate(transformations, keyframesTiming);
    setTimeout(()=>{
        front.style.transform = "rotate3d(0,0,1, " +(frontDegree)+ "deg) translate3d(0,0,100px)";
        front.style.transform = "rotate3d(0,0,1, " +(frontDegree+90)+ "deg) translate3d(0,0,100px)";
        frontDegree += 90;
    }, 500)
};

function rotateMiddleVertical() {
    let midVert = document.querySelector(".side-middle");
    let transformations = {
        transform: "rotate3d(0,0,1, " +(midVertDegree)+ "deg)",
        transform: "rotate3d(0,0,1, " +(midVertDegree+90)+ "deg)",
    }
    let keyframesTiming = {
        duration: 500,
        iterations: 1,
    }
    midVert.animate(transformations, keyframesTiming);
    setTimeout(()=>{
        midVert.style.transform = "rotate3d(0,0,1, " +(midVertDegree)+ "deg)";
        midVert.style.transform = "rotate3d(0,0,1, " +(midVertDegree+90)+ "deg)";
        midVertDegree += 90;
    }, 500)
};

function rotateBack() {
    let back = document.querySelector(".side-back");
    let transformations = {
        transform: "rotate3d(0,0,1, " +(backDegree)+ "deg) translate3d(0,0,-100px)",
        transform: "rotate3d(0,0,1, " +(backDegree+90)+ "deg) translate3d(0,0,-100px)",
    }
    let keyframesTiming = {
        duration: 500,
        iterations: 1,
    }
    back.animate(transformations, keyframesTiming);
    setTimeout(()=>{
        back.style.transform = "rotate3d(0,0,1, " +(backDegree)+ "deg) translate3d(0,0,-100px)";
        back.style.transform = "rotate3d(0,0,1, " +(backDegree+90)+ "deg) translate3d(0,0,-100px)";
        backDegree += 90;
    }, 500)
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


// setInterval(rotateTop, 100);
// setInterval(rotateMiddleHorizontal, 125);
// setInterval(rotateBottom, 150);
// setInterval(rotateFront, 1000);
setInterval(rotateMiddleVertical, 1000);
// setInterval(rotateBack, 1000);
// setInterval(rotateLeftSide, 250);
// setInterval(rotateMiddleVertical2, 275);
// setInterval(rotateRightSide, 300);


