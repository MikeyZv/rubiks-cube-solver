const container = document.querySelector("#whole-cube-container");
const cube = document.querySelector(".whole");
const rotationValue = 720;
let currentX;
let currentY;
let rotateX;
let rotateY;
let startTime;
let endTime;
let threshold = 450;
let isDragging = false


cube.style.transform = `rotate3d(1,1,0,140deg)`;

container.addEventListener('touchstart', () => {
    isDragging = true;
    startTime = Date.now()

}, false);

container.addEventListener("touchmove", function(e) {
    if (!isDragging) return;
    e.preventDefault();

    endTime = Date.now();
    if (endTime - startTime > threshold) {
        const touch = e.touches[0];
        currentX = touch.clientX;
        currentY = touch.clientY;
        rotateX = -(currentY / window.innerHeight - 0.5) * rotationValue;
        rotateY = (currentX / window.innerHeight - 0.5) * rotationValue;
        cube.style.transform = `rotate3d(1,0,0, ${rotateX}deg) rotate3d(0,1,0, ${rotateY}deg)`;
    }
}, false);

container.addEventListener("touchend", () => {
    isDragging = false;
}, false);

container.addEventListener("mousedown", () => {
    isDragging = true;
    startTime = Date.now()
});

container.addEventListener("mousemove", function handleMouseMove(e) {
    if (!isDragging) return;
    e.preventDefault();

    endTime = Date.now();

    if (endTime - startTime > threshold) {
        currentX = e.clientX;
        currentY = e.clientY;
        rotateX = -(currentY / window.innerHeight - 0.5) * rotationValue;
        rotateY = (currentX / window.innerHeight - 0.5) * rotationValue;
        cube.style.transform = `rotate3d(1,0,0, ${rotateX}deg) rotate3d(0,1,0, ${rotateY}deg)`;
    }

});

container.addEventListener("mouseup", () => {
    isDragging = false;
});