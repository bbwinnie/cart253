/**
 * This game intro story file contains the code to run *only* the intro part of the program.
 */

// set the intro story for the game
let introText = "In a little place called Star Valley, tiny starbaby lived believing that light always returns. But lately, dark clouds of bad feelings have covered the sky, and heavy black stars keep falling, dimming their world. Only someone who still carries hope in their heart can help bring back the light.\nSo the Star Elder chooses you and places three magical treasures in your hands:\nThe Magic Basket — to catch the falling good emotion stars.\nThe Star Wand — to break jars rescue the good emotions star.\nThe Moon Boat — search star without hit the cloud.\n“Life has storms and shadows,” the elder whispers, “but if someone is willing to look up… tomorrow can still be bright.”\nNow, the starfolk are waiting for you to guide Glimmer Valley back into the light.\nAre you ready?";

// show the current infro.
let typedText = "";

// the current words typed
let typingIndex = 0;

//typing speed
let typingSpeed = 3;

// set the type state true or false
let isTyping = true;


// draw the background and set the img
function introDraw() {

    //display the background and set the img
    drawImg();

    //printer the text
    introType();

}

//draw the img 
function drawImg() {

    drawBgImage();

    push();
    //draw the background
    //set the image position as center
    imageMode(CENTER);
    //draw the text background
    image(textBg, width / 2, height / 2 + 25, 745, 980);
    //draw the staybaby
    image(storyI, 500, 380, 150, 150);
    pop();

}

//draw the printer effect of the text
function introType() {
    push();
    if (isTyping === true && frameCount % typingSpeed === 0 && typingIndex < introText.length) {
        typedText += introText.charAt(typingIndex);
        typingIndex++;
    }
    textFont(myFont);
    textSize(12);
    fill("#535050ff")
    textAlign(LEFT, CENTER);
    text(typedText, 140, -35, 425, 550);
    pop();
}

// if your mouse pressed, typing state flase, show the full text if,and prssed again screen change to game menu state.
function introMousePressed() {
    if (isTyping === true) {
        isTyping = false;
        //show the full text
        typingIndex = introText.length;
        typedText = introText;

    }
    else {
        state = 'gamemenu';
    }
}