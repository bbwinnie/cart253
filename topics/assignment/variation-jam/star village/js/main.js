/**
 * This menu file contains the code to run *only* the menu part of the program.
 * Note how it has its own draw, menuDraw(), and its own keyPressed, menuKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

// set the game name 
const menuText = "Star Village";

let tittleP = {
    size: 50,
    fill: "#ffcc00",
}

//define my font and image variable
let myFont;
let bgImg;
let textBg;
let game1BG;
let game2BG;
let game3BG;

//define background music
let isBgmPlaying = false;

// perload all the fonts, images and sounds
function preload() {
    myFont = loadFont('assets/font/PixelifySans-VariableFont_wght.ttf');
    bgImg = loadImage('assets/images/startbackground.jpeg');
    gamemenuImg1 = loadImage('assets/images/sun.gif');
    gamemenuImg2 = loadImage('assets/images/game1end.gif');
    gamemenuImg3 = loadImage('assets/images/game2end.gif');
    gamemenuImg4 = loadImage('assets/images/game3end.gif');
    gamemenuImg5 = loadImage('assets/images/gameinitial.gif');
    storyI = loadImage('assets/images/starbaby.gif');
    textBg = loadImage('assets/images/pages.gif');
    game1BG = loadImage('assets/images/game1.gif');
    game2BG = loadImage('assets/images/game2.gif');
    game3BG = loadImage('assets/images/game3.gif');
    bgmMainMusic = loadSound('assets/sounds/story_music_full.mp3');
    pointlossSound = loadSound('assets/sounds/lose_point.mp3');
    preloadGame1();
    preloadGame2();
    preloadGame3();
    preloadPassedMenu();
}

/**
 * Display the mean pages
 */
function menuDraw() {

    //set the background
    drawBgImage();

    //display the Tittle
    drawTittle();

}

function drawBgImage() {
    push();
    imageMode(CORNER);
    image(bgImg, 0, 0, width, height);
    pop();
}

function drawTittle() {
    //set the text font, size and position for the game
    push();
    textFont(myFont);
    textSize(tittleP.size);
    fill(tittleP.fill);
    textAlign(CENTER, CENTER);
    text(menuText, width / 2, height / 2);
    pop();
}

//Turn on the background music
function startBgm() {
    if (isBgmPlaying === false) {
        bgmMainMusic.setLoop(true);   // loop the background music
        bgmMainMusic.setVolume(0.4);  // set the volume
        bgmMainMusic.play();
        isBgmPlaying = true;
    }
}

//Turn off the background music
function stopBgm() {
    if (isBgmPlaying === true) {
        bgmMainMusic.stop();
        isBgmPlaying = false;
    }
}

//Point loss sound
function pointLossSound() {
    pointlossSound.setVolume(0.7);
    pointlossSound.play();
}


// when the mouse Pressed show the intro story
function menuMousePressed() {
    state = 'intro';
}

//when the key pressed, enter the gameintro menu
function menuKeyPressed(event) {
    //press any button Enter to continue
    state = "intro";
}