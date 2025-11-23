/**
 * Terrible New Car
 * Pippin Barr
 * 
 * A program to generate new car model names using dinosaurs.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

let carData = undefined;
let dinosaurData = undefined;
let langData = undefined;
let lang = "fr";
let jsonCar;
let JsonDinosaurs;

// Starts with the instruction
let carName = "Click to generate a car name.";

/**
 * Load the car and dinosaur data
 */
function preload() {
    jsonCar = loadJSON("assets/data/cars.json");
    JsonDinosaurs = loadJSON("assets/data/dinosaurs.json");
}

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 400);
}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {
    background(0);

    push();
    fill("pink");
    textAlign(CENTER, CENTER);
    textSize(32);
    text(carName, width / 2, height / 2);
    pop();
}

/**
 * Generate a new car name
 */
function mousePressed() {

    //console.log(carData);

    //get the random index number inside the array
    carData = floor(random(0, jsonCar.cars.length))
    dinosaurData = floor(random(0, JsonDinosaurs.dinosaurs.length))

    //get the name of car and dinosars 
    carName = jsonCar.cars[carData] + JsonDinosaurs.dinosaurs[dinosaurData];
}


