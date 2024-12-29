import { rotateFront, rotateBack, rotateTop, rotateBottom, rotateLeft, rotateRight } from "./rotate.js";
const cubeWidth = 50;
let touchstartX;
let touchstartY;
let touchendX;
let touchendY;


export function handleTouchStart(element, event) {
    const rect = element.getBoundingClientRect();
    touchstartX = event.touches[0].clientX - rect.left;
    touchstartY = event.touches[0].clientY - rect.top;
};

export function handleTouchMove(element, event) {
    const rect = element.getBoundingClientRect();
    touchendX = event.touches[0].clientX - rect.left;
    touchendY = event.touches[0].clientY - rect.top;
    console.log("X: " + touchendX);
    console.log("Y: " + touchendY);
    event.preventDefault();
};

export function handleTouchEnd(side) {
    const threshold = 25;
    const deltaX = touchendX - touchstartX;
    const deltaY = touchendY - touchstartY;
    if (((Math.abs(deltaX) > threshold)) || (Math.abs(deltaY) > threshold)) {
        if (deltaX > threshold) {
            switch(side) {
                case "front-top-sensor":
                case "back-top-sensor":
                    rotateTop('+');
                    break;
                case "front-right-sensor":
                    rotateRight('+');
                    break;
                case "front-left-sensor":
                    rotateLeft('+');
                    break;
                case "front-bottom-sensor":
                    rotateBottom('+');
                    break;
            }
        } else if (deltaX < threshold*(-1)) {
            switch(side) {
                case "front-top-sensor":
                case "back-top-sensor":
                    rotateTop('-');
                    break;
                case "front-right-sensor":
                    rotateRight('-');
                    break;
                case "front-left-sensor":
                    rotateLeft('-');
                    break;
                case "front-bottom-sensor":
                    rotateBottom('-');
                    break;
            }
        } else if (deltaY > threshold) {
            switch(side) {
                case "front-top-sensor":
                case "back-top-sensor":
                    rotateTop('+');
                    break;
                case "front-right-sensor":
                    rotateRight('-');
                    break;
                case "front-left-sensor":
                    rotateLeft('-');
                    break;
                case "front-bottom-sensor":
                    rotateBottom('+');
                    break;
            }
        } else if (deltaY < threshold*(-1)) {
            switch(side) {
                case "front-top-sensor":
                case "back-top-sensor":
                    rotateTop('-');
                    break;
                case "front-right-sensor":
                    rotateRight('+');
                    break;
                case "front-left-sensor":
                    rotateLeft('+');
                    break;
                case "front-bottom-sensor":
                    rotateBottom('-');
                    break;
            }
        }
    } 
    //     // Horizontal swipe
    //     if (touchstartY < cubeWidth) {
    //         if (deltaX > 0) {
    //             // Swipe right
    //             switch (side) {
    //                 case "front":
    //                 case "back":
    //                 case "left":
    //                 case "right":
    //                     rotateTop('+');
    //                     break;
    //                 case "top":
    //                     rotateBack('+');
    //                     break;
    //                 case "bottom":
    //                     rotateFront('-');
    //                     break;
    //             }
    //         } else {
    //             // Swipe left
    //             switch (side) {
    //                 case "front":
    //                 case "back":
    //                 case "left":
    //                 case "right":
    //                     rotateTop('-');
    //                     break;
    //                 case "top":
    //                     rotateBack('-');
    //                     break;
    //                 case "bottom":
    //                     rotateFront('+');
    //                     break;
    //             }
    //         }
    //     } else if (touchstartY > (cubeWidth * 2)) {
    //         if (deltaX > 0) {
    //             // Swipe right
    //             switch (side) {
    //                 case "front":
    //                 case "back":
    //                 case "left":
    //                 case "right":
    //                     rotateBottom('+');
    //                     break;
    //                 case "top":
    //                     rotateFront('+');
    //                     break;
    //                 case "bottom":
    //                     rotateBack('-');
    //                     break;
    //             }
    //         } else {
    //             // Swipe left
    //             switch (side) {
    //                 case "front":
    //                 case "back":
    //                 case "left":
    //                 case "right":
    //                     rotateBottom('-');
    //                     break;
    //                 case "top":
    //                     rotateFront('-');
    //                     break;
    //                 case "bottom":
    //                     rotateBack('+');
    //                     break;
    //             }
    //         }
    //     }
    // } else if ((Math.abs(deltaY) > Math.abs(deltaX)) && (Math.abs(deltaY) > threshold)) {
    //     // Vertical swipe
    //     if (touchstartX < cubeWidth) {
    //         if (deltaY > 0) {
    //             // Swipe down
    //             switch (side) {
    //                 case "front":
    //                 case "top":
    //                 case "bottom":
    //                     rotateLeft('-');
    //                     break; 
    //                 case "back":
    //                     rotateRight('+');
    //                     break;
    //                 case "left":
    //                     rotateBack('-');
    //                     break;
    //                 case "right":
    //                     rotateFront('+');
    //                     break;
    //             }
    //         } else {
    //             // Swipe up
    //             switch (side) {
    //                 case "front":
    //                 case "top":
    //                 case "bottom":
    //                     rotateLeft('+');
    //                     break; 
    //                 case "back":
    //                     rotateRight('-');
    //                     break;
    //                 case "left":
    //                     rotateBack('+');
    //                     break;
    //                 case "right":
    //                     rotateFront('-');
    //                     break;
    //             }
    //         }
    //     } else if (touchstartX > (cubeWidth * 2)) {
    //         if (deltaY > 0) {
    //             // Swipe down
    //             switch (side) {
    //                 case "front":
    //                 case "top":
    //                 case "bottom":
    //                     rotateRight('-');
    //                     break; 
    //                 case "back":
    //                     rotateLeft('+');
    //                     break;
    //                 case "left":
    //                     rotateFront('-');
    //                     break;
    //                 case "right":
    //                     rotateBack('+');
    //                     break;
    //             }
    //         } else {
    //             // Swipe up
    //             switch (side) {
    //                 case "front":
    //                 case "top":
    //                 case "bottom":
    //                     rotateRight('+');
    //                     break; 
    //                 case "back":
    //                     rotateLeft('-');
    //                     break;
    //                 case "left":
    //                     rotateFront('+');
    //                     break;
    //                 case "right":
    //                     rotateBack('-');
    //                     break;
    //             }
    //         }
    //     }
    // }
};