/**
 * This game intro story file contains the code to run *only* the intro part of the program.
 */

// set the intro story for the game
let introText = "In a little place called Star Valley, tiny starfolk lived believing that light always returns.\nBut lately, dark clouds of bad feelings have covered the sky, and heavy black stars keep falling, dimming their world.\nOnly someone who still carries hope in their heart can help bring back the light.\nSo the Star Elder chooses you and places three magical treasures in your hands:\nThe Lightcatcher Basket — to catch the falling good feelings.\nThe Star Wand — to break open jars filled with bad emotions.\nThe Moon Boat — to sail across the cloud sea and collect lost stars.\n“Life has storms and shadows,” the elder whispers,\n“but if someone is willing to look up… tomorrow can still be bright.”\nNow, the starfolk are waiting for you to guide Glimmer Valley back into the light.\nAre you ready?";

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

    // draw the background img
    background(bgImg);

    //draw the img 
    push();
    imageMode(CENTER);
    image(textBg, width / 2, height / 2 + 25, 700, 750);
    introType();
    pop();
}

//draw the printer effect of the text
function introType() {
    if (isTyping === true && frameCount % typingSpeed === 0 && typingIndex < introText.length) {
        typedText += introText.charAt(typingIndex);
        typingIndex++;
    }
    textFont(myFont);
    textSize(12);
    fill("#000000ff")
    textAlign(LEFT, CENTER);
    text(typedText, 140, -35, 425, 550);
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