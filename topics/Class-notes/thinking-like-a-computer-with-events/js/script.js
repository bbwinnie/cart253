/**
 * Thinking like a computer with events
 * Pippin Barr
 * 
 * A small project for exploring how events work!
*/

"use strict";

let face = {
    x: 0,
    y: 0,
    size: 20,
    color: "#2cf833ff",
    isGreen: true
}

let face_2 = {
    x: 0,
    y: 0,
    size: 50,
    color: "#316232ff",
    isGreen: true
}

let face_3 = {
    x: 100,
    y: 100,
    size: 50,
    color: "#41d3dbff",
    isGreen: true,
    rectBoolean: false
}

/**
 * Create the canvas
*/
function setup() {

    createCanvas(500, 500);
    face.x = width / 2;
    face.y = height / 2;
    face_2.x = width / 3;
    face_2.y = height / 3;

    setTimeout(timeEvent, 1000) //it is not a p5 code, can not put it in draw.
}

function timeEvent() {
    face_3.rectBoolean = true;
}
/**
*/
function draw() {
    // 可以看出多少秒 console.log(millis());
    background("#eae315ff");
    push();
    fill(face.color);
    noStroke();
    ellipse(face.x, face.y, face.size, face.size);
    pop();
    //mouseMoved();

    push();
    fill(face_2.color);
    noStroke();
    ellipse(face_2.x, face_2.y, face_2.size, face_2.size);
    pop();

    if (face_3.rectBoolean === true) {
        push();
        fill(face_3.color);
        noStroke();
        rect(face_3.x, face_3.y, face_3.size, face_3.size);
        pop();
    }
}

// function mouseMoved() {
//     face.x = mouseX
//     face.y = mouseY
// }

function mousePressed() {

    let distance = dist(face.x, face.y, mouseX, mouseY);

    //check if mouse is in ellipse.
    if (distance < face.size / 2) {
        //check if face is green
        if (face.isGreen === true) {
            face.color = "#f59cf5ff";
            // face.isGreen = false;
        }
        else {
            face.color = "#2cf833ff"
            // face.isGreen = true;
        }
        face.isGreen = !face.isGreen;  // this line is same as face.isGreen=false / face.isGreen= true 就是把值取反，再赋值回去
    }
}

function keyPressed(event) {
    //console.log(event); // you can see all the detail of the key once you pressed the key.
    if (event.key === "q") {
        face_2.x += 2
    }
    else if (event.key === "f") {
        face_2.x -= 2
    }
}
