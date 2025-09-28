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
    y2: 135,
    x: 320,
    y: 240,
    strokeColor: 0
}

//SET THE PROPERTIES FOR THE STAREYES
let starEyesP = {
    quandx1and4: 240,
    quandy1and2: 70,
    quandx2and3: 260,
    quandy3and4: 80,
    quandRx1andRx4: 340,
    quandRx2andRX3: 360,
    arc1x: 240,
    arcR1x: 340,
    arc2x: 260,
    arcR2x: 360,
    arc1y: 70,
    arc2y: 80,
    arcw: 20,
    arch: 12,
    increase: 1,
    increaseArc: 2,
    strokeColor: "#ffffffff",
    strokeWeight: 1,
    fill: {
        background: "#000000ff",
        eyecolor: "#feffcbff"
    },
    ellipse: {
        x1: 250,
        x2: 350,
        y: 75,
        w: 40,
        h: 50
    }
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

    //DRAW THE FROGBody
    frogBody();

    //DRAW THE FROGHEAD
    frogHead();

    //MAKE THE STAREYES BLINKING.
    if (starEyesP.arc1y > 54) {
        starEyesOpen();
    }
    else {
        starEyesP.quandy1and2 = 70;
        starEyesP.quandy3and4 = 80;
        starEyesP.arc1y = 70;
        starEyesP.arc2y = 80;
        starEyesP.arch = 12;
    }

}

function mousePressed() {

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

    //MAKE THE FROGCHEEKLINE COLOR CHANGED BY MOUSE AND RANDOM B. WHEN THE MOUSE NOT MOVE, THE RGB(B) WILL NOT CHANGE. IF MOUSE MOVE, THE RGB(B)COLOR WILL CHANGE.
    if (frogCheekLine.x == mouseX && frogCheekLine.y == mouseY) {
        stroke(mouseX, mouseY, frogCheekLine.strokeColor);
    }

    else {
        frogCheekLine.strokeColor = random(0, 255);
        stroke(mouseX, mouseY, frogCheekLine.strokeColor);
        frogCheekLine.x = mouseX;
        frogCheekLine.y = mouseY;
    }

    line(frogCheekLine.leftLX1, frogCheekLine.y1, frogCheekLine.leftLx2, frogCheekLine.y2);
    line(frogCheekLine.leftLX1 - 20, frogCheekLine.y1, frogCheekLine.leftLx2 - 20, frogCheekLine.y2);
    line(frogCheekLine.leftLX1 - 40, frogCheekLine.y1, frogCheekLine.leftLx2 - 40, frogCheekLine.y2);
    line(frogCheekLine.RightLX1, frogCheekLine.y1, frogCheekLine.rightlx2, frogCheekLine.y2);
    line(frogCheekLine.RightLX1 + 20, frogCheekLine.y1, frogCheekLine.rightlx2 + 20, frogCheekLine.y2);
    line(frogCheekLine.RightLX1 + 40, frogCheekLine.y1, frogCheekLine.rightlx2 + 40, frogCheekLine.y2);
    pop();

}

//SET THE RIGHT AND LEFT FROG BLINKING EYES.
function starEyesOpen() {

    //SET THE LEFT BLINKING FROGEYES
    //background of the eyes
    push();
    fill(starEyesP.fill.background);
    stroke(starEyesP.strokeColor);
    strokeWeight(starEyesP.strokeWeight);
    ellipse(starEyesP.ellipse.x1, starEyesP.ellipse.y, starEyesP.ellipse.w, starEyesP.ellipse.h);
    pop();

    //set the star eyes
    push();
    fill(starEyesP.fill.eyecolor);
    noStroke();
    //SET THE MOVEMENT FOR THE FROGEYES INCRESASE AND KEEP THE STAR INSIDE THE EYES.
    starEyesP.quandy1and2 -= starEyesP.increase;
    starEyesP.quandy3and4 += starEyesP.increase;
    starEyesP.quandy1and2 = constrain(starEyesP.quandy1and2, 54, 70); // 57 . 60
    starEyesP.quandy3and4 = constrain(starEyesP.quandy3and4, 80, 96); // 90 . 93
    quad(starEyesP.quandx1and4, starEyesP.quandy1and2, starEyesP.quandx2and3, starEyesP.quandy1and2, starEyesP.quandx2and3, starEyesP.quandy3and4, starEyesP.quandx1and4, starEyesP.quandy3and4);
    pop();

    //set the star eyes
    push();
    noStroke();
    fill(starEyesP.fill.background);
    //SET THE MOVEMENT FOR THE FROGEYES INCRESASE AND KEEP THE STAR INSIDE THE EYES.
    starEyesP.arc1y -= starEyesP.increase;
    starEyesP.arc2y += starEyesP.increase;
    starEyesP.arch += starEyesP.increaseArc
    starEyesP.arch = constrain(starEyesP.arch, 12, 42); //30.45
    starEyesP.arc1y = constrain(starEyesP.arc1y, 54, 69);// 55 60
    starEyesP.arc2y = constrain(starEyesP.arc2y, 81, 96); // 90 95
    arc(starEyesP.quandx1and4, starEyesP.arc1y, starEyesP.arcw, starEyesP.arch, 0, 90);
    arc(starEyesP.quandx2and3, starEyesP.arc1y, starEyesP.arcw, starEyesP.arch, 90, 180);
    arc(starEyesP.quandx1and4, starEyesP.arc2y, starEyesP.arcw, starEyesP.arch, 270, 360);
    arc(starEyesP.quandx2and3, starEyesP.arc2y, starEyesP.arcw, starEyesP.arch, 180, 270);
    pop();

    //SET THE RIGHT BLINKING FROGEYES
    //background of the eyes
    push();
    fill(starEyesP.fill.background);
    stroke(starEyesP.strokeColor);
    strokeWeight(starEyesP.strokeWeight);
    ellipse(starEyesP.ellipse.x2, starEyesP.ellipse.y, starEyesP.ellipse.w, starEyesP.ellipse.h);
    pop();

    //set the star eyes
    push();
    fill(starEyesP.fill.eyecolor);
    noStroke();
    //SET THE MOVEMENT FOR THE FROGEYES INCRESASE AND KEEP THE STAR INSIDE THE EYES.
    starEyesP.quandy1and2 -= starEyesP.increase;
    starEyesP.quandy3and4 += starEyesP.increase;
    starEyesP.quandy1and2 = constrain(starEyesP.quandy1and2, 54, 70);
    starEyesP.quandy3and4 = constrain(starEyesP.quandy3and4, 80, 96);
    quad(starEyesP.quandRx1andRx4, starEyesP.quandy1and2, starEyesP.quandRx2andRX3, starEyesP.quandy1and2, starEyesP.quandRx2andRX3, starEyesP.quandy3and4, starEyesP.quandRx1andRx4, starEyesP.quandy3and4);
    pop();

    //set the star eyes
    push();
    noStroke();
    fill(starEyesP.fill.background);
    //SET THE MOVEMENT FOR THE FROGEYES INCRESASE AND KEEP THE STAR INSIDE THE EYES.
    starEyesP.arc1y -= starEyesP.increase;
    starEyesP.arc2y += starEyesP.increase;
    starEyesP.arch += starEyesP.increaseArc
    starEyesP.arch = constrain(starEyesP.arch, 12, 42);
    starEyesP.arc1y = constrain(starEyesP.arc1y, 54, 69);
    starEyesP.arc2y = constrain(starEyesP.arc2y, 81, 96);
    arc(starEyesP.quandRx1andRx4, starEyesP.arc1y, starEyesP.arcw, starEyesP.arch, 0, 90);
    arc(starEyesP.quandRx2andRX3, starEyesP.arc1y, starEyesP.arcw, starEyesP.arch, 90, 180);
    arc(starEyesP.quandRx1andRx4, starEyesP.arc2y, starEyesP.arcw, starEyesP.arch, 270, 360);
    arc(starEyesP.quandRx2andRX3, starEyesP.arc2y, starEyesP.arcw, starEyesP.arch, 180, 270);
    pop();
}

function frogBody() {

    push();
    fill("#D7B95A")
    noStroke();
    ellipse(300, 260, 175, 200);
    pop();

    push();
    fill("#fff2f278")
    noStroke();
    ellipse(300, 260, 130, 180);
    pop();
}
