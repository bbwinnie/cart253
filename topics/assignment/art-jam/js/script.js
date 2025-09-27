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

//SET THE DETAIL FOR FROGEYES
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

//SET THE DETAIL FOR FROGMOUTH
let frogMouth = {
    fill: "#feffafff",
    x: 300,
    y: 100,
    w: 30,
    h: 150,
    arcStartP: 0,
    arcStopP: 180
}

//SET THE DETAIL FOR FROGCHEEK
let frogCheek = {
    fill: "#eecbcbff",
    leftX: 230,
    rightX: 370,
    y: 130,
    w: 70,
    h: 50,
}

//SET THE LINE INSIDE THE FROGCHEECK
let frogCheekLine = {
    strokeWeight: 3,
    leftLX1: 255,
    RightLX1: 355,
    y1: 120,
    leftLx2: 245,
    rightlx2: 345,
    y2: 135
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

    //SET THE FROG MOUTH 
    push();
    fill(frogMouth.fill);
    noStroke();
    arc(frogMouth.x, frogMouth.y, frogMouth.w, frogMouth.h, frogMouth.arcStartP, frogMouth.arcStopP, CHORD);
    pop();

    //SET THE CHEEK FOR THE FROG
    push();
    fill(frogCheek.fill);
    noStroke();
    ellipse(frogCheek.leftX, frogCheek.y, frogCheek.w, frogCheek.h);
    ellipse(frogCheek.rightX, frogCheek.y, frogCheek.w, frogCheek.h);
    pop();

    //SET THE CHEEK DETAIL FOR THE FROG, MAKE THE COLOR CHANGE BY THE MOUSE
    push();
    strokeWeight(frogCheekLine.strokeWeight);
    //MAKE THE FROGCHEEKLINE COLOR CHANGED, R BY MOUSEX, G BY MOUSEY AND B WILL BE A RANDOM NUMBER BETWEEN 0-255.
    stroke(mouseX, mouseY, random(0, 255));
    line(frogCheekLine.leftLX1, frogCheekLine.y1, frogCheekLine.leftLx2, frogCheekLine.y2);
    line(frogCheekLine.leftLX1 - 20, frogCheekLine.y1, frogCheekLine.leftLx2 - 20, frogCheekLine.y2);
    line(frogCheekLine.leftLX1 - 40, frogCheekLine.y1, frogCheekLine.leftLx2 - 40, frogCheekLine.y2);
    line(frogCheekLine.RightLX1, frogCheekLine.y1, frogCheekLine.rightlx2, frogCheekLine.y2);
    line(frogCheekLine.RightLX1 + 20, frogCheekLine.y1, frogCheekLine.rightlx2 + 20, frogCheekLine.y2);
    line(frogCheekLine.RightLX1 + 40, frogCheekLine.y1, frogCheekLine.rightlx2 + 40, frogCheekLine.y2);
    pop();

}
