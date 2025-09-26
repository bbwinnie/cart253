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
    h: 170
}

// SET THE DETAIL FOR FORGEARS
let frogE = {
    fill: "#D7B95A",
    rightEarX: 350,
    leftEarX: 250,
    y: 95,
    w: 65,
    h: 100,
    arcStartP: 180,
    arcStopP: 0
}

let frogEyes = {
    fill: "#000000ff",
    y: 72,
    w: 32,
    h: 38,
    rotateLeft: 15,
    rotateRight: 345,
    strokeWeight: 2.5,
    strokeColor: "#ffffffff"
}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {

    // set the canvas
    createCanvas(640, 480);

    // set the background color
    background("#c8f0eeff");

    // set the angle unit by degrees.
    angleMode(DEGREES);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    //DRAW THE FROGHEAD
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
    fill(frogE.fill);
    noStroke();
    arc(frogE.leftEarX, frogE.y, frogE.w, frogE.h, frogE.arcStartP, frogE.arcStopP, CHORD);
    arc(frogE.rightEarX, frogE.y, frogE.w, frogE.h, frogE.arcStartP, frogE.arcStopP, CHORD);
    pop();

    //SET THE FROG LEFT EYES
    push();
    fill(frogEyes.fill);
    strokeWeight(frogEyes.strokeWeight);
    stroke(frogEyes.strokeColor);
    translate(frogE.leftEarX, frogEyes.y);
    rotate(frogEyes.rotateLeft);
    ellipse(0, 0, frogEyes.w, frogEyes.h);
    pop();

    //SET THE FROG RIGHT EYES
    push();
    fill(frogEyes.fill);
    strokeWeight(frogEyes.strokeWeight);
    stroke(frogEyes.strokeColor);
    translate(frogE.rightEarX, frogEyes.y);
    rotate(frogEyes.rotateRight);
    ellipse(0, 0, frogEyes.w, frogEyes.h);
    pop();

}