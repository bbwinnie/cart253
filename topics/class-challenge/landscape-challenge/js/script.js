/**
 * landscape-challenge
 * weini wang 
 * partner: ziyan pan
 * 
 * draw a landscape with a house
 */

"use strict";

/**
 * SETUP THE CANVAS
*/
function setup() {

    // SET THE CANVAS 
    createCanvas(640, 480);
    // SET THE BACKGROUND COLOR
    background("#80d6f1");

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    people();
    land();
    cloud();
    moon();
    star();
    drawHouse();

}

// draw the land
function land() {

    // set the land as a ellipse, add the color and stroke    
    push();
    fill("#007ca5");
    noStroke();
    ellipse(150, 500, 450, 300);
    pop();

    // set the secound land as a elllipse, add the color and stroke
    push();
    fill("#157291");
    noStroke();
    ellipse(435, 550, 580, 300);
    pop();
}

// draw the cloud
function cloud() {

    // A cloud from pippin however we change the color and location
    push();
    noStroke();
    fill("#c7c7c7");
    ellipse(400, 100, 100, 100);
    ellipse(480, 80, 100, 100);
    ellipse(460, 120, 60, 60);
    ellipse(490, 130, 60, 60);
    ellipse(520, 120, 60, 60);
    pop();
}

// draw the moon
function moon() {

    //The moon
    push();
    noStroke();
    fill(255);
    ellipse(100, 100, 120, 120);
    pop();

}

// draw the star
function star() {

    //the star
    push();
    noStroke();
    fill("#c2f1ed");
    quad(230, 122, 246, 80, 230, 38, 214, 80);
    pop();

}

// Draw the people
function people() {

    //the people
    push();
    noStroke();
    fill("#32327c");
    ellipse(100, 300, 20, 20);
    ellipse(100, 350, 20, 90);
    pop();

}

// Draws a lovely, cosy house with a pointy roof

function drawHouse() {
    drawBody();
    drawRoof();
    drawWindow();
    drawDoor();
}

// Draws the main body of our house. inspiretion by pippin

function drawBody() {
    // The main body of the house
    push();
    noStroke();
    fill("#3f3f87");
    rect(300, 240, 280, 180);
    pop();
}

// Draws the roof of our house (a triangle)

function drawRoof() {
    push();
    noStroke();
    fill("#32327c");
    triangle(280, 240, 440, 180, 600, 240);
    pop();
}

// Draws a window on our house

function drawWindow() {
    push();
    noStroke();
    fill("#8888BB");
    ellipse(500, 320, 80, 80);
    pop();
}

// Draws a door and a doorknob on our house
function drawDoor() {
    // The door
    push();
    noStroke();
    fill("#7676B1");
    rect(320, 300, 80, 120);
    pop();

    // The doorknob
    push();
    noStroke();
    fill("#32327c");
    ellipse(340, 360, 10, 10);
    pop();
}


