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

    spinX() {
        switch (true) {
            // left: green
            // right: blue
            case (this.front == 'W' && this.back == 'Y' && this.left == 'G' && this.right == 'B' && this.top == 'O' && this.bottom == 'R'):
                this.front = 'R';
                this.back = 'O';
                this.top = 'W';
                this.bottom = 'Y';
                break;
            case (this.front == 'R' && this.back == 'O' && this.left == 'G' && this.right == 'B' && this.top == 'W' && this.bottom == 'Y'):
                this.front = 'Y';
                this.back = 'W';
                this.top = 'R';
                this.bottom = 'O';
                break;
            case (this.front == 'Y' && this.back == 'W' && this.left == 'G' && this.right == 'B' && this.top == 'R' && this.bottom == 'O'):
                this.front = 'O';
                this.back = 'R';
                this.top = 'Y';
                this.bottom = 'W';
                break;
            case (this.front == 'O' && this.back == 'R' && this.left == 'G' && this.right == 'B' && this.top == 'Y' && this.bottom == 'W'):
                this.front = 'W';
                this.back = 'Y';
                this.top = 'O';
                this.bottom = 'R';
                break;

            // left: blue
            // right: green
            case (this.front == 'Y' && this.back == 'W' && this.left == 'B' && this.right == 'G' && this.top == 'O' && this.bottom == 'R'):
                this.front = 'R';
                this.back = 'O';
                this.top = 'Y';
                this.bottom = 'W';
                break;
            case (this.front == 'R' && this.back == 'O' && this.left == 'B' && this.right == 'G' && this.top == 'Y' && this.bottom == 'W'):
                this.front = 'W';
                this.back = 'Y';
                this.top = 'R';
                this.bottom = 'O';
                break;
            case (this.front == 'W' && this.back == 'Y' && this.left == 'B' && this.right == 'G' && this.top == 'R' && this.bottom == 'O'):
                this.front = 'O';
                this.back = 'R';
                this.top = 'W';
                this.bottom = 'Y';
                break;
            case (this.front == 'O' && this.back == 'R' && this.left == 'B' && this.right == 'G' && this.top == 'W' && this.bottom == 'Y'):
                this.front = 'Y';
                this.back = 'W';
                this.top = 'O';
                this.bottom = 'R';
                break;

            // left: white 
            // right: yellow
            case (this.front == 'G' && this.back == 'B' && this.left == 'W' && this.right == 'Y' && this.top == 'R' && this.bottom == 'O'):
                this.front = 'O';
                this.back = 'R';
                this.top = 'G';
                this.bottom = 'B';
                break;
            case (this.front == 'O' && this.back == 'R' && this.left == 'W' && this.right == 'Y' && this.top == 'G' && this.bottom == 'B'):
                this.front = 'B';
                this.back = 'G';
                this.top = 'O';
                this.bottom = 'R';
                break;
            case (this.front == 'B' && this.back == 'G' && this.left == 'W' && this.right == 'Y' && this.top == 'O' && this.bottom == 'R'):
                this.front = 'R';
                this.back = 'O';
                this.top = 'B';
                this.bottom = 'G';
                break;
            case (this.front == 'R' && this.back == 'O' && this.left == 'W' && this.right == 'Y' && this.top == 'B' && this.bottom == 'G'):
                this.front = 'G';
                this.back = 'B';
                this.top = 'R';
                this.bottom = 'O';
                break;
            
            // left: yellow 
            // right: white
            case (this.front == 'G' && this.back == 'B' && this.left == 'Y' && this.right == 'W' && this.top == 'O' && this.bottom == 'R'):
                this.front = 'R';
                this.back = 'O';
                this.top = 'G';
                this.bottom = 'B';
                break;
            case (this.front == 'R' && this.back == 'O' && this.left == 'Y' && this.right == 'W' && this.top == 'G' && this.bottom == 'B'):
                this.front = 'B';
                this.back = 'G';
                this.top = 'R';
                this.bottom = 'O';
                break;
            case (this.front == 'B' && this.back == 'G' && this.left == 'Y' && this.right == 'W' && this.top == 'R' && this.bottom == 'O'):
                this.front = 'O';
                this.back = 'R';
                this.top = 'B';
                this.bottom = 'G';
                break;
            case (this.front == 'O' && this.back == 'R' && this.left == 'Y' && this.right == 'W' && this.top == 'B' && this.bottom == 'G'):
                this.front = 'G';
                this.back = 'B';
                this.top = 'O';
                this.bottom = 'R';
                break;

            // left: orange 
            // right: red
            case (this.front == 'G' && this.back == 'B' && this.left == 'O' && this.right == 'R' && this.top == 'W' && this.bottom == 'Y'):
                this.front = 'Y';
                this.back = 'W';
                this.top = 'G';
                this.bottom = 'B';
                break;
            case (this.front == 'Y' && this.back == 'W' && this.left == 'O' && this.right == 'R' && this.top == 'G' && this.bottom == 'B'):
                this.front = 'B';
                this.back = 'G';
                this.top = 'Y';
                this.bottom = 'W';
                break;
            case (this.front == 'B' && this.back == 'G' && this.left == 'O' && this.right == 'R' && this.top == 'Y' && this.bottom == 'W'):
                this.front = 'W';
                this.back = 'Y';
                this.top = 'B';
                this.bottom = 'G';
                break;
            case (this.front == 'W' && this.back == 'Y' && this.left == 'O' && this.right == 'R' && this.top == 'B' && this.bottom == 'G'):
                this.front = 'G';
                this.back = 'B';
                this.top = 'W';
                this.bottom = 'Y';
                break;

            // left: red 
            // right: orange
            case (this.front == 'G' && this.back == 'B' && this.left == 'R' && this.right == 'O' && this.top == 'Y' && this.bottom == 'W'):
                this.front = 'W';
                this.back = 'Y';
                this.top = 'G';
                this.bottom = 'B';
                break;
            case (this.front == 'W' && this.back == 'Y' && this.left == 'R' && this.right == 'O' && this.top == 'G' && this.bottom == 'B'):
                this.front = 'B';
                this.back = 'G';
                this.top = 'W';
                this.bottom = 'Y';
                break;
            case (this.front == 'B' && this.back == 'G' && this.left == 'R' && this.right == 'O' && this.top == 'W' && this.bottom == 'Y'):
                this.front = 'Y';
                this.back = 'W';
                this.top = 'B';
                this.bottom = 'G';
                break;
            case (this.front == 'Y' && this.back == 'W' && this.left == 'R' && this.right == 'O' && this.top == 'B' && this.bottom == 'G'):
                this.front = 'G';
                this.back = 'B';
                this.top = 'Y';
                this.bottom = 'W';
                break;
        }
    }

    spinY() {
        switch (true) {
            // top: orange 
            // bottom: red
            case (this.front == 'W' && this.back == 'Y' && this.left == 'G' && this.right == 'B' && this.top == 'O' && this.bottom == 'R'):
                this.front = 'G';
                this.back = 'B';
                this.left = 'Y';
                this.right = 'W';
                break;
            case (this.front == 'G' && this.back == 'B' && this.left == 'Y' && this.right == 'W' && this.top == 'O' && this.bottom == 'R'):
                this.front = 'Y';
                this.back = 'W';
                this.left = 'B';
                this.right = 'G';
                break;
            case (this.front == 'Y' && this.back == 'W' && this.left == 'B' && this.right == 'G' && this.top == 'O' && this.bottom == 'R'):
                this.front = 'B';
                this.back = 'G';
                this.left = 'W';
                this.right = 'Y';
                break;
            case (this.front == 'B' && this.back == 'G' && this.left == 'W' && this.right == 'Y' && this.top == 'O' && this.bottom == 'R'):
                this.front = 'W';
                this.back = 'Y';
                this.left = 'G';
                this.right = 'B';
                break;
                
            // top: red 
            // bottom: orange
            case (this.front == 'W' && this.back == 'Y' && this.left == 'B' && this.right == 'G' && this.top == 'R' && this.bottom == 'O'):
                this.front = 'B';
                this.back = 'G';
                this.left = 'Y';
                this.right = 'W';
                break;
            case (this.front == 'B' && this.back == 'G' && this.left == 'Y' && this.right == 'W' && this.top == 'R' && this.bottom == 'O'):
                this.front = 'Y';
                this.back = 'W';
                this.left = 'G';
                this.right = 'B';
                break;
            case (this.front == 'Y' && this.back == 'W' && this.left == 'G' && this.right == 'B' && this.top == 'R' && this.bottom == 'O'):
                this.front = 'G';
                this.back = 'B';
                this.left = 'W';
                this.right = 'Y';
                break;
            case (this.front == 'G' && this.back == 'B' && this.left == 'W' && this.right == 'Y' && this.top == 'R' && this.bottom == 'O'):
                this.front = 'W';
                this.back = 'Y';
                this.left = 'B';
                this.right = 'G';
                break;

            // top: green 
            // bottom: blue
            case (this.front == 'W' && this.back == 'Y' && this.left == 'R' && this.right == 'O' && this.top == 'G' && this.bottom == 'B'):
                this.front = 'R';
                this.back = 'O';
                this.left = 'Y';
                this.right = 'W';
                break;
            case (this.front == 'R' && this.back == 'O' && this.left == 'Y' && this.right == 'W' && this.top == 'G' && this.bottom == 'B'):
                this.front = 'Y';
                this.back = 'W';
                this.left = 'O';
                this.right = 'R';
                break;
            case (this.front == 'Y' && this.back == 'W' && this.left == 'O' && this.right == 'R' && this.top == 'G' && this.bottom == 'B'):
                this.front = 'O';
                this.back = 'R';
                this.left = 'W';
                this.right = 'Y';
                break;
            case (this.front == 'O' && this.back == 'R' && this.left == 'W' && this.right == 'Y' && this.top == 'G' && this.bottom == 'B'):
                this.front = 'W';
                this.back = 'Y';
                this.left = 'R';
                this.right = 'O';
                break;

            // top: blue 
            // bottom: green
            case (this.front == 'W' && this.back == 'Y' && this.left == 'O' && this.right == 'R' && this.top == 'B' && this.bottom == 'G'):
                this.front = 'O';
                this.back = 'R';
                this.left = 'Y';
                this.right = 'W';
                break;
            case (this.front == 'O' && this.back == 'R' && this.left == 'Y' && this.right == 'W' && this.top == 'B' && this.bottom == 'G'):
                this.front = 'Y';
                this.back = 'W';
                this.left = 'R';
                this.right = 'O';
                break;
            case (this.front == 'Y' && this.back == 'W' && this.left == 'R' && this.right == 'O' && this.top == 'B' && this.bottom == 'G'):
                this.front = 'R';
                this.back = 'O';
                this.left = 'W';
                this.right = 'Y';
                break;
            case (this.front == 'R' && this.back == 'O' && this.left == 'W' && this.right == 'Y' && this.top == 'B' && this.bottom == 'G'):
                this.front = 'W';
                this.back = 'Y';
                this.left = 'O';
                this.right = 'R';
                break;

            // top: white 
            // bottom: yellow
            case (this.front == 'G' && this.back == 'B' && this.left == 'O' && this.right == 'R' && this.top == 'W' && this.bottom == 'Y'):
                this.front = 'O';
                this.back = 'R';
                this.left = 'B';
                this.right = 'G';
                break;
            case (this.front == 'O' && this.back == 'R' && this.left == 'B' && this.right == 'G' && this.top == 'W' && this.bottom == 'Y'):
                this.front = 'B';
                this.back = 'G';
                this.left = 'R';
                this.right = 'O';
                break;
            case (this.front == 'B' && this.back == 'G' && this.left == 'R' && this.right == 'O' && this.top == 'W' && this.bottom == 'Y'):
                this.front = 'R';
                this.back = 'O';
                this.left = 'G';
                this.right = 'B';
                break;
            case (this.front == 'R' && this.back == 'O' && this.left == 'G' && this.right == 'B' && this.top == 'W' && this.bottom == 'Y'):
                this.front = 'G';
                this.back = 'B';
                this.left = 'O';
                this.right = 'R';
                break;

            // top: yellow 
            // bottom: white
            case (this.front == 'G' && this.back == 'B' && this.left == 'R' && this.right == 'O' && this.top == 'Y' && this.bottom == 'W'):
                this.front = 'R';
                this.back = 'O';
                this.left = 'B';
                this.right = 'G';
                break;
            case (this.front == 'R' && this.back == 'O' && this.left == 'B' && this.right == 'G' && this.top == 'Y' && this.bottom == 'W'):
                this.front = 'B';
                this.back = 'G';
                this.left = 'O';
                this.right = 'R';
                break;
            case (this.front == 'B' && this.back == 'G' && this.left == 'O' && this.right == 'R' && this.top == 'Y' && this.bottom == 'W'):
                this.front = 'O';
                this.back = 'R';
                this.left = 'G';
                this.right = 'B';
                break;
            case (this.front == 'O' && this.back == 'R' && this.left == 'G' && this.right == 'B' && this.top == 'Y' && this.bottom == 'W'):
                this.front = 'G';
                this.back = 'B';
                this.left = 'R';
                this.right = 'O';
                break;
        }
    }

    spinZ() {
        switch (true) {
            // front: orange 
            // back: red
            case (this.front == 'O' && this.back == 'R' && this.left == 'G' && this.right == 'B' && this.top == 'Y' && this.bottom == 'W'):
                this.left = 'W';
                this.right = 'Y';
                this.top = 'G';
                this.bottom = 'B';
                break;
            case (this.front == 'O' && this.back == 'R' && this.left == 'W' && this.right == 'Y' && this.top == 'G' && this.bottom == 'B'):
                this.left = 'B';
                this.right = 'G';
                this.top = 'W';
                this.bottom = 'Y';
                break;
            case (this.front == 'O' && this.back == 'R' && this.left == 'B' && this.right == 'G' && this.top == 'W' && this.bottom == 'Y'):
                this.left = 'Y';
                this.right = 'W';
                this.top = 'B';
                this.bottom = 'G';
                break;
            case (this.front == 'O' && this.back == 'R' && this.left == 'Y' && this.right == 'W' && this.top == 'B' && this.bottom == 'G'):
                this.left = 'G';
                this.right = 'B';
                this.top = 'Y';
                this.bottom = 'W';
                break;

            // front: red 
            // back: orange
            case (this.front == 'R' && this.back == 'O' && this.left == 'B' && this.right == 'G' && this.top == 'Y' && this.bottom == 'W'):
                this.left = 'W';
                this.right = 'Y';
                this.top = 'B';
                this.bottom = 'G';
                break;
            case (this.front == 'R' && this.back == 'O' && this.left == 'W' && this.right == 'Y' && this.top == 'B' && this.bottom == 'G'):
                this.left = 'G';
                this.right = 'B';
                this.top = 'W';
                this.bottom = 'Y';
                break;
            case (this.front == 'R' && this.back == 'O' && this.left == 'G' && this.right == 'B' && this.top == 'W' && this.bottom == 'Y'):
                this.left = 'Y';
                this.right = 'W';
                this.top = 'G';
                this.bottom = 'B';
                break;
            case (this.front == 'R' && this.back == 'O' && this.left == 'Y' && this.right == 'W' && this.top == 'G' && this.bottom == 'B'):
                this.left = 'B';
                this.right = 'G';
                this.top = 'Y';
                this.bottom = 'W';
                break;

            // front: green 
            // back: blue
            case (this.front == 'G' && this.back == 'B' && this.left == 'R' && this.right == 'O' && this.top == 'Y' && this.bottom == 'W'):
                this.left = 'W';
                this.right = 'Y';
                this.top = 'R';
                this.bottom = 'O';
                break;
            case (this.front == 'G' && this.back == 'B' && this.left == 'W' && this.right == 'Y' && this.top == 'R' && this.bottom == 'O'):
                this.left = 'O';
                this.right = 'R';
                this.top = 'W';
                this.bottom = 'Y';
                break;
            case (this.front == 'G' && this.back == 'B' && this.left == 'O' && this.right == 'R' && this.top == 'W' && this.bottom == 'Y'):
                this.left = 'Y';
                this.right = 'W';
                this.top = 'O';
                this.bottom = 'R';
                break;
            case (this.front == 'G' && this.back == 'B' && this.left == 'Y' && this.right == 'W' && this.top == 'O' && this.bottom == 'R'):
                this.left = 'R';
                this.right = 'O';
                this.top = 'Y';
                this.bottom = 'W';
                break;

            // front: blue 
            // back: green
            case (this.front == 'B' && this.back == 'G' && this.left == 'O' && this.right == 'R' && this.top == 'Y' && this.bottom == 'W'):
                this.left = 'W';
                this.right = 'Y';
                this.top = 'O';
                this.bottom = 'R';
                break;
            case (this.front == 'B' && this.back == 'G' && this.left == 'W' && this.right == 'Y' && this.top == 'O' && this.bottom == 'R'):
                this.left = 'R';
                this.right = 'O';
                this.top = 'W';
                this.bottom = 'Y';
                break;
            case (this.front == 'B' && this.back == 'G' && this.left == 'R' && this.right == 'O' && this.top == 'W' && this.bottom == 'Y'):
                this.left = 'Y';
                this.right = 'W';
                this.top = 'R';
                this.bottom = 'O';
                break;
            case (this.front == 'B' && this.back == 'G' && this.left == 'Y' && this.right == 'W' && this.top == 'R' && this.bottom == 'O'):
                this.left = 'O';
                this.right = 'R';
                this.top = 'Y';
                this.bottom = 'W';
                break;

            // front: white 
            // back: yellow
            case (this.front == 'W' && this.back == 'Y' && this.left == 'O' && this.right == 'R' && this.top == 'B' && this.bottom == 'G'):
                this.left = 'G';
                this.right = 'B';
                this.top = 'O';
                this.bottom = 'R';
                break;
            case (this.front == 'W' && this.back == 'Y' && this.left == 'G' && this.right == 'B' && this.top == 'O' && this.bottom == 'R'):
                this.left = 'R';
                this.right = 'O';
                this.top = 'G';
                this.bottom = 'B';
                break;
            case (this.front == 'W' && this.back == 'Y' && this.left == 'R' && this.right == 'O' && this.top == 'G' && this.bottom == 'B'):
                this.left = 'B';
                this.right = 'G';
                this.top = 'R';
                this.bottom = 'O';
                break;
            case (this.front == 'W' && this.back == 'Y' && this.left == 'B' && this.right == 'G' && this.top == 'R' && this.bottom == 'O'):
                this.left = 'O';
                this.right = 'R';
                this.top = 'B';
                this.bottom = 'G';
                break;

            // front: yellow 
            // back: white
            case (this.front == 'Y' && this.back == 'W' && this.left == 'R' && this.right == 'O' && this.top == 'B' && this.bottom == 'G'):
                this.left = 'G';
                this.right = 'B';
                this.top = 'R';
                this.bottom = 'O';
                break;
            case (this.front == 'Y' && this.back == 'W' && this.left == 'G' && this.right == 'B' && this.top == 'R' && this.bottom == 'O'):
                this.left = 'O';
                this.right = 'R';
                this.top = 'G';
                this.bottom = 'B';
                break;
            case (this.front == 'Y' && this.back == 'W' && this.left == 'O' && this.right == 'R' && this.top == 'G' && this.bottom == 'B'):
                this.left = 'B';
                this.right = 'G';
                this.top = 'O';
                this.bottom = 'R';
                break;
            case (this.front == 'Y' && this.back == 'W' && this.left == 'B' && this.right == 'G' && this.top == 'O' && this.bottom == 'R'):
                this.left = 'R';
                this.right = 'O';
                this.top = 'B';
                this.bottom = 'G';
                break;
        }
    }

    spinXInverse() {
        switch (true) {
            // left: green
            // right: blue
            case (this.front == 'W' && this.back == 'Y' && this.left == 'G' && this.right == 'B' && this.top == 'O' && this.bottom == 'R'):
                this.front = 'O';
                this.back = 'R';
                this.top = 'Y';
                this.bottom = 'W';
                break;
            case (this.front == 'O' && this.back == 'R' && this.left == 'G' && this.right == 'B' && this.top == 'Y' && this.bottom == 'W'):
                this.front = 'Y';
                this.back = 'W';
                this.top = 'R';
                this.bottom = 'O';
                break;
            case (this.front == 'Y' && this.back == 'W' && this.left == 'G' && this.right == 'B' && this.top == 'R' && this.bottom == 'O'):
                this.front = 'R';
                this.back = 'O';
                this.top = 'W';
                this.bottom = 'Y';
                break;
            case (this.front == 'R' && this.back == 'O' && this.left == 'G' && this.right == 'B' && this.top == 'W' && this.bottom == 'Y'):
                this.front = 'W';
                this.back = 'Y';
                this.top = 'O';
                this.bottom = 'R';
                break;

            // left: blue
            // right: green
            case (this.front == 'Y' && this.back == 'W' && this.left == 'B' && this.right == 'G' && this.top == 'O' && this.bottom == 'R'):
                this.front = 'O';
                this.back = 'R';
                this.top = 'W';
                this.bottom = 'Y';
                break;
            case (this.front == 'O' && this.back == 'R' && this.left == 'B' && this.right == 'G' && this.top == 'W' && this.bottom == 'Y'):
                this.front = 'W';
                this.back = 'Y';
                this.top = 'R';
                this.bottom = 'O';
                break;
            case (this.front == 'W' && this.back == 'Y' && this.left == 'B' && this.right == 'G' && this.top == 'R' && this.bottom == 'O'):
                this.front = 'R';
                this.back = 'O';
                this.top = 'Y';
                this.bottom = 'W';
                break;
            case (this.front == 'R' && this.back == 'O' && this.left == 'B' && this.right == 'G' && this.top == 'Y' && this.bottom == 'W'):
                this.front = 'Y';
                this.back = 'W';
                this.top = 'O';
                this.bottom = 'R';
                break;

            // left: white 
            // right: yellow
            case (this.front == 'G' && this.back == 'B' && this.left == 'W' && this.right == 'Y' && this.top == 'R' && this.bottom == 'O'):
                this.front = 'R';
                this.back = 'O';
                this.top = 'B';
                this.bottom = 'G';
                break;
            case (this.front == 'R' && this.back == 'O' && this.left == 'W' && this.right == 'Y' && this.top == 'B' && this.bottom == 'G'):
                this.front = 'B';
                this.back = 'G';
                this.top = 'O';
                this.bottom = 'R';
                break;
            case (this.front == 'B' && this.back == 'G' && this.left == 'W' && this.right == 'Y' && this.top == 'O' && this.bottom == 'R'):
                this.front = 'O';
                this.back = 'R';
                this.top = 'G';
                this.bottom = 'B';
                break;
            case (this.front == 'O' && this.back == 'R' && this.left == 'W' && this.right == 'Y' && this.top == 'G' && this.bottom == 'B'):
                this.front = 'G';
                this.back = 'B';
                this.top = 'R';
                this.bottom = 'O';
                break;
            
            // left: yellow 
            // right: white
            case (this.front == 'G' && this.back == 'B' && this.left == 'Y' && this.right == 'W' && this.top == 'O' && this.bottom == 'R'):
                this.front = 'O';
                this.back = 'R';
                this.top = 'B';
                this.bottom = 'G';
                break;
            case (this.front == 'O' && this.back == 'R' && this.left == 'Y' && this.right == 'W' && this.top == 'B' && this.bottom == 'G'):
                this.front = 'B';
                this.back = 'G';
                this.top = 'R';
                this.bottom = 'O';
                break;
            case (this.front == 'B' && this.back == 'G' && this.left == 'Y' && this.right == 'W' && this.top == 'R' && this.bottom == 'O'):
                this.front = 'R';
                this.back = 'O';
                this.top = 'G';
                this.bottom = 'B';
                break;
            case (this.front == 'R' && this.back == 'O' && this.left == 'Y' && this.right == 'W' && this.top == 'G' && this.bottom == 'B'):
                this.front = 'G';
                this.back = 'B';
                this.top = 'O';
                this.bottom = 'R';
                break;

            // left: orange 
            // right: red
            case (this.front == 'G' && this.back == 'B' && this.left == 'O' && this.right == 'R' && this.top == 'W' && this.bottom == 'Y'):
                this.front = 'W';
                this.back = 'Y';
                this.top = 'B';
                this.bottom = 'G';
                break;
            case (this.front == 'W' && this.back == 'Y' && this.left == 'O' && this.right == 'R' && this.top == 'B' && this.bottom == 'G'):
                this.front = 'B';
                this.back = 'G';
                this.top = 'Y';
                this.bottom = 'W';
                break;
            case (this.front == 'B' && this.back == 'G' && this.left == 'O' && this.right == 'R' && this.top == 'Y' && this.bottom == 'W'):
                this.front = 'Y';
                this.back = 'W';
                this.top = 'G';
                this.bottom = 'B';
                break;
            case (this.front == 'Y' && this.back == 'W' && this.left == 'O' && this.right == 'R' && this.top == 'G' && this.bottom == 'B'):
                this.front = 'G';
                this.back = 'B';
                this.top = 'W';
                this.bottom = 'Y';
                break;

            // left: red 
            // right: orange
            case (this.front == 'G' && this.back == 'B' && this.left == 'R' && this.right == 'O' && this.top == 'Y' && this.bottom == 'W'):
                this.front = 'Y';
                this.back = 'W';
                this.top = 'B';
                this.bottom = 'G';
                break;
            case (this.front == 'Y' && this.back == 'W' && this.left == 'R' && this.right == 'O' && this.top == 'B' && this.bottom == 'G'):
                this.front = 'B';
                this.back = 'G';
                this.top = 'W';
                this.bottom = 'Y';
                break;
            case (this.front == 'B' && this.back == 'G' && this.left == 'R' && this.right == 'O' && this.top == 'W' && this.bottom == 'Y'):
                this.front = 'W';
                this.back = 'Y';
                this.top = 'G';
                this.bottom = 'B';
                break;
            case (this.front == 'W' && this.back == 'Y' && this.left == 'R' && this.right == 'O' && this.top == 'G' && this.bottom == 'B'):
                this.front = 'G';
                this.back = 'B';
                this.top = 'Y';
                this.bottom = 'W';
                break;
        }
    }

    spinYInverse() {
        switch (true) {
            // top: orange 
            // bottom: red
            case (this.front == 'W' && this.back == 'Y' && this.left == 'G' && this.right == 'B' && this.top == 'O' && this.bottom == 'R'):
                this.front = 'B';
                this.back = 'G';
                this.left = 'W';
                this.right = 'Y';
                break;
            case (this.front == 'G' && this.back == 'B' && this.left == 'W' && this.right == 'Y' && this.top == 'O' && this.bottom == 'R'):
                this.front = 'Y';
                this.back = 'W';
                this.left = 'B';
                this.right = 'G';
                break;
            case (this.front == 'Y' && this.back == 'W' && this.left == 'B' && this.right == 'G' && this.top == 'O' && this.bottom == 'R'):
                this.front = 'G';
                this.back = 'B';
                this.left = 'Y';
                this.right = 'W';
                break;
            case (this.front == 'G' && this.back == 'B' && this.left == 'Y' && this.right == 'W' && this.top == 'O' && this.bottom == 'R'):
                this.front = 'W';
                this.back = 'Y';
                this.left = 'G';
                this.right = 'B';
                break;
                
            // top: red 
            // bottom: orange
            case (this.front == 'W' && this.back == 'Y' && this.left == 'B' && this.right == 'G' && this.top == 'R' && this.bottom == 'O'):
                this.front = 'G';
                this.back = 'B';
                this.left = 'W';
                this.right = 'Y';
                break;
            case (this.front == 'G' && this.back == 'B' && this.left == 'W' && this.right == 'Y' && this.top == 'R' && this.bottom == 'O'):
                this.front = 'Y';
                this.back = 'W';
                this.left = 'G';
                this.right = 'B';
                break;
            case (this.front == 'Y' && this.back == 'W' && this.left == 'G' && this.right == 'B' && this.top == 'R' && this.bottom == 'O'):
                this.front = 'B';
                this.back = 'G';
                this.left = 'Y';
                this.right = 'W';
                break;
            case (this.front == 'B' && this.back == 'G' && this.left == 'Y' && this.right == 'W' && this.top == 'R' && this.bottom == 'O'):
                this.front = 'W';
                this.back = 'Y';
                this.left = 'B';
                this.right = 'G';
                break;

            // top: green 
            // bottom: blue
            case (this.front == 'W' && this.back == 'Y' && this.left == 'R' && this.right == 'O' && this.top == 'G' && this.bottom == 'B'):
                this.front = 'O';
                this.back = 'R';
                this.left = 'W';
                this.right = 'Y';
                break;
            case (this.front == 'O' && this.back == 'R' && this.left == 'W' && this.right == 'Y' && this.top == 'G' && this.bottom == 'B'):
                this.front = 'Y';
                this.back = 'W';
                this.left = 'O';
                this.right = 'R';
                break;
            case (this.front == 'Y' && this.back == 'W' && this.left == 'O' && this.right == 'R' && this.top == 'G' && this.bottom == 'B'):
                this.front = 'R';
                this.back = 'O';
                this.left = 'Y';
                this.right = 'W';
                break;
            case (this.front == 'R' && this.back == 'O' && this.left == 'Y' && this.right == 'W' && this.top == 'G' && this.bottom == 'B'):
                this.front = 'W';
                this.back = 'Y';
                this.left = 'R';
                this.right = 'O';
                break;

            // top: blue 
            // bottom: green
            case (this.front == 'W' && this.back == 'Y' && this.left == 'O' && this.right == 'R' && this.top == 'B' && this.bottom == 'G'):
                this.front = 'R';
                this.back = 'O';
                this.left = 'W';
                this.right = 'Y';
                break;
            case (this.front == 'R' && this.back == 'O' && this.left == 'W' && this.right == 'Y' && this.top == 'B' && this.bottom == 'G'):
                this.front = 'Y';
                this.back = 'W';
                this.left = 'R';
                this.right = 'O';
                break;
            case (this.front == 'Y' && this.back == 'W' && this.left == 'R' && this.right == 'O' && this.top == 'B' && this.bottom == 'G'):
                this.front = 'O';
                this.back = 'R';
                this.left = 'Y';
                this.right = 'W';
                break;
            case (this.front == 'O' && this.back == 'R' && this.left == 'Y' && this.right == 'W' && this.top == 'B' && this.bottom == 'G'):
                this.front = 'W';
                this.back = 'Y';
                this.left = 'O';
                this.right = 'R';
                break;

            // top: white 
            // bottom: yellow
            case (this.front == 'G' && this.back == 'B' && this.left == 'O' && this.right == 'R' && this.top == 'W' && this.bottom == 'Y'):
                this.front = 'R';
                this.back = 'O';
                this.left = 'G';
                this.right = 'B';
                break;
            case (this.front == 'R' && this.back == 'O' && this.left == 'G' && this.right == 'B' && this.top == 'W' && this.bottom == 'Y'):
                this.front = 'B';
                this.back = 'G';
                this.left = 'R';
                this.right = 'O';
                break;
            case (this.front == 'B' && this.back == 'G' && this.left == 'R' && this.right == 'O' && this.top == 'W' && this.bottom == 'Y'):
                this.front = 'O';
                this.back = 'R';
                this.left = 'B';
                this.right = 'G';
                break;
            case (this.front == 'O' && this.back == 'R' && this.left == 'B' && this.right == 'G' && this.top == 'W' && this.bottom == 'Y'):
                this.front = 'G';
                this.back = 'B';
                this.left = 'O';
                this.right = 'R';
                break;

            // top: yellow 
            // bottom: white
            case (this.front == 'G' && this.back == 'B' && this.left == 'R' && this.right == 'O' && this.top == 'Y' && this.bottom == 'W'):
                this.front = 'O';
                this.back = 'R';
                this.left = 'G';
                this.right = 'B';
                break;
            case (this.front == 'O' && this.back == 'R' && this.left == 'G' && this.right == 'B' && this.top == 'Y' && this.bottom == 'W'):
                this.front = 'B';
                this.back = 'G';
                this.left = 'O';
                this.right = 'R';
                break;
            case (this.front == 'B' && this.back == 'G' && this.left == 'O' && this.right == 'R' && this.top == 'Y' && this.bottom == 'W'):
                this.front = 'R';
                this.back = 'O';
                this.left = 'B';
                this.right = 'G';
                break;
            case (this.front == 'R' && this.back == 'O' && this.left == 'B' && this.right == 'G' && this.top == 'Y' && this.bottom == 'W'):
                this.front = 'G';
                this.back = 'B';
                this.left = 'R';
                this.right = 'O';
                break;
        }
    }

    spinZInverse() {
        switch (true) {
            // front: orange 
            // back: red
            case (this.front == 'O' && this.back == 'R' && this.left == 'G' && this.right == 'B' && this.top == 'Y' && this.bottom == 'W'):
                this.left = 'Y';
                this.right = 'W';
                this.top = 'B';
                this.bottom = 'G';
                break;
            case (this.front == 'O' && this.back == 'R' && this.left == 'Y' && this.right == 'W' && this.top == 'B' && this.bottom == 'G'):
                this.left = 'B';
                this.right = 'G';
                this.top = 'W';
                this.bottom = 'Y';
                break;
            case (this.front == 'O' && this.back == 'R' && this.left == 'B' && this.right == 'G' && this.top == 'W' && this.bottom == 'Y'):
                this.left = 'W';
                this.right = 'Y';
                this.top = 'G';
                this.bottom = 'B';
                break;
            case (this.front == 'O' && this.back == 'R' && this.left == 'W' && this.right == 'Y' && this.top == 'G' && this.bottom == 'B'):
                this.left = 'G';
                this.right = 'B';
                this.top = 'Y';
                this.bottom = 'W';
                break;

            // front: red 
            // back: orange
            case (this.front == 'R' && this.back == 'O' && this.left == 'B' && this.right == 'G' && this.top == 'Y' && this.bottom == 'W'):
                this.left = 'Y';
                this.right = 'W';
                this.top = 'G';
                this.bottom = 'B';
                break;
            case (this.front == 'R' && this.back == 'O' && this.left == 'Y' && this.right == 'W' && this.top == 'G' && this.bottom == 'B'):
                this.left = 'G';
                this.right = 'B';
                this.top = 'W';
                this.bottom = 'Y';
                break;
            case (this.front == 'R' && this.back == 'O' && this.left == 'G' && this.right == 'B' && this.top == 'W' && this.bottom == 'Y'):
                this.left = 'W';
                this.right = 'Y';
                this.top = 'B';
                this.bottom = 'G';
                break;
            case (this.front == 'R' && this.back == 'O' && this.left == 'W' && this.right == 'Y' && this.top == 'B' && this.bottom == 'G'):
                this.left = 'B';
                this.right = 'G';
                this.top = 'Y';
                this.bottom = 'W';
                break;

            // front: green 
            // back: blue
            case (this.front == 'G' && this.back == 'B' && this.left == 'R' && this.right == 'O' && this.top == 'Y' && this.bottom == 'W'):
                this.left = 'Y';
                this.right = 'W';
                this.top = 'O';
                this.bottom = 'R';
                break;
            case (this.front == 'G' && this.back == 'B' && this.left == 'Y' && this.right == 'W' && this.top == 'O' && this.bottom == 'R'):
                this.left = 'O';
                this.right = 'R';
                this.top = 'W';
                this.bottom = 'Y';
                break;
            case (this.front == 'G' && this.back == 'B' && this.left == 'O' && this.right == 'R' && this.top == 'W' && this.bottom == 'Y'):
                this.left = 'W';
                this.right = 'Y';
                this.top = 'R';
                this.bottom = 'O';
                break;
            case (this.front == 'G' && this.back == 'B' && this.left == 'W' && this.right == 'Y' && this.top == 'R' && this.bottom == 'O'):
                this.left = 'R';
                this.right = 'O';
                this.top = 'Y';
                this.bottom = 'W';
                break;

            // front: blue 
            // back: green
            case (this.front == 'B' && this.back == 'G' && this.left == 'O' && this.right == 'R' && this.top == 'Y' && this.bottom == 'W'):
                this.left = 'Y';
                this.right = 'W';
                this.top = 'R';
                this.bottom = 'O';
                break;
            case (this.front == 'B' && this.back == 'G' && this.left == 'Y' && this.right == 'W' && this.top == 'R' && this.bottom == 'O'):
                this.left = 'R';
                this.right = 'O';
                this.top = 'W';
                this.bottom = 'Y';
                break;
            case (this.front == 'B' && this.back == 'G' && this.left == 'R' && this.right == 'O' && this.top == 'W' && this.bottom == 'Y'):
                this.left = 'W';
                this.right = 'Y';
                this.top = 'O';
                this.bottom = 'R';
                break;
            case (this.front == 'B' && this.back == 'G' && this.left == 'W' && this.right == 'Y' && this.top == 'O' && this.bottom == 'R'):
                this.left = 'O';
                this.right = 'R';
                this.top = 'Y';
                this.bottom = 'W';
                break;

            // front: white 
            // back: yellow
            case (this.front == 'W' && this.back == 'Y' && this.left == 'O' && this.right == 'R' && this.top == 'B' && this.bottom == 'G'):
                this.left = 'B';
                this.right = 'G';
                this.top = 'R';
                this.bottom = 'O';
                break;
            case (this.front == 'W' && this.back == 'Y' && this.left == 'B' && this.right == 'G' && this.top == 'R' && this.bottom == 'O'):
                this.left = 'R';
                this.right = 'O';
                this.top = 'G';
                this.bottom = 'B';
                break;
            case (this.front == 'W' && this.back == 'Y' && this.left == 'R' && this.right == 'O' && this.top == 'G' && this.bottom == 'B'):
                this.left = 'G';
                this.right = 'B';
                this.top = 'O';
                this.bottom = 'R';
                break;
            case (this.front == 'W' && this.back == 'Y' && this.left == 'G' && this.right == 'B' && this.top == 'O' && this.bottom == 'R'):
                this.left = 'O';
                this.right = 'R';
                this.top = 'B';
                this.bottom = 'G';
                break;

            // front: yellow 
            // back: white
            case (this.front == 'Y' && this.back == 'W' && this.left == 'R' && this.right == 'O' && this.top == 'B' && this.bottom == 'G'):
                this.left = 'B';
                this.right = 'G';
                this.top = 'O';
                this.bottom = 'R';
                break;
            case (this.front == 'Y' && this.back == 'W' && this.left == 'B' && this.right == 'G' && this.top == 'O' && this.bottom == 'R'):
                this.left = 'O';
                this.right = 'R';
                this.top = 'G';
                this.bottom = 'B';
                break;
            case (this.front == 'Y' && this.back == 'W' && this.left == 'O' && this.right == 'R' && this.top == 'G' && this.bottom == 'B'):
                this.left = 'G';
                this.right = 'B';
                this.top = 'R';
                this.bottom = 'O';
                break;
            case (this.front == 'Y' && this.back == 'W' && this.left == 'G' && this.right == 'B' && this.top == 'R' && this.bottom == 'O'):
                this.left = 'R';
                this.right = 'O';
                this.top = 'B';
                this.bottom = 'G';
                break;
        }
    }
}


// front = green
// back = blue
// left = red
// right = orange
// top = yellow
// bottom = white