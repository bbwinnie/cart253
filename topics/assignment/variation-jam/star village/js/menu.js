/**
 * This menu file contains the code to run *only* the menu part of the program.
 * Note how it has its own draw, menuDraw(), and its own keyPressed, menuKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

// set the game name 
const menuText = "Star Village";

//define my font and image variable
let myFont;
let bgImg;
let textBg;
let game1BG;
let game2BG;
let game3BG;

// perload all the fonts and images
function preload() {
    myFont = loadFont('assets/font/PixelifySans-VariableFont_wght.ttf');
    bgImg = loadImage('assets/images/startbackground.jpeg');
    textBg = loadImage('assets/images/pages.gif');
    game1BG = loadImage('assets/images/starb.png');
    game2BG = loadImage('assets/images/starr.png');
    game3BG = loadImage('assets/images/stary.png');
    preloadGame1();
}

/**
 * Display the main menu
 */
function menuDraw() {
    push();
    background(bgImg);
    textFont(myFont);
    textSize(32);
    fill("#ffcc00")
    textAlign(CENTER, CENTER);
    text(menuText, width / 2, height / 2);
    pop();
}

/**
 * Listen to the keyboard
 */
function menuKeyPressed(event) {
    switch (event.keyCode) {
        case 82:
            state = "red-variation";
            redSetup();
            break;

        case 71:
            state = "green-variation";
            greenSetup();
            break;

        case 66:
            state = "blue-variation";
            blueSetup();
            break;
    }
}

/**
 * This will be called whenever the mouse is pressed while the menu is active
 */
function menuMousePressed() {

}