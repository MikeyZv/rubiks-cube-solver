// Headless test for the layer-by-layer solver. Run with: npm test (or node test-solver.js)
// Scrambles a virtual cube with random turns, solves it, and verifies the solution.
import { solve, applyTurn, solvedState, isSolved, TURNS } from './solver.js';

const faces = Object.keys(TURNS);
let failed = false;

// An already-solved cube should need no moves.
const noMoves = solve(solvedState());
if (noMoves.length !== 0) {
    console.log(`FAIL: solved cube produced ${noMoves.length} moves`);
    failed = true;
}

const trials = 500;
let failures = 0, totalMoves = 0, maxMoves = 0;
for (let t = 0; t < trials; t++) {
    const state = solvedState();
    const scramble = [];
    for (let i = 0; i < 40; i++) {
        const face = faces[Math.floor(Math.random() * 6)];
        const sign = Math.random() < 0.5 ? '+' : '-';
        scramble.push(face + sign);
        applyTurn(state, face, sign);
    }

    try {
        const moves = solve(state);
        for (const m of moves) applyTurn(state, m.face, m.sign);
        if (!isSolved(state)) throw new Error('final state not solved');
        totalMoves += moves.length;
        maxMoves = Math.max(maxMoves, moves.length);
    } catch (err) {
        failures++;
        // The scramble is printed so a failing case can be replayed while debugging.
        if (failures <= 3) console.log(`FAIL: ${err.message}\n  scramble: ${scramble.join(' ')}`);
    }
}

if (failures) {
    console.log(`${failures}/${trials} scrambles failed`);
    failed = true;
} else {
    console.log(`all ${trials} scrambles solved; avg ${Math.round(totalMoves / trials)} moves, max ${maxMoves}`);
}

process.exit(failed ? 1 : 0);
