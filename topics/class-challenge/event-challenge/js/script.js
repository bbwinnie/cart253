/**
 * Event Challenge
 * weini wang
 * working with ziyan pan, Leah
 * 
 * Event Challenge
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Update the score and display the UI
 */
function draw() {
    background("#87ceeb");

    // Only increase the score if the game is not over
    if (!gameOver) {
        // Score increases relatively slowly
        score += 0.05;
    }
    displayUI();
}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
    if (gameOver) {
        push();
        textSize(48);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text("You lose!", width / 2, height / 3);
        pop();
    }
    displayScore();
}

/**
 * Display the score
 */
function displayScore() {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(floor(score), width / 2, height / 2);
    pop();
}

// define the function
function lose() {
    gameOver = true;
}

// if keypress, you will lose the game
function keyReleased() {
    lose();
}

// if mousereleased, you will lose the game
function mouseReleased() {
    lose();
}

//if mousewheel moved, you will lose the game
function mouseWheel() {
    lose();
}

//if mouseMoved , you will lose the game
function mouseMoved() {
    lose();
}

// if internet is not disconnected, you will lose the game.
window.addEventListener('offline', () => { //lambda funcation you define a function inside the function.
    lose();
});
