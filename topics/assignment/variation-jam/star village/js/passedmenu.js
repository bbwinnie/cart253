//Default value to iscontinue check
let isContinue = false;

//let passed Text, size position and fill
let passedWordsP = {
    size: 20,
    fill: "#f8a01cff",
    text: 'Press any key or click the mouse to continue',
    x: 350,
    y: 10
}

//let Final Text, and fill
let finalWordsP = {
    fill: "#75120fff",
    text: 'The sky is shining again!! all because you never stopped believing.'
}

function PassedMenuDraw() {

    BgChangeDraw();

}


//Draw PassMenu Background
function BgChangeDraw() {
    switch (gamePassedCount) {
        case 1:
            imageMode(CORNER);
            image(gamemenuImg1, 0, 0, width, height);
            image(gamemenuImg2, 0, 0, width, height);
            drawPassedText();
            break;
        case 2:

            imageMode(CORNER);
            image(gamemenuImg1, 0, 0, width, height);
            image(gamemenuImg3, 0, 0, width, height);
            drawPassedText();
            break;
        case 3:

            imageMode(CORNER);
            image(gamemenuImg1, 0, 0, width, height);
            image(gamemenuImg4, 0, 0, width, height);
            drawFinalText();
            break;
    }

}

//for passed menu key pressed control
function passedMenuKeyPressed(event) {
    //press Any key to continue
    state = "gamemenu";
}

//for passed menu Mouse clicked control
function passedMenuMousePressed(event) {
    //Clike Any key to continue
    state = "gamemenu";
}


//draw the passed text
function drawPassedText() {
    push();
    textFont(myFont);
    textSize(passedWordsP.size);
    fill(passedWordsP.fill);
    text(passedWordsP.text, passedWordsP.x, passedWordsP.y);
    pop();
}

//draw the final text
function drawFinalText() {
    push();
    textFont(myFont);
    textSize(passedWordsP.size);
    fill(finalWordsP.fill);
    text(finalWordsP.text, passedWordsP.x, passedWordsP.y);
    pop();
}