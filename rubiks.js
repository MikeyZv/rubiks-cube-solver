let red = [];
let yellow = [];
let blue = [];
let green = [];
let white = [];
let orange = [];
frontDegree = 90;
backDegree = 90;
midVertDegree = 90;
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

function rotateMidVertical() {
    let midVert = document.querySelector(".side-middle");
    midVert.style.transform = "rotate3d(0,0,1," +midVertDegree+ "deg)";
    if (midVertDegree >= 360) {
        midVertDegree = 90;
    } else {
        midVertDegree += 90;
    }
}

function rotateMidHorizontal() {
    let midHor = document.getElementsByClassName("mid-layer");
    for (let i = 0; i < midHor.length; i++) {
        midHor[i].style.transform = "rotate3d(0,1,0," +midHorDegree+ "deg)";
    }
    if (midHorDegree >= 360) {
        midHorDegree = 90;
    } else {
        midHorDegree += 90;
    }
}

function rotateBack() {
    let back = document.querySelector(".side-back");
    back.style.transform = "rotate3d(0,0,1," +backDegree+ "deg) translate3d(0,0,-100px)";
    if (backDegree >= 360) {
        backDegree = 90;
    } else {
        backDegree += 90;
    }
}

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
}

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
}


setInterval(rotateTop, 800);
setInterval(rotateBottom, 500);
setInterval(rotateFront, 200);
setInterval(rotateBack, 400);
setInterval(rotateMidVertical, 700);
setInterval(rotateMidHorizontal, 300);


