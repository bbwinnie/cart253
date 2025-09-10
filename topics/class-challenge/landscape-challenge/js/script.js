/**
 * landscape-challenge
 * weini wang 
 * partner: ziyan pan
 * 
 * draw a landscape with a house
 */

"use strict";

/**
 * SETUP THE CANVAS
*/
function setup() {

    // SET THE CANVAS 
    createCanvas(640, 480);
    // SET THE BACKGROUND COLOR
    background("#80d6f1");

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    land()
    cloud()

}

function land() {

    // set the land as a ellipse, add the color and stroke    
    push();
    fill("#007ca5");
    noStroke();
    ellipse(150, 500, 450, 300);
    pop();

    // set the secound land as a elllipse, add the color and stroke
    push();
    fill("#157291");
    noStroke();
    ellipse(430, 550, 500, 300);
    pop();
}

function cloud() {

    // A cloud from pippin however we change the color and location
    push();
    noStroke();
    fill("#c7c7c7");
    ellipse(400, 100, 100, 100);
    ellipse(480, 80, 100, 100);
    ellipse(460, 120, 60, 60);
    ellipse(490, 130, 60, 60);
    ellipse(520, 120, 60, 60);
    pop();
}

