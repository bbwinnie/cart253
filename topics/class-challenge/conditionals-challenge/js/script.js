/**
 * conditionals challenge
 * weini wang
 * 
 * working with ziyan pan
 * 
 * class challenge for the conditionals, distance
 */

"use strict";

//set the puck detail
const puck = {
    x: 200,
    y: 200,
    size: 100,
    fill: "#f6a9a9ff",
};

//set the user detail
const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#fff599ff"
};

// set the target detail
const target = {
    x: 70,
    y: 70,
    size: 100,
    fill: "#3265b1ff",
    fills: {
        noOverlap: "#89a2c8ee", // blue for no overlap
        overlap: "#b5f2b5ff" // green for overlap
    }
}

// Create the canvas
function setup() {
    createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
    background("#aaaaaa");

    // Move user circle
    moveUser();

    // Draw the user and puck
    drawUser();
    drawPuck();

    // move the puck
    movePuck();

    //draw Target
    drawTarget();

    checkTarget();
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
}

//check the movePuck
function movePuck() {
    const d = dist(user.x, user.y, puck.x, puck.y);
    const overlap = (d < user.size / 2 + puck.size / 2)

    //add the if condition to move the puck in x
    if (overlap && user.x > puck.x) {
        puck.x -= 1;
        puck.y -= 1;
    }
    else if (overlap && user.x < puck.x) {
        puck.x += 1;
        puck.y += 1;
    }
    // else {
    //     puck.fill = puck.fills.noOverlap;
    // }

    //add the if condition to move the puck in y
    if (overlap && user.y > puck.y) {
        puck.y -= 1;
    }
    else if (overlap && user.y < puck.y) {
        puck.y += 1;
    }
}

//display the target
function drawTarget() {
    push();
    stroke(255);
    strokeWeight(2);
    fill(target.fill);
    setLineDash([10, 10]);
    ellipse(target.x, target.y, target.size);
    pop();
}

//display the dashline
function setLineDash(list) {
    drawingContext.setLineDash(list);
}

//display the checkTarget
function checkTarget() {

    //get the position for the puck and target.
    const d = dist(puck.x, puck.y, target.x, target.y);
    const overlap = (d < puck.size / 2 + target.size / 2);

    // check the overlap for the target and puck.
    if (overlap) {
        target.fill = target.fills.overlap;
    }
    else {
        target.fill = target.fills.noOverlap;
    }
}
