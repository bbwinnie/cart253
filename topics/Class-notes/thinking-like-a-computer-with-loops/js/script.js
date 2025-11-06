/**
 * Thinking like a computer with loops
 * Pippin Barr
 */

"use strict";

/**
 * Create a canvas
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * Draw some loopy things
*/
function draw() {
    background(0);

    let x = 0;
    let rectwidth = 50;
    // let rectWidth = 50;
    // let x = 10;

    // for (let y = 0; y < height; y = y + rectWidth) {
    //     fill(255, 0, 0);
    //     rect(x, y, rectWidth);
    // }

    // let y = 50;

    // for(let i =0;i < 1 ;i++) {
    //     // fill(255, 0, 0)
    //     fill(i * 20)
    //     rect(x, y * i, rectWidth);
    //     //fill(0,0,0)
    //     //text(i,x,y*i)
    // }

    // let xpos = 50
    // let startColor = color("#fc1b1bff"); //0%
    // let endColor = color("#4be5f0ff") //100%
    // for (let i = 0; i < 10; 1++) {
    //     let percent = i / 10
    //     let c = lerpColor(startColor, endColor, percent)
    //     fill(c)
    //     rect (50*i,10,50)
    // }


    // noloop();
    //     for (let i = 0; i < 20; i++) {
    //         for (let j = 0; j < 5; j++) {
    //             console.log(i, j);
    //         }
    //     }

    const CELL_SIZE = 25
    const NUM_COLS = 500 / CELL_SIZE;
    const NUM_ROWS = 500 / CELL_SIZE;

    rectMode(CORNER)
    for (let x = 0; x < NUM_COLS; x++) {
        fill("#ff0000");
        rect(CELL_SIZE * x, 0, CELL_SIZE)
    }

    for (let y = 0; y < NUM_ROWS; y++) {
        fill("#ff0000");
        // rect(0, CELL_SIZE * y, CELL_SIZE)
        // rect(20, CELL_SIZE * y, CELL_SIZE)
        // rect(40, CELL_SIZE * y, CELL_SIZE)
        // rect(60, CELL_SIZE * y, CELL_SIZE)
        //instread using this we can do another for loop
        for (x = 0; x < NUM_COLS; x++) {
            rect(CELL_SIZE * x, CELL_SIZE * y, CELL_SIZE)
        }
    }

    // let shrooksArray = [30, 70, 50, 60, 45, 23]
    // //for(let num of shrooksArray)
    // for (let i = 0; i < shrooksArray.length; i++) {
    //     console.log(shrooksArray[i])
    // }
    // //正向crount

    // for (let i = shrooksArray.length - 1; i >= 0; i--) {
    //     console.log(shrooksArray[i])
    // }
    // //反向crount
}