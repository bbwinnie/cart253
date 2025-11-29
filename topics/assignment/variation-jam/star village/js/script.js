/**
 * Star Village
 * Weini Wang
 * 
 * A small game with three distinctive variations. The game was talking about star Village.
 */

"use strict";

//set the screen state
let state = "menu";

/**
 * Create the canvas
*/
function setup() {
    createCanvas(700, 500);
}

/**
 * Display the menu or the game variation
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
        case "game1":
            game1Draw();
            break;
        case "game2":
            game2Draw();
            break;
        case "game3":
            game3Draw();
            break;
    }
}


/**
 * Listen for mouse pressed and call the function for it in the
 * current state
 */
function mousePressed() {
    switch (state) {
        case "menu":
            menuMousePressed();
            break;
        case "intro":
            introMousePressed();
            break;
        case "gamemenu":
            gameSelectMousePressed();
            break;
        case "game1":
            game1MousePressed();
            break;
        case "game2":
            game2MousePressed();
            break;
        case "game3":
            game3MousePressed();
            break;
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
        case "game1":
            game1KeyPressed(event);
            break
        case "game2":
            redKeyPressed(event);
            break;
        case "game3":
            yellowKeyPressed(event);
            break;
    }
}