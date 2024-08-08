let red = [];
let yellow = [];
let blue = [];
let green = [];
let white = [];
let orange = [];
let frontDegree = 0;
let midVertDegree = 0;
let backDegree = 0;
let leftSideDegree = 0;
let midVert2Degree = 0;
let rightSideDegree = 0;
let topDegree = 0;
let midHorDegree = 0;
let bottomDegree = 0;


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
    // setTimeout(()=>{
    //     front.style.transform = "rotate3d(0,0,1, " +(frontDegree)+ "deg) translate3d(0,0,100px)";
    //     front.style.transform = "rotate3d(0,0,1, " +(frontDegree+90)+ "deg) translate3d(0,0,100px)";
    // }, 500)
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
    let midHor = document.querySelectorAll(".mid-layer");
    for (let i = 0; i < midHor.length; i++) {
        let transformations = {
            transform: "rotate3d(0,1,0, " +(midHorDegree)+ "deg)",
            transform: "rotate3d(0,1,0, " +(midHorDegree+90)+ "deg)",
        }
        let keyframesTiming = {
            duration: 500,
            iterations: 1,
        }
        midHor[i].animate(transformations, keyframesTiming);
    }
    // setTimeout(()=>{
    //     for (let i = 0; i < midHor.length; i++) {
    //         midHor[i].style.transform = "rotate3d(0,1,0, " +(midHorDegree)+ "deg)";
    //         midHor[i].style.transform = "rotate3d(0,1,0, " +(midHorDegree+90)+ "deg)";
    //     }
    //     midHorDegree += 90;
    // }, 500)
};

function rotateTop() {
    let top = document.querySelectorAll(".top-layer");

    // side-front
    // let leftCornerPos = document.querySelector(".left-corner-z-pos");
    top[0].style.transformOrigin = "150px center -100px";

    // let middleEdgePos = document.querySelector(".middle-edge-z-pos");
    top[1].style.transformOrigin = "center center -100px";

    // let rightCornerPos = document.querySelector(".right-corner-z-pos");
    top[2].style.transformOrigin = "-50px center -100px";

    //side-middle
    // let leftEdge = document.querySelector(".left-edge-z");
    top[3].style.transformOrigin = "150px center 0px";

    // let rightEdge = document.querySelector(".right-edge-z");
    top[5].style.transformOrigin = "-50px center 0px";

    //side-back
    // let leftCornerNeg = document.querySelector(".left-corner-z-neg");
    top[6].style.transformOrigin = "150px center 100px";

    // let middleEdgeNeg = document.querySelector(".middle-edge-z-neg");
    top[7].style.transformOrigin = "center center 100px";

    // let rightCornerNeg = document.querySelector(".right-corner-z-neg");
    top[8].style.transformOrigin = "-50px center 100px";
    
    //adds spinning animation dependent the side being turned
    if (topDegree == 0) {
        for (let i = 0; i < top.length; i++) {
            top[i].classList.add("spin90-y-axis");
        }
    } else if (topDegree == 90) {
        for (let i = 0; i < top.length; i++) {
            top[i].classList.add("spin180-y-axis");
        }
    } else if (topDegree == 180) {
        for (let i = 0; i < top.length; i++) {
            top[i].classList.add("spin270-y-axis");
        }
    } else if (topDegree == 270) {
        for (let i = 0; i < top.length; i++) {
            top[i].classList.add("spin360-y-axis");
        }
    }

    //waits for animation to play before spinning the individuals cubes
    setTimeout(()=>{
        for (let i = 0; i < top.length; i++) {
            top[i].classList.remove("spin90-y-axis");
            top[i].classList.remove("spin180-y-axis");
            top[i].classList.remove("spin270-y-axis");
            top[i].classList.remove("spin360-y-axis");
            top[i].style.transformOrigin = "center";
        }
        for (let i = 0; i < top.length; i++) {
            top[i].style.transform = "rotate3d(0,1,0, " +(topDegree)+ "deg)";
            top[i].style.transform = "rotate3d(0,1,0, " +(topDegree+90)+ "deg)";
        }
        if (topDegree == 270) {
            topDegree = 0;
        } else {
            topDegree += 90;
        }
    }, 500)

};

function rotateBottom() {
    let bottom = document.querySelectorAll(".bottom-layer");
    for (let i = 0; i < bottom.length; i++) {
        let transformations = {
            transform: "rotate3d(0,1,0, " +(bottomDegree)+ "deg)",
            transform: "rotate3d(0,1,0, " +(bottomDegree+90)+ "deg)",
        }
        let keyframesTiming = {
            duration: 500,
            iterations: 1,
        }
        bottom[i].animate(transformations, keyframesTiming);
    }
    setTimeout(()=>{
        for (let i = 0; i < bottom.length; i++) {
            bottom[i].style.transform = "rotate3d(0,1,0, " +(bottomDegree)+ "deg)";
            bottom[i].style.transform = "rotate3d(0,1,0, " +(bottomDegree+90)+ "deg)";
        }
        bottomDegree += 90;
    }, 500)
};

function rotateLeftSide() {
    let leftSide = document.querySelectorAll(".left-side");
    for (let i = 0; i < leftSide.length; i++) {
        let transformations = {
            transform: "rotate3d(1,0,0, " +(leftSideDegree)+ "deg)",
            transform: "rotate3d(1,0,0, " +(leftSideDegree+90)+ "deg)",
        }
        let keyframesTiming = {
            duration: 500,
            iterations: 1,
        }
        leftSide[i].animate(transformations, keyframesTiming);
    }
    setTimeout(()=>{
        for (let i = 0; i < leftSide.length; i++) {
            leftSide[i].style.transform = "rotate3d(1,0,0, " +(leftSideDegree)+ "deg)";
            leftSide[i].style.transform = "rotate3d(1,0,0, " +(leftSideDegree+90)+ "deg)";
        }
        leftSideDegree += 90;
    }, 500)
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

// rotateTop();
// rotateFront();
setInterval(rotateTop, 1000);
// setInterval(rotateMiddleHorizontal, 1000);
// setInterval(rotateBottom, 1000);
// setInterval(rotateFront, 1500);
// setInterval(rotateMiddleVertical, 1000);
// setInterval(rotateBack, 1000);
// setInterval(rotateLeftSide, 1000);
// setInterval(rotateMiddleVertical2, 275);
// setInterval(rotateRightSide, 300);


