const container = document.querySelector("#whole-cube-container");
const cube = document.querySelector(".whole");

// Prevent default touch and drag behaviors to allow custom cube rotation handling.
container.style.touchAction = "none";
container.style.userSelect = "none";
container.addEventListener("dragstart", (e) => e.preventDefault());

const SENSITIVITY = 0.5;    // degrees of rotation per pixel dragged
const FRICTION = 0.99;      // how fast the spin decays after release (0-1)
const MIN_VELOCITY = 0.02;  // stop the inertia loop once it's this slow
const DRAG_SLOP = 6;        // px of movement before a tap becomes a drag

// Current orientation, and the drag velocity we hand to the inertia loop on release.
let rotX = -25, rotY = -35;
let velX = 0, velY = 0;
let lastX = 0, lastY = 0;
let startX = 0, startY = 0;
let dragging = false;
let moved = false;          // did this gesture cross DRAG_SLOP? (drag vs. tap)
let rafId = null;

function render() {
    cube.style.transform = `rotate3d(1,0,0, ${rotX}deg) rotate3d(0,1,0, ${rotY}deg)`;
}

function momentum() {
    velX *= FRICTION;
    velY *= FRICTION;
    rotX += velX;
    rotY += velY;
    render();

    if (Math.abs(velX) > MIN_VELOCITY || Math.abs(velY) > MIN_VELOCITY) {
        rafId = requestAnimationFrame(momentum);
    } else {
        rafId = null;
    }
}

container.addEventListener("pointerdown", (e) => {
    dragging = true;
    moved = false;
    lastX = startX = e.clientX;
    lastY = startY = e.clientY;
    velX = velY = 0;
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
});

window.addEventListener("pointermove", (e) => {
    if (!dragging) return;

    // Stay a "tap" until the pointer travels past the slop radius from where it started.
    if (!moved) {
        if (Math.hypot(e.clientX - startX, e.clientY - startY) < DRAG_SLOP) return;
        moved = true;
        lastX = e.clientX;  // start deltas fresh so the slop gap isn't a jump
        lastY = e.clientY;
    }
    e.preventDefault();

    // Velocity = this frame's drag. Down drags tilt around X, right drags spin around Y.
    velX = -(e.clientY - lastY) * SENSITIVITY;
    velY = (e.clientX - lastX) * SENSITIVITY;
    lastX = e.clientX;
    lastY = e.clientY;

    rotX += velX;
    rotY += velY;
    render();
});

function release() {
    if (!dragging) return;
    dragging = false;
    // Carry the final drag velocity into a decaying spin.
    if (!rafId && (Math.abs(velX) > MIN_VELOCITY || Math.abs(velY) > MIN_VELOCITY)) {
        rafId = requestAnimationFrame(momentum);
    }
}

window.addEventListener("pointerup", release);
window.addEventListener("pointercancel", release);

// If the gesture was a drag, swallow the click so it doesn't also turn a face.
// A real tap leaves `moved` false and falls through to the face-turn listeners.
container.addEventListener("click", (e) => {
    if (moved) {
        e.stopPropagation();
        e.preventDefault();
    }
}, true);

render();
