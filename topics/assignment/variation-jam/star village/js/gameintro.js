/**
 * This game intro story file contains the code to run *only* the intro part of the program.
 */


let introText = "In a little place called Star Valley, tiny starfolk lived believing that light always returns.\nBut lately, dark clouds of bad feelings have covered the sky, and heavy black stars keep falling, dimming their world.\nOnly someone who still carries hope in their heart can help bring back the light.\nSo the Star Elder chooses you and places three magical treasures in your hands:\nThe Lightcatcher Basket — to catch the falling good feelings.\nThe Star Wand — to break open jars filled with bad emotions.\nThe Moon Boat — to sail across the cloud sea and collect lost stars.\n“Life has storms and shadows,” the elder whispers,\n“but if someone is willing to look up… tomorrow can still be bright.”\nNow, the starfolk are waiting for you to guide Glimmer Valley back into the light.\nAre you ready?";
let typedText = "";   // 当前显示的内容
let typingIndex = 0;  // 当前打到第几个字
let typingSpeed = 3;  // 打字速度（每多少帧出现一个字）
let isTyping = true;

function introDraw() {
    push();
    background(bgImg);
    imageMode(CENTER);
    image(textBg, width / 2, height / 2 + 25, 700, 750);
    introType()
    pop();
}

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

function introMousePressed() {
    if (isTyping === true) {
        isTyping = false;
        typingIndex = introText.length;
        typedText = introText;

    }
    else {
        state = 'gamemenu';
    }
}