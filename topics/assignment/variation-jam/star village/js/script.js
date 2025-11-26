/**
 * Star Village
 * Weini Wang
 * 
 * A small game with three distinctive variations. The game was talking about star Village.
 */

"use strict";

let state = "menu";

/**
 * Create the canvas
*/
function setup() {
    createCanvas(700, 500);
}


/**
 * Display the menu or the current variation
*/
function draw() {
    switch (state) {
        case "menu":
            menuDraw();
            break;
        case "intro":
            introDraw();
            break;
        case "gamemenu":
            gameMenuDraw();
            break;
    }
}

/**
 * Listen for mouse pressed and call the function for it in the
 * current state
 */
function mousePressed() {
    if (state === "menu") {
        menuMousePressed();
    }
    else if (state === "intro") {
        introMousePressed();
    }
}

/**
 * Listen for keypressed and call the function for it in the
 * current state
 */
function keyPressed(event) {
    switch (state) {
        case "menu":
            menuKeyPressed(event);
            break;
    }
}