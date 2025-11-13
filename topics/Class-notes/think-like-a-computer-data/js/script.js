/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

let CELL_SIZE = 125;
let NUM_COLS = 4;
let NUM_ROWS = 4;

let currentMaze = null; //it is a good value when you don't know what it going to be. 
let jsonData;
let currentMazeObject = null;
let counter = 0


function preload() {
    jsonData = loadJSON("assets/data/mazeClass.json");
}

function setup() {
    createCanvas(500, 500);
    console.log(jsonData);


    //get first mazes
    currentMazeObject = jsonData.mazes[counter]
    currentMaze = currentMazeObject.maze;

    console.log(currentMaze);
    // NUM_COLS = currentMaze.length
    // NUM_ROWS = currentMaze.length
    // CELL_SIZE = width / currentMaze.length

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
    drawMaze();
}

function drawMaze() {
    for (let i = 0; i < NUM_COLS; i++) {
        for (let j = 0; j < NUM_ROWS; j++) {
            //2d array
            if (currentMaze[i][j] === 0) {
                drawCell(i, j); //we need call the i and j to make for loop work
            }

        }
    }
}

function drawCell(x, y) { // it don't need to be i and j. it can be x and y
    fill(currentMazeObject.color);
    rectMode(CORNER);
    rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
}

function mousePressed() {
    counter++;

    // if (counter > 2) { 
    //     counter = 0
    // }

    currentMazeObject = jsonData.mazes[counter % 3] // this is using reminder to do the same way as if.
    currentMaze = currentMazeObject.maze;
    reset();
}

function reset() {
    NUM_COLS = currentMaze.length
    NUM_ROWS = currentMaze.length
    CELL_SIZE = width / currentMaze.length
}