/**
 * Frogfrogfrog
 * Pippin Barr
 * 
 * A game of catching flies with your frog-tongue
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Click to launch the tongue
 * - Catch flies
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";

// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 150
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 200, // Will be random
    z: 0,
    size: 10,
    speed: 3,
    angle: 20,
    angle2: -20,
    wingW: 20,
    wingH: 5,
    color: {
        r: 0,
        g: 0,
        b: 0,
    }
};

let gameState = "start";

// SET THE DETAIL FOR FORGHEAD
let frogH = {
    fill: "#d3b64c",
    x: 320, //300
    y: 240, //150
    w: 240,
    h: 170
}

// SET THE DETAIL FOR FORGEARS
let frogE = {
    fill: "#d3b64c",
    rightEarX: 370,
    leftEarX: 270,
    y: 185,
    w: 65,
    h: 100,
    arcStartP: 180,
    arcStopP: 0
}

//SET THE DETAIL FOR FROGEYES
let frogEyes = {
    fill: "#000000ff",
    y: 162,
    w: 32,
    h: 38,
    rotateLeft: 15,
    rotateRight: 345,
    strokeWeight: 2.5,
    strokeColor: "#ffffffff"
}

//SET THE DETAIL FOR FROGMOUTH
let frogMouth = {
    fill: "#f07979ff",
    x: 320,
    y: 190,
    w: 30,
    h: 150,
    arcStartP: 0,
    arcStopP: 180,
}

//SET THE DETAIL FOR FROGCHEEK
let frogCheek = {
    fill: "#f7f8c3ff",
    leftX: 250,
    rightX: 390,
    y: 220,
    w: 70,
    h: 50,
}

//SET THE LINE INSIDE THE FROGCHEECK
let frogCheekLine = {
    strokeWeight: 3,
    leftLX1: 275,
    RightLX1: 375,
    y1: 210,
    leftLx2: 260,
    rightlx2: 360,
    y2: 226,
    x: 375,
    y: 330,
    strokeColor: 0
}

//DEFAUT THE FONT
let myFont;

//USED TO LOAD EXTERNAL FILES 
function preload() {
    myFont = loadFont('assets/textFont/Super joyful.ttf');
}

/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);

    angleMode(DEGREES);

    // Give the fly its first random position
    resetFly();

    //reset the background
    background(0);

}

function startTheGame() {

}

function draw() {
    // console.log(gameState);

    if (gameState === "start") {
        startScreen();
    }
    else if (gameState === "play") {
        gameScreen();
    }
    else if (gameState === "end") {
        endScreen();
    }

}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {

    // Move the fly
    fly.x += fly.speed;

    // Move the fly sine wave, add  the random.z make the fly show differently evertime it show up.
    // Multiplying by 50 sets the maximum angle range (amplitude)
    fly.y = 50 * sin(fly.x * 2) + fly.z;

    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
    }
}

/**
 * Draws the fly as a black circle
 */
function drawFly() {

    /**Make the fly's angles swing smoothly between -20° and 20°
    * The sine function creates a natural oscillation over time
    *frameCount * 10 controls the speed of the swinging motion
    *Multiplying by 20 sets the maximum angle range (amplitude)
    */
    fly.angle = sin(frameCount * 10) * 20;
    fly.angle2 = -sin(frameCount * 10) * 20;

    //Set the fly Color to ramdom color 
    fly.color.r = random(0, 255);
    fly.color.g = random(0, 255);
    fly.color.b = random(0, 255);

    push();
    noStroke();
    fill(fly.color.r, fly.color.g, fly.color.b);
    translate(fly.x, fly.y); //Translate the origin point to make the rotate on x and y.
    rotate(fly.angle); // rotate the fly's wings.
    ellipse(0, 0, fly.wingW, fly.wingH);
    ellipse(0, 0, fly.size);
    pop();

    push();
    noStroke();
    fill(fly.color.r, fly.color.g, fly.color.b);
    translate(fly.x, fly.y);//Translate the origin point to make the rotate on x and y.
    rotate(fly.angle2);// rotate the fly's wings.
    ellipse(0, 0, fly.wingW, fly.wingH);
    pop();

}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    //fly.y = random(0, 300);
    fly.z = random(0, 300);
}

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
    frog.body.x = mouseX;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size / 2 + fly.size / 2);
    if (eaten) {
        // Reset the fly
        resetFly();
        // Bring back the tongue
        frog.tongue.state = "inbound";
    }
}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
}

//Set the screen system for start the game
function startScreen() {
    background("#87ceeb");

    //Display the text
    startText();

    //DRAW THE FROGHEAD
    frogHead();

    moveMouth();

}

//Making the mouth bigger by pressed the mouse.
function moveMouth() {

    if (mouseIsPressed) {
        //When the mouse is held down, gradually make the mouth bigger
        frogMouth.w = min(frogMouth.w + 5, 800);  // Limit the maximum width to prevent infinite growth
        frogMouth.h = min(frogMouth.h + 5, 1000);
        frogMouth.arcStartP = min(frogMouth.arcStartP - 0.3, 0);
        frogMouth.arcStopP = min(frogMouth.arcStopP + 0.3, 250);
        //when the mouth cover the screen, the game will start.
        if (frogMouth.w === 800) {
            gameState = "play";
        }
    } else if (frogMouth.w <= 800) {
        //  When the mouse is released, gradually make the mouth smaller and set the mouth stay small.
        frogMouth.w = max(frogMouth.w - 5, 30);
        frogMouth.h = max(frogMouth.h - 3, 150);
        frogMouth.arcStartP = min(frogMouth.arcStartP + 0.3, 0);
        frogMouth.arcStopP = max(frogMouth.arcStopP - 0.3, 180);
    }
}

//Set the screen system for the game
function gameScreen() {

    background("#87ceeb");
    moveFly();
    drawFly();
    moveFrog();
    moveTongue();
    drawFrog();
    checkTongueFlyOverlap();
}


//Set the screen system for end of game
function endScreen() {
    background("#87ceeb");
}

//Display the Froghead
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

    //SET THE FROG MOUTH (PUT IT IN THE BOTTOM LAYER ONCE IT BECOME BIGGER CAN OVER ALL THE HEAD)
    push();
    fill(frogMouth.fill);
    noStroke();
    arc(frogMouth.x, frogMouth.y, frogMouth.w, frogMouth.h, frogMouth.arcStartP, frogMouth.arcStopP, CHORD);
    pop();

}


//Displays the text
function startText() {
    //set the inform for the text
    push();
    fill("#fcff37ff");
    textSize(25);
    textFont(myFont);
    text("Press and hold the mouse to start your adventure!", 55, 400);
    pop();
}

