
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

//define background music for the passedmenu
let isPMBgmPlaying = false;


function preloadPassedMenu() {
    bgmPMMusic = loadSound('assets/sounds/Passed_Music.mp3');

}

function PassedMenuDraw() {
    BgChangeDraw();
    stopBgm();
    startPMBgm();

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
    }

}

//Reset the counting parameters and reload the pics 
function reLoadGame() {
    gamePassedCount = 0;
    passedFrame = 0;
    game1PassTime = 0;
    game2PassTime = 0;
    game3PassTime = 0;
    //challenge: final page gif(s) need to be reloaded before restarting the game, otherwsise they will stay at the last frame
    preload();
}

//for passed menu, key pressed control 
function passedMenuKeyPressed(event) {
    stopPMBgm();
    startBgm();
    //press Any key to continue
    if (gamePassedCount === 3) {
        reLoadGame();
        state = "menu";
        //if you already get all 3 items the game will restart
    }
    else {
        state = "gamemenu";
    }
}

//for passed menu Mouse clicked control
function passedMenuMousePressed(event) {
    stopPMBgm();
    startBgm();
    //Clike Any key to continue
    if (gamePassedCount === 3) {
        reLoadGame();
        state = "menu";
    }
    else {
        state = "gamemenu";
    }
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

//Turn on the background music for the passedmenu
function startPMBgm() {
    if (isPMBgmPlaying === false) {
        bgmPMMusic.setLoop(true);   // loop the background music
        bgmPMMusic.setVolume(0.4);  // set the volume
        bgmPMMusic.play();
        isPMBgmPlaying = true;
    }
}

//Turn off the background music for the passedmenu
function stopPMBgm() {
    if (isPMBgmPlaying === true) {
        bgmPMMusic.stop();
        isPMBgmPlaying = false;
    }
}