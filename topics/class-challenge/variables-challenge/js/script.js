/**
 * Mr.Furious Furious
 * weini wang
 * 
 * working with ziyan pan
 * 
 * variables Challenge
 */


"use strict";

// Our friend Mr. Furious
let mrFurious = {
    // Position and size
    x: 200,
    y: 200,
    size: 100,
    // Colour
    fill: {
        r: 255,
        g: 225,
        b: 225,
        reduceG: 1,
        reduceB: 1
    }
};

//set the variable for sky
let sky = {
    r: 160,
    g: 180,
    b: 200,
    reduceR: 0.5,
    reduceG: 0.5,
    reduceB: 0.5
}

// set the variable for bird.
let birdP = {
    // Position and size
    x: 0,
    y: 40,
    size: 30,
    // Colour
    fill: {
        r: 150,
        g: 200,
        b: 200,
    }
}

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {

    //set the sky color turing blue and set the range.
    sky.r -= sky.reduceR;
    sky.g -= sky.reduceG;
    sky.b -= sky.reduceB;
    sky.r = constrain(sky.r, 0, 255);
    sky.g = constrain(sky.g, 0, 255);
    sky.b = constrain(sky.b, 0, 255);
    background(sky.r, sky.g, sky.b);

    //make Mr.Furious more and more red. set the range.
    mrFurious.fill.g -= mrFurious.fill.reduceG;
    mrFurious.fill.b -= mrFurious.fill.reduceB;
    mrFurious.fill.g = constrain(mrFurious.fill.g, 0, 255);
    mrFurious.fill.b = constrain(mrFurious.fill.b, 0, 255);

    // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();

    //Draw bird
    bird();
}

//set the bird
function bird() {

    //move the bird
    birdP.x += 1;
    birdP.y += random(-5, 5);
    birdP.y = constrain(birdP.y, 10, 60);

    fill(birdP.fill.r, birdP.fill.g, birdP.fill.b);
    ellipse(birdP.x, birdP.y, birdP.size);

}