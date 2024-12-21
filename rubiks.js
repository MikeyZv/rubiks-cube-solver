import {Quaternion} from './quaternion.js';

const frontButton = document.getElementById("frontButton");
const backButton = document.getElementById("backButton");
const topButton = document.getElementById("topButton");
const bottomButton = document.getElementById("bottomButton");
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");

const frontButtonInv = document.getElementById("frontButtonInv");
const backButtonInv = document.getElementById("backButtonInv");
const topButtonInv = document.getElementById("topButtonInv");
const bottomButtonInv = document.getElementById("bottomButtonInv");
const leftButtonInv = document.getElementById("leftButtonInv");
const rightButtonInv = document.getElementById("rightButtonInv");

frontButton.addEventListener("click", () => {
    rotateFront('+');
});
backButton.addEventListener("click", () => {
    rotateBack('+');
});
topButton.addEventListener("click", () => {
    rotateTop('+');
});
bottomButton.addEventListener("click", () => {
    rotateBottom('+');
});
leftButton.addEventListener("click", () => {
    rotateLeft('+');
});
rightButton.addEventListener("click", () => {
    rotateRight('+');
});

frontButtonInv.addEventListener("click", () => {
    rotateFront('-');
});
backButtonInv.addEventListener("click", () => {
    rotateBack('-');
});
topButtonInv.addEventListener("click", () => {
    rotateTop('-');
});
bottomButtonInv.addEventListener("click", () => {
    rotateBottom('-');
});
leftButtonInv.addEventListener("click", () => {
    rotateLeft('-');
});
rightButtonInv.addEventListener("click", () => {
    rotateRight('-');
});


let cubes = [];
for (let i = 0; i < 27; i++) {
    cubes[i] = new Quaternion(0,0,0,0);
    cubes[i].toQuaternion();
}

function rotateFront(sign) {
    let front = document.querySelectorAll(".front-side");

    let frontGrid = [front[0], front[3], front[6],  // 18 19 20
                     front[1], front[4], front[7],  // 21 22 23
                     front[2], front[5], front[8]]; // 24 25 26

    let corners;
    let edges;

    if (sign == '-') {
        corners = [cubes[18], cubes[20], cubes[26], cubes[24]];
        edges = [cubes[19], cubes[23], cubes[25], cubes[21]];
    } else {
        corners = [cubes[18], cubes[24], cubes[26], cubes[20]];
        edges = [cubes[19], cubes[21], cubes[25], cubes[23]]; 
    }

    let q2 = new Quaternion(90,0,0,1);
    q2.toQuaternion();
    if (sign == '-') {
        q2.conjugate();
    }

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
};

function rotateMiddleZ() {
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
};

function rotateBack(sign) {
    let back = document.querySelectorAll(".back-side");

    let backGrid = [back[0], back[3], back[6],  // 0 1 2
                    back[1], back[4], back[7],  // 3 4 5
                    back[2], back[5], back[8]]; // 6 7 8

    let corners;
    let edges;

    if (sign == '-') {
        corners = [cubes[0], cubes[2], cubes[8], cubes[6]];
        edges = [cubes[1], cubes[5], cubes[7], cubes[3]]; 
    } else {
        corners = [cubes[0], cubes[6], cubes[8], cubes[2]];
        edges = [cubes[1], cubes[3], cubes[7], cubes[5]]; 
    }

    let q2 = new Quaternion(90,0,0,1);
    q2.toQuaternion(); 
    if (sign == '-') {
        q2.conjugate();
    }

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
};

function rotateTop(sign) {
    let top = document.querySelectorAll(".top-layer");

    let topGrid = [top[6], top[7], top[8],  // 0 1 2
                   top[3], top[4], top[5],  // 9 10 11
                   top[0], top[1], top[2]]; // 18 19 20

    let corners;
    let edges;

    if (sign == '-') {
        corners = [cubes[0], cubes[18], cubes[20], cubes[2]];
        edges = [cubes[1], cubes[9], cubes[19], cubes[11]];
    } else {
        corners = [cubes[0], cubes[2], cubes[20], cubes[18]];
        edges = [cubes[1], cubes[11], cubes[19], cubes[9]];
    }

    let index = [0,1,2,9,10,11,18,19,20];

    let q2 = new Quaternion(90,0,1,0);
    q2.toQuaternion();
    if (sign == '-') {
        q2.conjugate();
    }

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
};

function rotateMiddleY() {
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
};

function rotateBottom(sign) {
    let bottom = document.querySelectorAll(".bottom-layer");

    let bottomGrid = [bottom[6], bottom[7], bottom[8],  // 6 7 8
                      bottom[3], bottom[4], bottom[5],  // 15 16 17
                      bottom[0], bottom[1], bottom[2]]; // 24 25 26

    let corners;
    let edges;

    if (sign == '-') {
        corners = [cubes[6], cubes[24], cubes[26], cubes[8]];
        edges = [cubes[7], cubes[15], cubes[25], cubes[17]];
    } else {
        corners = [cubes[6], cubes[8], cubes[26], cubes[24]];
        edges = [cubes[7], cubes[17], cubes[25], cubes[15]];
    }

    let index = [6,7,8,15,16,17,24,25,26];

    let q2 = new Quaternion(90,0,1,0);
    q2.toQuaternion();
    if (sign == '-') {
        q2.conjugate();
    }

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
};

function rotateLeft(sign) {
    let leftSide = document.querySelectorAll(".left-side");

    let leftSideGrid = [leftSide[0], leftSide[3], leftSide[6],  // 18 9 0
                        leftSide[1], leftSide[4], leftSide[7],  // 21 12 3
                        leftSide[2], leftSide[5], leftSide[8]]; // 24 15 6

    let corners;
    let edges;

    if (sign == '-') {
        corners = [cubes[18], cubes[0], cubes[6], cubes[24]];
        edges = [cubes[9], cubes[3], cubes[15], cubes[21]];
    } else {
        corners = [cubes[18], cubes[24], cubes[6], cubes[0]];
        edges = [cubes[9], cubes[21], cubes[15], cubes[3]];
    }

    let index = [18,9,0,21,12,3,24,15,6];

    let q2 = new Quaternion(90,1,0,0);
    q2.toQuaternion();
    if (sign == '-') {
        q2.conjugate();
    }

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
};

function rotateMiddleX() {
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
};

function rotateRight(sign) {
    let rightSide = document.querySelectorAll(".right-side");

    let rightSideGrid = [rightSide[0], rightSide[3], rightSide[6],  // 20 11 2
                         rightSide[1], rightSide[4], rightSide[7],  // 23 14 5
                         rightSide[2], rightSide[5], rightSide[8]]; // 26 17 8

    let corners;
    let edges;

    if (sign == '-') {
        corners = [cubes[20], cubes[2], cubes[8], cubes[26]];
        edges = [cubes[11], cubes[5], cubes[17], cubes[23]];
    } else {
        corners = [cubes[20], cubes[26], cubes[8], cubes[2]];
        edges = [cubes[11], cubes[23], cubes[17], cubes[5]];
    }

    let index = [20,11,2,23,14,5,26,17,8];

    let q2 = new Quaternion(90,1,0,0);
    q2.toQuaternion();
    if (sign == '-') {
        q2.conjugate();
    }

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
};

function randomRotation() {
    let randomNum = Math.floor(Math.random() * 6) + 1;

    switch(true) {
        case(randomNum == 1):
            rotateFront();
            break;
        case(randomNum == 2):
            rotateBack();
            break;
        case(randomNum == 3):
            rotateTop();
            break;
        case(randomNum == 4):
            rotateBottom();
            break;
        case(randomNum == 5):
            rotateLeft();
            break;
        case(randomNum == 6):
            rotateRight();
            break;
    }
};

let shuffle = setInterval(randomRotation, 50);

setTimeout(() => {
    clearInterval(shuffle);
}, 3000);

