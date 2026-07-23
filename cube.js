export class Cube {
    front;
    back;
    left;
    right;
    top;
    bottom;

    constructor(front, back, left, right, top, bottom) {
        this.front = front;
        this.back = back;
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
    }

    // Rotate the whole cube around the X axis (left/right stay put).
    spinX() {
        [this.front, this.top, this.back, this.bottom] =
            [this.bottom, this.front, this.top, this.back];
    }

    spinXInverse() {
        [this.front, this.top, this.back, this.bottom] =
            [this.top, this.back, this.bottom, this.front];
    }

    // Rotate the whole cube around the Y axis (top/bottom stay put).
    spinY() {
        [this.front, this.right, this.back, this.left] =
            [this.left, this.front, this.right, this.back];
    }

    spinYInverse() {
        [this.front, this.right, this.back, this.left] =
            [this.right, this.back, this.left, this.front];
    }

    // Rotate the whole cube around the Z axis (front/back stay put).
    spinZ() {
        [this.top, this.right, this.bottom, this.left] =
            [this.left, this.top, this.right, this.bottom];
    }

    spinZInverse() {
        [this.top, this.right, this.bottom, this.left] =
            [this.right, this.bottom, this.left, this.top];
    }
}


// front = green
// back = blue
// left = red
// right = orange
// top = yellow
// bottom = white
