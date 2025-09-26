/**
 * self portrait
 * weini wang
 * 
 * A self portrait assignment
 */

"use strict";

// SET THE DETAIL FOR FORGHEAD
let frogH = {
    fill: "#D7B95A",
    x: 300,
    y: 150,
    w: 240,
    h: 150
}

// SET THE DETAIL FOR FORGEARS
let forgE = {
    fill: "#D7B95A",
    rightEarX: 250,
    leftEarX: 350,
    y: 95,
    w: 65,
    h: 100,
    arcStartP: 180,
    arcStopP: 0
}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {

    // set the canvas
    createCanvas(640, 480);
    // set the background color
    background("#c8f0eeff");

    angleMode(DEGREES);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    frogHead();
}

//DISPLAY THE FORGHEAD
function frogHead() {

    //SET THE FROGHEAD
    push();
    fill(frogH.fill);
    noStroke();
    ellipse(frogH.x, frogH.y, frogH.w, frogH.h);
    pop();

    //SET THE FROGEAR
    push();
    fill("#D7B95A");
    noStroke();
    arc(forgE.leftEarX, forgE.y, forgE.w, forgE.h, forgE.arcStartP, forgE.arcStopP, CHORD);
    arc(forgE.rightEarX, forgE.y, forgE.w, forgE.h, forgE.arcStartP, forgE.arcStopP, CHORD);
    pop();

}