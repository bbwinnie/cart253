/**
 * This file contains the code to run *only* the game3 part of the program.
 */

//set the default value of parameters
let boatX;
let boatY;
let boatVspeed;
let boatHspeed;
let boatNextX;
let boatNextY;
let itemArray;
let itemCount;
let itemImages;
let itemImg;
let itemX;
let itemY;
let itemHSpeed;
let itemVSpeed;
let textItemX;
let textItemY;
let textItemHSpeed;
let textItemVSpeed;
let itemVSpeedTimer;


//preload all the img and json file
function preloadGame3() {
    char3 = loadImage("assets/images/char3.gif");
    bgImg3 = loadImage("assets/images/background3.jpg");
    bStar = loadImage("assets/images/starb.png");
    rStar = loadImage("assets/images/starr.png");
    yStar = loadImage("assets/images/stary.png");
    rain = loadImage("assets/images/rain.gif");
    MoodsList = loadJSON("assets/JSON/moods.json");
    pauseCheckYes = loadImage("assets/images/yes.png");
    pauseCheckNo = loadImage("assets/images/no.png");
    passedCheckYes = loadImage("assets/images/yes.png");
    passedCheckNo = loadImage("assets/images/no.png");
}


//key parameters perset
function game3Setup() {

    //set the boat position and speed
    boatX = 50;
    boatY = height / 2;
    boatVspeed = 0;
    boatHspeed = 0;

    //scoring system
    starCount = 0;

    //paused and passed states
    isPaused = false;
    isPassed = false;

    //array of the item Imags
    itemImages = [bStar, rStar, yStar, rain];
    itemArray = [];
    itemCount = 3;

    // emotion words
    MoodWords = '';

    //preset the value of item
    for (let i = 0; i < itemCount; i++) {

        //ctreat random item at random position and random speed total 3 item
        itemArray[i] = {};
        itemArray[i].itemImg = random(itemImages);
        itemArray[i].itemX = 800;
        itemArray[i].itemY = random(50, 450);
        itemArray[i].itemHSpeed = random(-1, -2);
        itemArray[i].itemVSpeed = random(-2, 2);
        itemArray[i].itemVSpeedTimer = 120;

        //check the distance between boats and items
        itemArray[i].BoatItemDist = dist(boatX, boatY, itemArray[i].itemX, itemArray[i].itemY);

        //emotion words 
        textFont(myFont);
        textSize(20);
        textAlign(CENTER, CENTER);

        //set rain with negative emotion words
        if (itemArray[i].itemImg === rain) {
            itemArray[i].MoodWords = random(MoodsList.negative);
        }
        else {
            itemArray[i].MoodWords = random(MoodsList.positive);
        }

        //keep the same speed and position of words as item
        itemArray[i].textItemX = itemArray[i].itemX;
        itemArray[i].textItemY = itemArray[i].itemY + 50;
        itemArray[i].textItemHSpeed = itemArray[i].itemHSpeed;
        itemArray[i].textItemVSpeed = itemArray[i].itemVSpeed;
    }
}


/**
 * This will be called every frame when the game3 is active
 */
function game3Draw() {

    //display the detectMenu
    detectMenu3();

    //if the state is passed or pause, only show the menu, game stoped
    if (isPaused === true || isPassed === true) {
        return;
    }

    //display the background3
    drawBackground3();

    //draw the starBoats
    starBoatDraw();


}

//draw the background2
function drawBackground3() {
    push();
    imageMode(CORNER);
    image(bgImg3, 0, 0, width, height);
    pop();
}

//set the detectMenu for the game
function detectMenu3() {

    // if you got 10 point, the passed state turn true, pass menu show up
    if (isPassed === true) {
        game2PassedMenu();
    }

    // if you press the esc, the paused the menu will show up
    if (isPaused === true) {
        game2PauseMenu();
    }
}

//draw the boat
function starBoatDraw() {
    //find the boat next position
    boatNextX = boatX + boatHspeed;
    boatNextY = boatY + boatVspeed;

    //if boat touch the canvas edge, boats bounce back
    if (boatNextX >= 50 && boatNextX <= 650) {
        boatX = boatNextX;
    } else {
        boatHspeed = boatHspeed * -0.1;
    }

    //if boat touch the canvas edge, boats bounce back
    if (boatNextY >= 50 && boatNextY <= 450) {
        boatY = boatNextY;
    } else {
        boatVspeed = boatVspeed * -0.1;
    }

    //draw the char3
    push();
    imageMode(CENTER);
    image(char3, boatX, boatY, 100, 100);
    pop();
}

/**
 * This will be called whenever a key is pressed while the red variation is active
 */
function redKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the red variation is active
 */
function redMousePressed() {

}