/**
 * This file contains the code to run *only* the blue variation part of the program.
 * Note how it has its own draw, blueDraw(), and its own keyPressed, blueKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */


function preload() {
    img1 = loadImage("assets/images/starbaby.gif")
    img2 = loadImage("assets/images/background.png")

}
/**
 * This will be called just before the blue variation starts
 */
function blueSetup() {

}

/**
 * This will be called every frame when the blue variation is active
 */
function blueDraw() {
    image(img2, 0, 0,);
    text("⭐", 250, 500);
    textSize(50);
    image(img1, mouseX, 400,);

}

/**
 * This will be called whenever a key is pressed while the blue variation is active
 */
function blueKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the blue variation is active
 */
function blueMousePressed() {

}