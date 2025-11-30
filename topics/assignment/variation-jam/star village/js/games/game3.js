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
let BoatItemDist;


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
            itemArray[i].textItemY = itemArray[i].itemY + 50;
        }
        else {
            itemArray[i].MoodWords = random(MoodsList.positive);
        }

        //keep the same speed and position of words as item
        itemArray[i].textItemX = itemArray[i].itemX;
        itemArray[i].textItemY = itemArray[i].itemY + 25;
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

    //draw the item
    itemDraw();


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

//draw the items(star and rain), touch the star +1 score , touch the rain -1 score
function itemDraw() {
    // set the image and font
    imageMode(CENTER);
    textFont(myFont);
    textSize(20);
    textAlign(CENTER, CENTER);

    //draw the random items at random position, total 3 items 
    for (let i = 0; i < itemCount; i++) {

        //Draw a random item
        image(itemArray[i].itemImg, itemArray[i].itemX, itemArray[i].itemY, 100, 100);

        //if item is rain, emotion words become red 
        if (itemArray[i].itemImg === rain) {
            fill("#e70909ff");
        } else {
            fill("#ffcc00");
        }
        //draw the random text 
        text(itemArray[i].MoodWords, itemArray[i].textItemX, itemArray[i].textItemY);
        itemArray[i].itemVSpeedTimer--;

        //keep the current speed of items ecah 2 secs. make sure item move smoothly
        if (itemArray[i].itemVSpeedTimer === 0) {
            itemArray[i].itemVSpeed = random(-2, 2);
            itemArray[i].textItemVSpeed = itemArray[i].itemVSpeed;
            itemArray[i].itemVSpeedTimer = 120;
        }

        // move the text and item
        itemArray[i].itemX += itemArray[i].itemHSpeed;
        itemArray[i].itemY += itemArray[i].itemVSpeed;
        itemArray[i].textItemX += itemArray[i].textItemHSpeed;
        itemArray[i].textItemY += itemArray[i].textItemVSpeed;

        // if the item touch the border change the vertical speed 
        if (itemArray[i].itemY <= 50 || itemArray[i].itemY >= 450) {
            itemArray[i].itemVSpeed = -1 * itemArray[i].itemVSpeed;
            itemArray[i].textItemVSpeed = itemArray[i].itemVSpeed;
        }

        // if item went out of canvas, reset the item
        if (itemArray[i].itemX <= 0) {
            itemArray[i].itemX = 800;
            itemArray[i].itemHSpeed = random(-1, -2);
            itemArray[i].itemVSpeedTimer = 120;
            // also reset the text
            itemArray[i].textItemX = itemArray[i].itemX;
            itemArray[i].textItemY = itemArray[i].itemY + 25;
            itemArray[i].textItemHSpeed = itemArray[i].itemHSpeed;
            itemArray[i].itemImg = random(itemImages);
            if (itemArray[i].itemImg === rain) {
                itemArray[i].MoodWords = random(MoodsList.negative);
                itemArray[i].textItemY = itemArray[i].itemY + 50;
            }
            else {
                itemArray[i].MoodWords = random(MoodsList.positive);
            }

        }

    }
    pop();
}

/**
 * This will be called whenever a key is pressed while the red variation is active
 */
function game3KeyPressed(event) {

    ///when the key pressed boats moves
    switch (event.keyCode) {
        case 37:
            boatHspeed = -5;
            break;
        case 38:
            boatVspeed = -5;
            break;
        case 39:
            boatHspeed = 5;
            break;
        case 40:
            boatVspeed = 5;
            break;
    }
}

//when the key released boats stop
function game3KeyReleased(event) {
    switch (event.keyCode) {
        case 37:
            boatHspeed = 0;
            break;
        case 39:
            boatHspeed = 0;
            break;
        case 38:
            boatVspeed = 0;
            break;
        case 40:
            boatVspeed = 0;
            break;
    }
}


/**
 * This will be called whenever the mouse is pressed while the red variation is active
 */
function game3MousePressed() {

}