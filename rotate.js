const container = document.querySelector("#whole-cube-container");
const cube = document.querySelector(".whole");
let startTime;
let allowedTime = 250;
let elapsedTime;
let rotationValue = 720;
let startX;
let startY;
let currentX;
let currentY;
let rotateX;
let rotateY;
let isDragging = false;


cube.style.transform = `rotate3d(1,1,1, 180deg)`;

container.addEventListener('touchstart', () => {
    isDragging = true;
}, false);

container.addEventListener("touchmove", function(e) {
    if (!isDragging) return;
    e.preventDefault();

    const touch = e.touches[0];
    let currentX = touch.clientX;
    let currentY = touch.clientY;
    let rotateX = -(currentY / window.innerHeight - 0.5) * rotationValue;
    let rotateY = (currentX / window.innerHeight - 0.5) * rotationValue;
    cube.style.transform = `rotate3d(1,0,0, ${rotateX}deg) rotate3d(0,1,0, ${rotateY}deg)`;
}, false);

container.addEventListener("touchend", () => {
    isDragging = false;
}, false);

container.addEventListener("mousedown", () => {
    isDragging = true;
});

container.addEventListener("mousemove", function handleMouseMove(e) {
    if (!isDragging) return;
    e.preventDefault();

    let currentX = e.clientX;
    let currentY = e.clientY;
    let rotateX = -(currentY / window.innerHeight - 0.5) * rotationValue;
    let rotateY = (currentX / window.innerHeight - 0.5) * rotationValue;
    cube.style.transform = `rotate3d(1,0,0, ${rotateX}deg) rotate3d(0,1,0, ${rotateY}deg)`;

});

container.addEventListener("mouseup", () => {
    isDragging = false;
});