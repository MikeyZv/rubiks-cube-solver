import {Quaternion} from './quaternion.js';

let cubes = [];
for (let i = 0; i < 27; i++) {
    cubes[i] = new Quaternion(0,0,0,0);
    cubes[i].toQuaternion();
}

function rotateFront() {
    let front = document.querySelectorAll(".front-side");

    let frontGrid = [front[0], front[3], front[6],  // 18 19 20
                     front[1], front[4], front[7],  // 21 22 23
                     front[2], front[5], front[8]]; // 24 25 26

    let corners = [cubes[18], cubes[24], cubes[26], cubes[20]];
    let edges = [cubes[19], cubes[21], cubes[25], cubes[23]]; 

    let q2 = new Quaternion(90,0,0,1);
    q2.toQuaternion(); 

    for (let i = 18; i < 27; i++) {
        cubes[i].multiply(q2);
    }

    let temp = new Quaternion(corners[0].w, corners[0].x, corners[0].y, corners[0].z);
    for (let i = 0; i < 3; i++) {
        corners[i].update(corners[i+1]);
    }
    corners[3].update(temp);

    let temp2 = new Quaternion(edges[0].w, edges[0].x, edges[0].y, edges[0].z);
    for (let i = 0; i < 3; i++) {
       edges[i].update(edges[i+1]);
    }
    edges[3].update(temp2);

    let index = 18;
    for (let i = 0; i < 9; i++) {
        cubes[index].toAxisAngle();
        frontGrid[i].style.transform = `rotate3d(${cubes[index].x}, ${cubes[index].y}, ${cubes[index].z}, ${cubes[index].w}deg)`;
        cubes[index].toQuaternion();
        index++;
    }

    //top-left-corner
    // front[0].style.transformOrigin = "150px 150px 0px";

    // //left-middle-edge
    // front[1].style.transformOrigin = "150px center 0px";

    // //bottom-left-corner
    // front[2].style.transformOrigin = "150px -50px 0px";

    // //top-middle-edge
    // front[3].style.transformOrigin = "center 150px 0px";

    // //bottom-middle-edge
    // front[5].style.transformOrigin = "center -50px 0px";

    // //top-right-corner
    // front[6].style.transformOrigin = "-50px 150px 0px";

    // //right-middle-edge
    // front[7].style.transformOrigin = "-50px center 0px";

    // //bottom-right-corner
    // front[8].style.transformOrigin = "-50px -50px 0px";
 
};

function rotateMiddleVertical() {
    let midVert = document.querySelectorAll(".middle-side");
    
    let midVertGrid = [midVert[0], midVert[3], midVert[6],  // 9 10 11
                       midVert[1], midVert[4], midVert[7],  // 12 13 14
                       midVert[2], midVert[5], midVert[8]]; // 15 16 17

    let corners = [cubes[9], cubes[15], cubes[17], cubes[11]];
    let edges = [cubes[10], cubes[12], cubes[16], cubes[14]]; 

    let q2 = new Quaternion(90,0,0,1);
    q2.toQuaternion(); 

    for (let i = 9; i < 18; i++) {
        cubes[i].multiply(q2);
    }

    let temp = new Quaternion(corners[0].w, corners[0].x, corners[0].y, corners[0].z);
    for (let i = 0; i < 3; i++) {
        corners[i].update(corners[i+1]);
    }
    corners[3].update(temp);

    let temp2 = new Quaternion(edges[0].w, edges[0].x, edges[0].y, edges[0].z);
    for (let i = 0; i < 3; i++) {
       edges[i].update(edges[i+1]);
    }
    edges[3].update(temp2);

    let index = 9;
    for (let i = 0; i < 9; i++) {
        cubes[index].toAxisAngle();
        midVertGrid[i].style.transform = `rotate3d(${cubes[index].x}, ${cubes[index].y}, ${cubes[index].z}, ${cubes[index].w}deg)`;
        cubes[index].toQuaternion();
        index++;
    }

    // //top-left-corner
    // midVert[0].style.transformOrigin = "150px 150px -100px";

    // //left-middle-edge
    // midVert[1].style.transformOrigin = "150px center -100px";

    // //bottom-left-corner
    // midVert[2].style.transformOrigin = "150px -50px -100px";

    // //top-middle-edge
    // midVert[3].style.transformOrigin = "center 150px -100px";

    // //bottom-middle-edge
    // midVert[5].style.transformOrigin = "center -50px -100px";

    // //top-right-corner
    // midVert[6].style.transformOrigin = "-50px 150px -100px";

    // //right-middle-edge
    // midVert[7].style.transformOrigin = "-50px center -100px";

    // //bottom-right-corner
    // midVert[8].style.transformOrigin = "-50px -50px -100px";
    
};

function rotateBack() {
    let back = document.querySelectorAll(".back-side");

    let backGrid = [back[0], back[3], back[6],  // 0 1 2
                    back[1], back[4], back[7],  // 3 4 5
                    back[2], back[5], back[8]]; // 6 7 8

    let corners = [cubes[0], cubes[6], cubes[8], cubes[2]];
    let edges = [cubes[1], cubes[3], cubes[7], cubes[5]]; 

    let q2 = new Quaternion(90,0,0,1);
    q2.toQuaternion(); 

    for (let i = 0; i < 9; i++) {
        cubes[i].multiply(q2);
    }

    let temp = new Quaternion(corners[0].w, corners[0].x, corners[0].y, corners[0].z);
    for (let i = 0; i < 3; i++) {
        corners[i].update(corners[i+1]);
    }
    corners[3].update(temp);

    let temp2 = new Quaternion(edges[0].w, edges[0].x, edges[0].y, edges[0].z);
    for (let i = 0; i < 3; i++) {
       edges[i].update(edges[i+1]);
    }
    edges[3].update(temp2);

    for (let i = 0; i < 9; i++) {
        cubes[i].toAxisAngle();
        backGrid[i].style.transform = `rotate3d(${cubes[i].x}, ${cubes[i].y}, ${cubes[i].z}, ${cubes[i].w}deg)`;
        cubes[i].toQuaternion();
    }

    // //top-left-corner
    // back[0].style.transformOrigin = "150px 150px -100px";

    // //left-middle-edge
    // back[1].style.transformOrigin = "150px center -100px";

    // //bottom-left-corner
    // back[2].style.transformOrigin = "150px -50px -100px";

    // //top-middle-edge
    // back[3].style.transformOrigin = "center 150px -100px";

    // //bottom-middle-edge
    // back[5].style.transformOrigin = "center -50px -100px";

    // //top-right-corner
    // back[6].style.transformOrigin = "-50px 150px -100px";

    // //right-middle-edge
    // back[7].style.transformOrigin = "-50px center -100px";

    // //bottom-right-corner
    // back[8].style.transformOrigin = "-50px -50px -100px";
    
};

function rotateTop() {
    let top = document.querySelectorAll(".top-layer");

    let topGrid = [top[6], top[7], top[8],  // 0 1 2
                   top[3], top[4], top[5],  // 9 10 11
                   top[0], top[1], top[2]]; // 18 19 20

    let corners = [cubes[0], cubes[2], cubes[20], cubes[18]];
    let edges = [cubes[1], cubes[11], cubes[19], cubes[9]];

    let index = [0,1,2,9,10,11,18,19,20];

    let q2 = new Quaternion(90,0,1,0);
    q2.toQuaternion();

    for (let i = 0; i < 9; i++) {
        cubes[index[i]].multiply(q2);
    }

    let temp = new Quaternion(corners[0].w, corners[0].x, corners[0].y, corners[0].z);
    for (let i = 0; i < 3; i++) {
        corners[i].update(corners[i+1]);
    }
    corners[3].update(temp);

    let temp2 = new Quaternion(edges[0].w, edges[0].x, edges[0].y, edges[0].z);
    for (let i = 0; i < 3; i++) {
       edges[i].update(edges[i+1]);
    }
    edges[3].update(temp2);
    
    for (let i = 0; i < 9; i++) {
        cubes[index[i]].toAxisAngle();
        topGrid[i].style.transform = `rotate3d(${cubes[index[i]].x}, ${cubes[index[i]].y}, ${cubes[index[i]].z}, ${cubes[index[i]].w}deg)`;
        cubes[index[i]].toQuaternion();
    }

    //side-front
    //leftCornerPos
    // top[0].style.transformOrigin = "150px center -100px";

    // //middleEdgePos
    // top[1].style.transformOrigin = "center center -100px";

    // //rightCornerPos
    // top[2].style.transformOrigin = "-50px center -100px";

    // //side-middle
    // //leftEdge
    // top[3].style.transformOrigin = "150px center 0px";

    // //rightEdge
    // top[5].style.transformOrigin = "-50px center 0px";

    // //side-back
    // //leftCornerNeg
    // top[6].style.transformOrigin = "150px center 100px";

    // //middleEdgeNeg
    // top[7].style.transformOrigin = "center center 100px";

    // //rightCornerNeg
    // top[8].style.transformOrigin = "-50px center 100px";
};

function rotateMiddleHorizontal() {
    let midHor = document.getElementsByClassName("mid-layer");

    let midHorGrid = [midHor[6], midHor[7], midHor[8],  // 3 4 5
                      midHor[3], midHor[4], midHor[5],  // 12 13 14
                      midHor[0], midHor[1], midHor[2]]; // 21 22 23

    let corners = [cubes[3], cubes[5], cubes[23], cubes[21]];
    let edges = [cubes[4], cubes[14], cubes[22], cubes[12]];

    let index = [3,4,5,12,13,14,21,22,23];

    let q2 = new Quaternion(90,0,1,0);
    q2.toQuaternion();

    for (let i = 0; i < 9; i++) {
        cubes[index[i]].multiply(q2);
    }

    let temp = new Quaternion(corners[0].w, corners[0].x, corners[0].y, corners[0].z);
    for (let i = 0; i < 3; i++) {
        corners[i].update(corners[i+1]);
    }
    corners[3].update(temp);

    let temp2 = new Quaternion(edges[0].w, edges[0].x, edges[0].y, edges[0].z);
    for (let i = 0; i < 3; i++) {
       edges[i].update(edges[i+1]);
    }
    edges[3].update(temp2);
    
    for (let i = 0; i < 9; i++) {
        cubes[index[i]].toAxisAngle();
        midHorGrid[i].style.transform = `rotate3d(${cubes[index[i]].x}, ${cubes[index[i]].y}, ${cubes[index[i]].z}, ${cubes[index[i]].w}deg)`;
        cubes[index[i]].toQuaternion();
    }
    //side-front
    //leftCornerPos
    // midHor[0].style.transformOrigin = "150px center -100px";

    // //middleEdgePos
    // midHor[1].style.transformOrigin = "center center -100px";

    // //rightCornerPos
    // midHor[2].style.transformOrigin = "-50px center -100px";

    // //side-middle
    // //leftEdge
    // midHor[3].style.transformOrigin = "150px center 0px";

    // //rightEdge
    // midHor[5].style.transformOrigin = "-50px center 0px";

    // //side-back
    // //leftCornerNeg
    // midHor[6].style.transformOrigin = "150px center 100px";

    // //middleEdgeNeg
    // midHor[7].style.transformOrigin = "center center 100px";

    // //rightCornerNeg
    // midHor[8].style.transformOrigin = "-50px center 100px";
};

function rotateBottom() {
    let bottom = document.querySelectorAll(".bottom-layer");

    let bottomGrid = [bottom[6], bottom[7], bottom[8],  // 6 7 8
                      bottom[3], bottom[4], bottom[5],  // 15 16 17
                      bottom[0], bottom[1], bottom[2]]; // 24 25 26

    let corners = [cubes[6], cubes[8], cubes[26], cubes[24]];
    let edges = [cubes[7], cubes[17], cubes[25], cubes[15]];

    let index = [6,7,8,15,16,17,24,25,26];

    let q2 = new Quaternion(90,0,1,0);
    q2.toQuaternion();

    for (let i = 0; i < 9; i++) {
        cubes[index[i]].multiply(q2);
    }

    let temp = new Quaternion(corners[0].w, corners[0].x, corners[0].y, corners[0].z);
    for (let i = 0; i < 3; i++) {
        corners[i].update(corners[i+1]);
    }
    corners[3].update(temp);

    let temp2 = new Quaternion(edges[0].w, edges[0].x, edges[0].y, edges[0].z);
    for (let i = 0; i < 3; i++) {
       edges[i].update(edges[i+1]);
    }
    edges[3].update(temp2);
    
    for (let i = 0; i < 9; i++) {
        cubes[index[i]].toAxisAngle();
        bottomGrid[i].style.transform = `rotate3d(${cubes[index[i]].x}, ${cubes[index[i]].y}, ${cubes[index[i]].z}, ${cubes[index[i]].w}deg)`;
        cubes[index[i]].toQuaternion();
    }

    // //side-front
    // //leftCornerPos
    // bottom[0].style.transformOrigin = "150px center -100px";

    // //middleEdgePos
    // bottom[1].style.transformOrigin = "center center -100px";

    // //rightCornerPos
    // bottom[2].style.transformOrigin = "-50px center -100px";

    // //side-middle
    // //leftEdge
    // bottom[3].style.transformOrigin = "150px center 0px";

    // //rightEdge
    // bottom[5].style.transformOrigin = "-50px center 0px";

    // //side-back
    // //leftCornerNeg
    // bottom[6].style.transformOrigin = "150px center 100px";

    // //middleEdgeNeg
    // bottom[7].style.transformOrigin = "center center 100px";

    // //rightCornerNeg
    // bottom[8].style.transformOrigin = "-50px center 100px";
};

function rotateLeftSide() {
    let leftSide = document.querySelectorAll(".left-side");

    let leftSideGrid = [leftSide[0], leftSide[3], leftSide[6],  // 18 9 0
                        leftSide[1], leftSide[4], leftSide[7],  // 21 12 3
                        leftSide[2], leftSide[5], leftSide[8]]; // 24 15 6

    let corners = [cubes[18], cubes[24], cubes[6], cubes[0]];
    let edges = [cubes[9], cubes[21], cubes[15], cubes[3]];

    let index = [18,9,0,21,12,3,24,15,6];

    let q2 = new Quaternion(90,1,0,0);
    q2.toQuaternion();

    for (let i = 0; i < 9; i++) {
        cubes[index[i]].multiply(q2);
    }

    let temp = new Quaternion(corners[0].w, corners[0].x, corners[0].y, corners[0].z);
    for (let i = 0; i < 3; i++) {
        corners[i].update(corners[i+1]);
    }
    corners[3].update(temp);

    let temp2 = new Quaternion(edges[0].w, edges[0].x, edges[0].y, edges[0].z);
    for (let i = 0; i < 3; i++) {
       edges[i].update(edges[i+1]);
    }
    edges[3].update(temp2);
    
    for (let i = 0; i < 9; i++) {
        cubes[index[i]].toAxisAngle();
        leftSideGrid[i].style.transform = `rotate3d(${cubes[index[i]].x}, ${cubes[index[i]].y}, ${cubes[index[i]].z}, ${cubes[index[i]].w}deg)`;
        cubes[index[i]].toQuaternion();
    }
    // //side-front
    // //top corner postive z
    // leftSide[0].style.transformOrigin = "center 150px -100px";

    // //edge positive z
    // leftSide[1].style.transformOrigin = "center center -100px";

    // //bottom corner positive z
    // leftSide[2].style.transformOrigin = "center -50px -100px";

    // //side-middle
    // //top edge
    // leftSide[3].style.transformOrigin = "center 150px 0px";

    // //bottom edge
    // leftSide[5].style.transformOrigin = "center -50px 0px";

    // //side-back
    // //top corner negative z
    // leftSide[6].style.transformOrigin = "center 150px 100px";

    // //edge negative z
    // leftSide[7].style.transformOrigin = "center center 100px";

    // //bottom corner negative z
    // leftSide[8].style.transformOrigin = "center -50px 100px";
};

function rotateMiddleVertical2() {
    let midVert = document.querySelectorAll(".middleVert");

    let midVertGrid = [midVert[0], midVert[3], midVert[6],  // 19 10 1
                       midVert[1], midVert[4], midVert[7],  // 22 13 4
                       midVert[2], midVert[5], midVert[8]]; // 25 16 7

    let corners = [cubes[19], cubes[25], cubes[7], cubes[1]];
    let edges = [cubes[10], cubes[22], cubes[16], cubes[4]];

    let index = [19,10,1,22,13,4,25,16,7];

    let q2 = new Quaternion(90,1,0,0);
    q2.toQuaternion();

    for (let i = 0; i < 9; i++) {
        cubes[index[i]].multiply(q2);
    }

    let temp = new Quaternion(corners[0].w, corners[0].x, corners[0].y, corners[0].z);
    for (let i = 0; i < 3; i++) {
        corners[i].update(corners[i+1]);
    }
    corners[3].update(temp);

    let temp2 = new Quaternion(edges[0].w, edges[0].x, edges[0].y, edges[0].z);
    for (let i = 0; i < 3; i++) {
       edges[i].update(edges[i+1]);
    }
    edges[3].update(temp2);
    
    for (let i = 0; i < 9; i++) {
        cubes[index[i]].toAxisAngle();
        midVertGrid[i].style.transform = `rotate3d(${cubes[index[i]].x}, ${cubes[index[i]].y}, ${cubes[index[i]].z}, ${cubes[index[i]].w}deg)`;
        cubes[index[i]].toQuaternion();
    }
    
    // //side-front
    // //top corner postive z
    // midVert[0].style.transformOrigin = "center 150px -100px";

    // //edge positive z
    // midVert[1].style.transformOrigin = "center center -100px";

    // //bottom corner positive z
    // midVert[2].style.transformOrigin = "center -50px -100px";

    // //side-middle
    // //top edge
    // midVert[3].style.transformOrigin = "center 150px 0px";

    // //bottom edge
    // midVert[5].style.transformOrigin = "center -50px 0px";

    // //side-back
    // //top corner negative z
    // midVert[6].style.transformOrigin = "center 150px 100px";

    // //edge negative z
    // midVert[7].style.transformOrigin = "center center 100px";

    // //bottom corner negative z
    // midVert[8].style.transformOrigin = "center -50px 100px";
};

function rotateRightSide() {
    let rightSide = document.querySelectorAll(".right-side");

    let rightSideGrid = [rightSide[0], rightSide[3], rightSide[6],  // 20 11 2
                         rightSide[1], rightSide[4], rightSide[7],  // 23 14 5
                         rightSide[2], rightSide[5], rightSide[8]]; // 26 17 8

    let corners = [cubes[20], cubes[26], cubes[8], cubes[2]];
    let edges = [cubes[11], cubes[23], cubes[17], cubes[5]];

    let index = [20,11,2,23,14,5,26,17,8];

    let q2 = new Quaternion(90,1,0,0);
    q2.toQuaternion();

    for (let i = 0; i < 9; i++) {
        cubes[index[i]].multiply(q2);
    }

    let temp = new Quaternion(corners[0].w, corners[0].x, corners[0].y, corners[0].z);
    for (let i = 0; i < 3; i++) {
        corners[i].update(corners[i+1]);
    }
    corners[3].update(temp);

    let temp2 = new Quaternion(edges[0].w, edges[0].x, edges[0].y, edges[0].z);
    for (let i = 0; i < 3; i++) {
       edges[i].update(edges[i+1]);
    }
    edges[3].update(temp2);
    
    for (let i = 0; i < 9; i++) {
        cubes[index[i]].toAxisAngle();
        rightSideGrid[i].style.transform = `rotate3d(${cubes[index[i]].x}, ${cubes[index[i]].y}, ${cubes[index[i]].z}, ${cubes[index[i]].w}deg)`;
        cubes[index[i]].toQuaternion();
    }

    // //side-front
    // //top corner postive z
    // rightSide[0].style.transformOrigin = "center 150px -100px";

    // //edge positive z
    // rightSide[1].style.transformOrigin = "center center -100px";

    // //bottom corner positive z
    // rightSide[2].style.transformOrigin = "center -50px -100px";

    // //side-middle
    // //top edge
    // rightSide[3].style.transformOrigin = "center 150px 0px";

    // //bottom edge
    // rightSide[5].style.transformOrigin = "center -50px 0px";

    // //side-back
    // //top corner negative z
    // rightSide[6].style.transformOrigin = "center 150px 100px";

    // //edge negative z
    // rightSide[7].style.transformOrigin = "center center 100px";

    // //bottom corner negative z
    // rightSide[8].style.transformOrigin = "center -50px 100px";

};

// function randomRotation() {
//     let randomNum = Math.floor(Math.random() * 9) + 1;

//     switch(true) {
//         case(randomNum == 1):
//             rotateFront();
//             break;
//         case(randomNum == 2):
//             rotateMiddleVertical();
//             break;
//         case(randomNum == 3):
//             rotateBack();
//             break;
//         case(randomNum == 4):
//             rotateTop();
//             break;
//         case(randomNum == 5):
//             rotateMiddleHorizontal();
//             break;
//         case(randomNum == 6):
//             rotateBottom();
//             break;
//         case(randomNum == 7):
//             rotateLeftSide();
//             break;
//         case(randomNum == 8):
//             rotateMiddleVertical2();
//             break;
//         case(randomNum == 9):
//             rotateRightSide();
//             break;
//     }
// };

// setInterval(randomRotation, 50);
// rotateTop();
// rotateLeftSide();
// rotateBottom();
// rotateRightSide();
// rotateBack();
// rotateMiddleVertical();
// rotateMiddleHorizontal();
// rotateMiddleVertical2();
// rotateFront();
// setInterval(rotateTop, 1000);
// setInterval(rotateMiddleHorizontal, 1000);
// setInterval(rotateBottom, 1000);
// setInterval(rotateFront, 1000);
// setInterval(rotateMiddleVertical, 1000);
// setInterval(rotateBack, 1000);
// setInterval(rotateLeftSide, 1000);
// setInterval(rotateMiddleVertical2, 1000);
// setInterval(rotateRightSide, 1000);


