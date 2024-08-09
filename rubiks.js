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

function rotateTop() {
    let top = document.querySelectorAll(".top-layer");

    //side-front
    //leftCornerPos
    top[0].style.transformOrigin = "150px center -100px";

    //middleEdgePos
    top[1].style.transformOrigin = "center center -100px";

    //rightCornerPos
    top[2].style.transformOrigin = "-50px center -100px";

    //side-middle
    //leftEdge
    top[3].style.transformOrigin = "150px center 0px";

    //rightEdge
    top[5].style.transformOrigin = "-50px center 0px";

    //side-back
    //leftCornerNeg
    top[6].style.transformOrigin = "150px center 100px";

    //middleEdgeNeg
    top[7].style.transformOrigin = "center center 100px";

    //rightCornerNeg
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

function rotateMiddleHorizontal() {
    let midHor = document.querySelectorAll(".mid-layer");

    //side-front
    //leftCornerPos
    midHor[0].style.transformOrigin = "150px center -100px";

    //middleEdgePos
    midHor[1].style.transformOrigin = "center center -100px";

    //rightCornerPos
    midHor[2].style.transformOrigin = "-50px center -100px";

    //side-middle
    //leftEdge
    midHor[3].style.transformOrigin = "150px center 0px";

    //rightEdge
    midHor[5].style.transformOrigin = "-50px center 0px";

    //side-back
    //leftCornerNeg
    midHor[6].style.transformOrigin = "150px center 100px";

    //middleEdgeNeg
    midHor[7].style.transformOrigin = "center center 100px";

    //rightCornerNeg
    midHor[8].style.transformOrigin = "-50px center 100px";
    
    //adds spinning animation dependent the side being turned
    if (midHorDegree == 0) {
        for (let i = 0; i < midHor.length; i++) {
            midHor[i].classList.add("spin90-y-axis");
        }
    } else if (midHorDegree == 90) {
        for (let i = 0; i < midHor.length; i++) {
            midHor[i].classList.add("spin180-y-axis");
        }
    } else if (midHorDegree == 180) {
        for (let i = 0; i < midHor.length; i++) {
            midHor[i].classList.add("spin270-y-axis");
        }
    } else if (midHorDegree == 270) {
        for (let i = 0; i < midHor.length; i++) {
            midHor[i].classList.add("spin360-y-axis");
        }
    }

    //waits for animation to play before spinning the individuals cubes
    setTimeout(()=>{
        for (let i = 0; i < midHor.length; i++) {
            midHor[i].classList.remove("spin90-y-axis");
            midHor[i].classList.remove("spin180-y-axis");
            midHor[i].classList.remove("spin270-y-axis");
            midHor[i].classList.remove("spin360-y-axis");
            midHor[i].style.transformOrigin = "center";
        }
        for (let i = 0; i < midHor.length; i++) {
            midHor[i].style.transform = "rotate3d(0,1,0, " +(midHorDegree)+ "deg)";
            midHor[i].style.transform = "rotate3d(0,1,0, " +(midHorDegree+90)+ "deg)";
        }
        if (midHorDegree == 270) {
            midHorDegree = 0;
        } else {
            midHorDegree += 90;
        }
    }, 500)
};

function rotateBottom() {
    let bottom = document.querySelectorAll(".bottom-layer");

    //side-front
    //leftCornerPos
    bottom[0].style.transformOrigin = "150px center -100px";

    //middleEdgePos
    bottom[1].style.transformOrigin = "center center -100px";

    //rightCornerPos
    bottom[2].style.transformOrigin = "-50px center -100px";

    //side-middle
    //leftEdge
    bottom[3].style.transformOrigin = "150px center 0px";

    //rightEdge
    bottom[5].style.transformOrigin = "-50px center 0px";

    //side-back
    //leftCornerNeg
    bottom[6].style.transformOrigin = "150px center 100px";

    //middleEdgeNeg
    bottom[7].style.transformOrigin = "center center 100px";

    //rightCornerNeg
    bottom[8].style.transformOrigin = "-50px center 100px";

    //adds spinning animation dependent the side being turned
    if (bottomDegree == 0) {
        for (let i = 0; i < bottom.length; i++) {
            bottom[i].classList.add("spin90-y-axis");
        }
    } else if (bottomDegree == 90) {
        for (let i = 0; i < bottom.length; i++) {
            bottom[i].classList.add("spin180-y-axis");
        }
    } else if (bottomDegree == 180) {
        for (let i = 0; i < bottom.length; i++) {
            bottom[i].classList.add("spin270-y-axis");
        }
    } else if (bottomDegree == 270) {
        for (let i = 0; i < bottom.length; i++) {
            bottom[i].classList.add("spin360-y-axis");
        }
    }

    //waits for animation to play before spinning the individuals cubes
    setTimeout(()=>{
        for (let i = 0; i < bottom.length; i++) {
            bottom[i].classList.remove("spin90-y-axis");
            bottom[i].classList.remove("spin180-y-axis");
            bottom[i].classList.remove("spin270-y-axis");
            bottom[i].classList.remove("spin360-y-axis");
            bottom[i].style.transformOrigin = "center";
        }
        for (let i = 0; i < bottom.length; i++) {
            bottom[i].style.transform = "rotate3d(0,1,0, " +(bottomDegree)+ "deg)";
            bottom[i].style.transform = "rotate3d(0,1,0, " +(bottomDegree+90)+ "deg)";
        }
        if (bottomDegree == 270) {
            bottomDegree = 0;
        } else {
            bottomDegree += 90;
        }
    }, 500)
};

function rotateLeftSide() {
    let leftSide = document.querySelectorAll(".left-side");

    //side-front
    //top corner postive z
    leftSide[0].style.transformOrigin = "center 150px -100px";

    //edge positive z
    leftSide[1].style.transformOrigin = "center center -100px";

    //bottom corner positive z
    leftSide[2].style.transformOrigin = "center -50px -100px";

    //side-middle
    //top edge
    leftSide[3].style.transformOrigin = "center 150px 0px";

    //bottom edge
    leftSide[5].style.transformOrigin = "center -50px 0px";

    //side-back
    //top corner negative z
    leftSide[6].style.transformOrigin = "center 150px 100px";

    //edge negative z
    leftSide[7].style.transformOrigin = "center center 100px";

    //bottom corner negative z
    leftSide[8].style.transformOrigin = "center -50px 100px";

    //adds spinning animation dependent the side being turned
    if (leftSideDegree == 0) {
        for (let i = 0; i < leftSide.length; i++) {
            leftSide[i].classList.add("spin90-x-axis");
        }
    } else if (leftSideDegree == 90) {
        for (let i = 0; i < leftSide.length; i++) {
            leftSide[i].classList.add("spin180-x-axis");
        }
    } else if (leftSideDegree == 180) {
        for (let i = 0; i < leftSide.length; i++) {
            leftSide[i].classList.add("spin270-x-axis");
        }
    } else if (leftSideDegree == 270) {
        for (let i = 0; i < leftSide.length; i++) {
            leftSide[i].classList.add("spin360-x-axis");
        }
    }

    //waits for animation to play before spinning the individuals cubes
    setTimeout(()=>{
        for (let i = 0; i < leftSide.length; i++) {
            leftSide[i].classList.remove("spin90-x-axis");
            leftSide[i].classList.remove("spin180-x-axis");
            leftSide[i].classList.remove("spin270-x-axis");
            leftSide[i].classList.remove("spin360-x-axis");
            leftSide[i].style.transformOrigin = "center";
        }
        for (let i = 0; i < leftSide.length; i++) {
            leftSide[i].style.transform = "rotate3d(1,0,0, " +(leftSideDegree)+ "deg)";
            leftSide[i].style.transform = "rotate3d(1,0,0, " +(leftSideDegree+90)+ "deg)";
        }
        if (leftSideDegree == 270) {
            leftSideDegree = 0;
        } else {
            leftSideDegree += 90;
        }
    }, 500)
}

function rotateMiddleVertical2() {
    let midVert = document.querySelectorAll(".middleVert");
    //side-front
    //top corner postive z
    midVert[0].style.transformOrigin = "center 150px -100px";

    //edge positive z
    midVert[1].style.transformOrigin = "center center -100px";

    //bottom corner positive z
    midVert[2].style.transformOrigin = "center -50px -100px";

    //side-middle
    //top edge
    midVert[3].style.transformOrigin = "center 150px 0px";

    //bottom edge
    midVert[5].style.transformOrigin = "center -50px 0px";

    //side-back
    //top corner negative z
    midVert[6].style.transformOrigin = "center 150px 100px";

    //edge negative z
    midVert[7].style.transformOrigin = "center center 100px";

    //bottom corner negative z
    midVert[8].style.transformOrigin = "center -50px 100px";

    //adds spinning animation dependent the side being turned
    if (midVertDegree == 0) {
        for (let i = 0; i < midVert.length; i++) {
            midVert[i].classList.add("spin90-x-axis");
        }
    } else if (midVertDegree == 90) {
        for (let i = 0; i < midVert.length; i++) {
            midVert[i].classList.add("spin180-x-axis");
        }
    } else if (midVertDegree == 180) {
        for (let i = 0; i < midVert.length; i++) {
            midVert[i].classList.add("spin270-x-axis");
        }
    } else if (midVertDegree == 270) {
        for (let i = 0; i < midVert.length; i++) {
            midVert[i].classList.add("spin360-x-axis");
        }
    }

    //waits for animation to play before spinning the individuals cubes
    setTimeout(()=>{
        for (let i = 0; i < midVert.length; i++) {
            midVert[i].classList.remove("spin90-x-axis");
            midVert[i].classList.remove("spin180-x-axis");
            midVert[i].classList.remove("spin270-x-axis");
            midVert[i].classList.remove("spin360-x-axis");
            midVert[i].style.transformOrigin = "center";
        }
        for (let i = 0; i < midVert.length; i++) {
            midVert[i].style.transform = "rotate3d(1,0,0, " +(midVertDegree)+ "deg)";
            midVert[i].style.transform = "rotate3d(1,0,0, " +(midVertDegree+90)+ "deg)";
        }
        if (midVertDegree == 270) {
            midVertDegree = 0;
        } else {
            midVertDegree += 90;
        }
    }, 500)
};

function rotateRightSide() {
    let rightSide = document.querySelectorAll(".right-side");

    //side-front
    //top corner postive z
    rightSide[0].style.transformOrigin = "center 150px -100px";

    //edge positive z
    rightSide[1].style.transformOrigin = "center center -100px";

    //bottom corner positive z
    rightSide[2].style.transformOrigin = "center -50px -100px";

    //side-middle
    //top edge
    rightSide[3].style.transformOrigin = "center 150px 0px";

    //bottom edge
    rightSide[5].style.transformOrigin = "center -50px 0px";

    //side-back
    //top corner negative z
    rightSide[6].style.transformOrigin = "center 150px 100px";

    //edge negative z
    rightSide[7].style.transformOrigin = "center center 100px";

    //bottom corner negative z
    rightSide[8].style.transformOrigin = "center -50px 100px";

    //adds spinning animation dependent the side being turned
    if (rightSideDegree == 0) {
        for (let i = 0; i < rightSide.length; i++) {
            rightSide[i].classList.add("spin90-x-axis");
        }
    } else if (rightSideDegree == 90) {
        for (let i = 0; i < rightSide.length; i++) {
            rightSide[i].classList.add("spin180-x-axis");
        }
    } else if (rightSideDegree == 180) {
        for (let i = 0; i < rightSide.length; i++) {
            rightSide[i].classList.add("spin270-x-axis");
        }
    } else if (rightSideDegree == 270) {
        for (let i = 0; i < rightSide.length; i++) {
            rightSide[i].classList.add("spin360-x-axis");
        }
    }

    //waits for animation to play before spinning the individuals cubes
    setTimeout(()=>{
        for (let i = 0; i < rightSide.length; i++) {
            rightSide[i].classList.remove("spin90-x-axis");
            rightSide[i].classList.remove("spin180-x-axis");
            rightSide[i].classList.remove("spin270-x-axis");
            rightSide[i].classList.remove("spin360-x-axis");
            rightSide[i].style.transformOrigin = "center";
        }
        for (let i = 0; i < rightSide.length; i++) {
            rightSide[i].style.transform = "rotate3d(1,0,0, " +(rightSideDegree)+ "deg)";
            rightSide[i].style.transform = "rotate3d(1,0,0, " +(rightSideDegree+90)+ "deg)";
        }
        if (rightSideDegree == 270) {
            rightSideDegree = 0;
        } else {
            rightSideDegree += 90;
        }
    }, 500)
};

// rotateTop();
// rotateFront();
// setInterval(rotateTop, 1000);
// setInterval(rotateMiddleHorizontal, 1000);
// setInterval(rotateBottom, 1000);
// setInterval(rotateFront, 1500);
// setInterval(rotateMiddleVertical, 1000);
// setInterval(rotateBack, 1000);
setInterval(rotateLeftSide, 1000);
setInterval(rotateMiddleVertical2, 1000);
setInterval(rotateRightSide, 1000);


