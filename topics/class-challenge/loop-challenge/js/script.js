/**
 * loop challenge
 * weini wang 
 * working with ziyan pan
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");

    //defaut the x, color and y.
    let x = 0;
    let c = 0;
    let y = 0;
    let b = 0;

    let startColor = color("#6bc4ffff"); //0%
    let endColor = color("#8126a5ff") //100%

    //draw the color square
    for (let j = 0; j < 10; j++) {
        for (let i = 0; i < 10; i++) {
            let percent = i / 10
            let c = lerpColor(startColor, endColor, percent);
            fill(c);
            rect(50 * i, 50 * j, 50);
        }

    }

    // While x smaller than width, draw a line.
    while (x < width) {
        stroke(c);
        line(x, 0, x, height);
        c += 50;
        x += 50;
    }

    // While y smaller than Height, draw a line.
    while (y < height) {
        stroke(b);
        line(0, y, width, y);
        b += 50;
        y += 50;
    }



    // const CELL_SIZE = 50
    // const NUM_COLS = width / CELL_SIZE;
    // const NUM_ROWS = height / CELL_SIZE;

    // rectMode(CORNER)
    // for (let x = 0; x < NUM_COLS; x++) {
    //     fill("#ff0000");
    //     rect(CELL_SIZE * x, 0, CELL_SIZE)
    // }

    // for (let y = 0; y < NUM_ROWS; y++) {
    //     fill("#ff0000");
    //     for (x = 0; x < NUM_COLS; x++) {
    //         rect(CELL_SIZE * x, CELL_SIZE * y, CELL_SIZE)
    //     }
    // }


    // stroke(0);
    // line(0, 0, 0, height);

    // stroke(25);
    // line(50, 0, 50, height);

    // stroke(50);
    // line(100, 0, 100, height);

    // stroke(75);
    // line(150, 0, 150, height);

    // stroke(100);
    // line(200, 0, 200, height);

    // stroke(125);
    // line(250, 0, 250, height);

    // stroke(150);
    // line(300, 0, 300, height);

    // stroke(175);
    // line(350, 0, 350, height);

    // stroke(200);
    // line(400, 0, 400, height);

    // stroke(225);
    // line(450, 0, 450, height);

    // stroke(250);
    // line(500, 0, 500, height);
}