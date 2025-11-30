/**
 * This file contains the code to run *only* the game2 part of the program.
 * Note how it has its own draw, greenDraw(), and its own keyPressed, greenKeyPressed().
 */

//set the default value of parameters
let wandStarX;
let wandStarY;
let dx;
let dy;
let lenMtoS;
let starJarX;
let starJarY;
let textWStarJarX;
let textWStarJarY;
let lenStoJ;
let wandStarHSpeed;
let wandStarVSpeed;
let wandStarSpeed;
let starJarHSpeed;
let starJarVSpeed;
let textWStarJarHSpeed;
let textWStarJarVSpeed;
let starJarArray;
let starJars;
let jarImg;
let isBroken;
let breakTimer;
let refreshTimer;
let starJarCount;
let wandStarArray;
let wandStarCount;

//preload all the img and json file
function preloadGame2() {
    char2 = loadImage("assets/images/char2.gif");
    bgImg2 = loadImage("assets/images/background2.jpeg");
    starJar1 = loadImage("assets/images/starjar1.png");
    starJar2 = loadImage("assets/images/starjar2.gif");
    MoodsList = loadJSON("assets/JSON/moods.json");
    pauseCheckYes = loadImage("assets/images/yes.png");
    pauseCheckNo = loadImage("assets/images/no.png");
    passedCheckYes = loadImage("assets/images/yes.png");
    passedCheckNo = loadImage("assets/images/no.png");
}

//key parameters perset
function game2Setup() {

    // position of the wand star
    wandStarX = width / 2 + 50;
    wandStarY = 400;
    wandStarSpeed = 5;

    //position and numbers of the starJar
    starJarArray = [];
    starJars = 5;

    //Array of the emotion words
    MoodCategory = [];
    MoodWords = '';

    //distence check for the yes and no button
    distCheckY = 0;
    distCheckN = 0;

    //array for the wand star and wand star count
    wandStarArray = [];
    wandStarCount = 0;

    //scoring system
    starCount = 0;

    //preset the value of starJars
    for (let i = 0; i < starJars; i++) {

        // creat starJar at random position and random speed
        starJarArray[i] = {};
        starJarArray[i].starJarX = random(50, 650);
        starJarArray[i].starJarY = random(50, 400);
        starJarArray[i].starJarHSpeed = random([random(-3, -1), random(1, 3)]);
        starJarArray[i].starJarVSpeed = random([random(-3, -1), random(1, 3)]);

        //add starJar picutre
        imageMode(CENTER);
        starJarArray[i].jarImg = starJar1;
        textFont(myFont);
        textSize(20);
        textAlign(CENTER, CENTER);
        //add emotion words and speed, position is same as starjar
        starJarArray[i].MoodWords = random(MoodsList.moods);

        //auto check if a random words inside the array positive the state is ture. otherwise is false
        MoodCategory[i] = MoodsList.positive.includes(starJarArray[i].MoodWords);
        starJarArray[i].textWStarJarX = starJarArray[i].starJarX;
        starJarArray[i].textWStarJarY = starJarArray[i].starJarY + 50;
        starJarArray[i].textWStarJarHSpeed = starJarArray[i].starJarHSpeed;
        starJarArray[i].textWStarJarVSpeed = starJarArray[i].starJarVSpeed;

        //set the initial jar state
        starJarArray[i].isBroken = false;

        //set the timer for jar break and auto refresh
        starJarArray[i].breakTimer = 0;
        starJarArray[i].refreshTimer = 400;
    }

    //scoring system
    starJarCount = 0;

    //paused and passed states
    isPaused = false;
    isPassed = false;
}

function game2Draw() {
    //draw the detectMenu
    detectMenu2();

    //if the state is passed or pause, only show the menu, game stoped
    if (isPaused === true || isPassed === true) {
        return;
    }

    //draw the background 
    drawBackground2();

    //
    starJarDraw();

}

//set the detectMenu for the game
function detectMenu2() {

    // if you got 10 point, the passed state turn true, pass menu show up
    if (isPassed === true) {
        game2PassedMenu();
    }

    // if you press the esc, the paused the menu will show up
    if (isPaused === true) {
        game2PauseMenu();
    }
}

//display the background
function drawBackground2() {
    push();
    imageMode(CORNER);
    image(bgImg2, 0, 0, width, height);
    image(char2, width / 2, 400, 100, 100);
    pop();
}

//draw the star jar main function
function starJarDraw() {
    push();
    imageMode(CENTER);

    //draw the 5 star jars
    for (let i = 0; i < starJars; i++) {

        //auto refresh timer for stars counting
        starJarArray[i].refreshTimer--;
        //star jars move for x-axis
        starJarArray[i].starJarX += starJarArray[i].starJarHSpeed;
        starJarArray[i].textWStarJarX += starJarArray[i].textWStarJarHSpeed;
        //if it touch the canves border width, star jar will bounce back 
        if (starJarArray[i].starJarX >= 650 || starJarArray[i].starJarX <= 50) {
            starJarArray[i].starJarHSpeed = -starJarArray[i].starJarHSpeed;
            starJarArray[i].textWStarJarHSpeed = starJarArray[i].starJarHSpeed;
        }

        //star jars move for y-axis
        starJarArray[i].starJarY += starJarArray[i].starJarVSpeed;
        starJarArray[i].textWStarJarY += starJarArray[i].textWStarJarVSpeed;
        //if it touch the canves border hight, star jar will bounce back 
        if (starJarArray[i].starJarY >= 450 || starJarArray[i].starJarY <= 50) {
            starJarArray[i].starJarVSpeed = -starJarArray[i].starJarVSpeed;
            starJarArray[i].textWStarJarVSpeed = starJarArray[i].starJarVSpeed;
        }
        //if auto refresh timer === to 0,  refresh the starjar
        if (starJarArray[i].refreshTimer <= 0) {
            // reset the speed for the star jar 
            starJarArray[i].starJarHSpeed = random([random(-3, -1), random(1, 3)]);
            starJarArray[i].starJarVSpeed = random([random(-3, -1), random(1, 3)]);
            // reset the emotion words for the star jar
            starJarArray[i].MoodWords = random(MoodsList.moods);
            MoodCategory[i] = MoodsList.positive.includes(starJarArray[i].MoodWords);
            // reset the position and speed of the star jar
            starJarArray[i].textWStarJarHSpeed = starJarArray[i].starJarHSpeed;
            starJarArray[i].textWStarJarVSpeed = starJarArray[i].starJarVSpeed;
            // change the state back to orginal
            starJarArray[i].isBroken = false;
            starJarArray[i].breakTimer = 0;
            starJarArray[i].jarImg = starJar1;
            // reset the auto refresh timer 
            starJarArray[i].refreshTimer = 400;
        }

        // add the star jar
        image(starJarArray[i].jarImg, starJarArray[i].starJarX, starJarArray[i].starJarY, 75, 75);

        //if the words inside the array positive the words become yellow
        if (MoodCategory[i] === true) {
            fill("#ffcc00");
            text(starJarArray[i].MoodWords, starJarArray[i].textWStarJarX, starJarArray[i].textWStarJarY);
        }

        //if the words does not inside the array positive the words become red
        else {
            fill("#e70909ff");
            text(starJarArray[i].MoodWords, starJarArray[i].textWStarJarX, starJarArray[i].textWStarJarY);
        }
    }
    pop();
}

/**
 * This will be called whenever a key is pressed while the green variation is active
 */
function game2KeyPressed(event) {
    if (event.keyCode === 27) {
        setup();
        state = "gamemenu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the green variation is active
 */
function game2MousePressed() {

}