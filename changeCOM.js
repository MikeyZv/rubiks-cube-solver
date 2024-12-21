const cubeWidth = 100;
const translateZ = 50;

function changeFrontCOM() {
    let front = document.querySelectorAll(".front-side");

    // top-left-corner
    // `${cubeWidth * 1.5} ${cubeWidth * 1.5} 0px`
    front[0].style.transformOrigin = "150px 150px 0px";

    //left-middle-edge
    front[1].style.transformOrigin = "150px center 0px";

    //bottom-left-corner
    front[2].style.transformOrigin = "150px -50px 0px";

    //top-middle-edge
    front[3].style.transformOrigin = "center 150px 0px";

    //bottom-middle-edge
    front[5].style.transformOrigin = "center -50px 0px";

    //top-right-corner
    front[6].style.transformOrigin = "-50px 150px 0px";

    //right-middle-edge
    front[7].style.transformOrigin = "-50px center 0px";

    //bottom-right-corner
    front[8].style.transformOrigin = "-50px -50px 0px";
};

function changeVerticalZCOM() {
    let midVert = document.querySelectorAll(".middle-side");

    //top-left-corner
    midVert[0].style.transformOrigin = "150px 150px -100px";

    //left-middle-edge
    midVert[1].style.transformOrigin = "150px center -100px";

    //bottom-left-corner
    midVert[2].style.transformOrigin = "150px -50px -100px";

    //top-middle-edge
    midVert[3].style.transformOrigin = "center 150px -100px";

    //bottom-middle-edge
    midVert[5].style.transformOrigin = "center -50px -100px";

    //top-right-corner
    midVert[6].style.transformOrigin = "-50px 150px -100px";

    //right-middle-edge
    midVert[7].style.transformOrigin = "-50px center -100px";

    //bottom-right-corner
    midVert[8].style.transformOrigin = "-50px -50px -100px";
};

function changeBackCOM() {
    let back = document.querySelectorAll(".back-side");

    //top-left-corner
    back[0].style.transformOrigin = "150px 150px -100px";

    //left-middle-edge
    back[1].style.transformOrigin = "150px center -100px";

    //bottom-left-corner
    back[2].style.transformOrigin = "150px -50px -100px";

    //top-middle-edge
    back[3].style.transformOrigin = "center 150px -100px";

    //bottom-middle-edge
    back[5].style.transformOrigin = "center -50px -100px";

    //top-right-corner
    back[6].style.transformOrigin = "-50px 150px -100px";

    //right-middle-edge
    back[7].style.transformOrigin = "-50px center -100px";

    //bottom-right-corner
    back[8].style.transformOrigin = "-50px -50px -100px";
};

function changeTopCOM() {
    let top = document.querySelectorAll(".top-layer");

    // side-front
    // leftCornerPos
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
};

function changeMiddleHorizontalCOM() {
    let midHor = document.getElementsByClassName("mid-layer");

    // side-front
    // leftCornerPos
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
};

function changeBottomCOM() {
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
};

function changeLeftSideCOM() {
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
};

function changeMiddleVerticalXCOM() {
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
};

function changeRightSideCOM() {
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
};

