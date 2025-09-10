/** 
 * Thinking like a computer with instructions
 * Pippin Barr
 * 
 * An ultra simple example of instructions. (mutiple)
 */

"use strict";

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(800, 400);
    background("#81a0e2ff")
}


/**
 * Sets background, draws the eye
*/
function draw() {
    // The void (single comments)
    background("#000000");

    push();
    //noStroke();
    fill(255, 0, 0);
    ellipse(20, 20, 20, 20);
    pop();

    stroke(255);
    strokeWeight(4);
    noFill();
    //fill("#daa9ecff");
    rect(30, 30, 50, 60);

    /** therefor the first stroke is in the push and pop, 
     * but the next stroke is set in the global property, whichmeans 
     * once it run the secound time, the stroke will shows again.
     */

    // The eye
    drawEye();
}

/**
 * Draws a creepy void eye
 */
function drawEye() {
    // Eyeball
    push();
    noStroke();
    fill("#ffffff");
    ellipse(200, 200, 100);
    pop();

    // Retina
    push();
    noStroke();
    fill("#000000");
    ellipse(200, 200, 25);
    pop();
}