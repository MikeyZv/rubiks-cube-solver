let red = [];
let yellow = [];
let blue = [];
let green = [];
let white = [];
let orange = [];
frontDegree = 90;
backDegree = 90;
midVertDegree = 90;

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

function rotateMidVert() {
    let midVert = document.querySelector(".side-middle");
    midVert.style.transform = "rotate3d(0,0,1," +midVertDegree+ "deg)";
    if (midVertDegree >= 360) {
        midVertDegree = 90;
    } else {
        midVertDegree += 90;
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

setInterval(rotateFront, 1000);
setInterval(rotateBack, 500);
setInterval(rotateMidVert, 700);


