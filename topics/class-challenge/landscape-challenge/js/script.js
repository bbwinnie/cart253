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

}

function land() {

    // set the land as a ellipse, add the color and stroke
    ellipse(150, 500, 450, 300);
    fill("#007ca5");
    noStroke();

    // set the secound land as a elllipse, add the color and stroke
    ellipse(430, 550, 500, 300);
    fill("#157291");
    noStroke();

}