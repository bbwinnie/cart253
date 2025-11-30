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
let rainCount;
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
let HitPauseTimer;

//set the boat size fillcolor and text
let boatsP = {
    fill: "#741717ff",
    text: 'I Cant Move!!!',
    size: 20
}

//set the score text , emoji, position and size
let scoreText3 = {
    fill: "#ffcc00",
    word: {
        text: "Star Caught: ",
        x: 25,
        y: 50
    },
    emoji: {
        text: "⭐",
        x: 180,
        y: 52
    },
    dis: {
        text: "Run From the Moody Clouds!",
        x: 350,
        y: 10,
    },
    size: 20,
}


//set the img size and position 
let imgYes3 = {
    x: 250,
    x2: 450,
    y: 300,
    w: 100,
    h: 50
}

//set the pause menu text and position 
let pauseP3 = {
    words: {
        t: 'Do you want to give up?',
        y: 180
    },
    dis: {
        t: 'Click the button below \n Press "Esc" or "Enter"',
        y: 260
    }
}

//set the passed menu text, position ,color and size
let passedMenuP3 = {
    text: {
        fill: "#91c7faff",
        b: 'Congrats! \n You find the moon boat. \n Would you like to continue?',
        x: 350,
        y: 180
    },
    description: {
        fill: "#741717ff",
        t: 'Click the button \n Press "Esc" or "Enter"',
        y: 265,
        size: 15
    },
}



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
    itemImages = [bStar, rStar, yStar];
    itemArray = [];
    itemCount = 5;

    // emotion words
    MoodWords = '';

    //boats hit the rain timer
    HitPauseTimer = 0;

    //Count the number of rains
    rainCount = 3;

    //preset the value of item
    for (let i = 0; i < itemCount; i++) {

        //ctreat random item at random position and random speed total 5 item
        itemArray[i] = {};

        //The minimum number of rains is 3
        if (rainCount > 0) {
            itemArray[i].itemImg = rain;
            rainCount--;
        }
        else {
            itemArray[i].itemImg = random(itemImages);
        }
        itemArray[i].itemX = 800;
        itemArray[i].itemY = random(50, 450);
        itemArray[i].itemHSpeed = random(-3, -5);
        itemArray[i].itemVSpeed = (random(-5, -3), random(3, 5));
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

    //draw the socring system
    game3CountBoardDraw();
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
        game3PassedMenu();
    }

    // if you press the esc, the paused the menu will show up
    if (isPaused === true) {
        game3PauseMenu();
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

    //if boats hit the rain item, timer start crount
    if (HitPauseTimer > 0) {
        textFont(myFont);
        textSize(boatsP.size);
        fill(boatsP.fill);
        text(boatsP.text, boatX, boatY - 75);
    }
}

//draw the items(star and rain), touch the star +1 score , touch the rain -1 score and boat stop 2 sec
function itemDraw() {
    // set the image and font
    imageMode(CENTER);
    textFont(myFont);
    textSize(20);
    textAlign(CENTER, CENTER);

    //draw the random items at random position, total 5 items 
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
            itemArray[i].textItemVSpeed = itemArray[i].itemVSpeed;
            itemArray[i].itemVSpeedTimer = 120;
        }

        // move the text and item
        itemArray[i].itemX += itemArray[i].itemHSpeed;
        itemArray[i].itemY += itemArray[i].itemVSpeed;
        itemArray[i].textItemX += itemArray[i].textItemHSpeed;
        itemArray[i].textItemY += itemArray[i].textItemVSpeed;

        // if the item touch the border change the vertical speed 
        if (itemArray[i].itemY < 50 || itemArray[i].itemY > 450) {
            itemArray[i].itemVSpeed = -1 * itemArray[i].itemVSpeed;
            itemArray[i].textItemVSpeed = itemArray[i].itemVSpeed;
        }

        // if item went out of canvas, reset the item
        if (itemArray[i].itemX <= 0) {

            //rain number minus and Reset Image
            if (itemArray[i].itemImg === rain) {
                rainCount++;
            }
            //The minimum number of rains is 3
            if (rainCount > 0) {
                itemArray[i].itemImg = rain;
                rainCount--;
            }
            else {
                itemArray[i].itemImg = random(itemImages);
            }
            itemArray[i].itemX = 800;
            itemArray[i].itemHSpeed = random(-3, -5);
            itemArray[i].itemVSpeed = (random(-5, -3), random(3, 5));
            itemArray[i].itemVSpeedTimer = 120;
            // also reset the text
            itemArray[i].textItemX = itemArray[i].itemX;
            itemArray[i].textItemY = itemArray[i].itemY + 25;
            itemArray[i].textItemHSpeed = itemArray[i].itemHSpeed;
            itemArray[i].textItemVSpeed = itemArray[i].itemVSpeed;

            if (itemArray[i].itemImg === rain) {
                itemArray[i].MoodWords = random(MoodsList.negative);
                itemArray[i].textItemY = itemArray[i].itemY + 50;
            }
            else {
                itemArray[i].MoodWords = random(MoodsList.positive);
            }
        }

        //check the distance between boat and items
        itemArray[i].BoatItemDist = dist(boatX, boatY, itemArray[i].itemX, itemArray[i].itemY);

        //if boat touch the item
        if (itemArray[i].BoatItemDist <= 50) {
            //if boat touch the rain
            if (itemArray[i].itemImg === rain) {
                //score - 1
                if (starCount > 0) {
                    starCount--;
                }
                //boat paused set the timer to 2 secs
                HitPauseTimer = 120;

                boatHspeed = 0;
                boatVspeed = 0;


                //rain number minus and Reset Image
                if (itemArray[i].itemImg === rain) {
                    rainCount++;
                }
                //The minimum number of rains is 3
                if (rainCount > 0) {
                    itemArray[i].itemImg = rain;
                    rainCount--;
                }
                else {
                    itemArray[i].itemImg = random(itemImages);
                }

                //reset the random item
                itemArray[i].itemX = 800;
                itemArray[i].itemY = random(50, 450);
                itemArray[i].itemHSpeed = random(-3, -5);
                itemArray[i].itemVSpeed = (random(-5, -3), random(3, 5));
                itemArray[i].itemVSpeedTimer = 120;

                //reset the random text
                itemArray[i].textItemX = itemArray[i].itemX;
                itemArray[i].textItemY = itemArray[i].itemY + 25;
                itemArray[i].textItemHSpeed = itemArray[i].itemHSpeed;
                itemArray[i].textItemVSpeed = itemArray[i].itemVSpeed;
                if (itemArray[i].itemImg === rain) {
                    itemArray[i].MoodWords = random(MoodsList.negative);
                    itemArray[i].textItemY = itemArray[i].itemY + 50;
                }
                else {
                    itemArray[i].MoodWords = random(MoodsList.positive);
                }
            }

            //if catch the star, score +1
            else {
                starCount++;

                //reset the item
                itemArray[i].itemX = 800;
                itemArray[i].itemY = random(50, 450);
                itemArray[i].itemHSpeed = random(-3, -5);
                itemArray[i].itemVSpeed = (random(-5, -3), random(3, 5));
                itemArray[i].itemVSpeedTimer = 120;
                //rest the words
                itemArray[i].textItemX = itemArray[i].itemX;
                itemArray[i].textItemY = itemArray[i].itemY + 25;
                itemArray[i].textItemHSpeed = itemArray[i].itemHSpeed;
                itemArray[i].textItemVSpeed = itemArray[i].itemVSpeed;
                itemArray[i].itemImg = random(itemImages);
                if (itemArray[i].itemImg === rain) {
                    itemArray[i].MoodWords = random(MoodsList.negative);
                    itemArray[i].textItemY = itemArray[i].itemY + 50;
                }
                else {
                    itemArray[i].MoodWords = random(MoodsList.positive);
                }

                //if got 10 point, game ends
                if (starCount === 1) {
                    isPassed = true;

                    // only will crount the win once
                    if (game3PassTime < 1) {
                        gamePassedCount++;
                        game3PassTime++;
                    }
                }
            }
        }
    }
    HitPauseTimer--;
}

//draw the score system
function game3CountBoardDraw() {

    //draw the text
    push();
    textFont(myFont);
    textSize(scoreText3.size);
    fill(scoreText3.fill);
    textAlign(LEFT, CENTER);
    text(scoreText3.word.text + starCount, scoreText3.word.x, scoreText3.word.y);
    pop();

    //draw the emoji
    push();
    textSize(scoreText3.size);
    textAlign(LEFT, CENTER);
    textFont("sans-serif");
    text(scoreText3.emoji.text, scoreText3.emoji.x, scoreText2.emoji.y);
    pop();

    //draw the intro
    push();
    textFont(myFont);
    textSize(scoreText3.size);
    fill(scoreText3.fill);
    textAlign(CENTER, CENTER);
    text(scoreText3.dis.text, scoreText3.dis.x, scoreText3.dis.y);
    pop();
}


//when you save 10 star, passed menu show up 
function game3PassedMenu() {

    if (isPassed === true) {

        //draw the passed Menu3
        drawPassedMenu3();
    }
}

function drawPassedMenu3() {

    //set the background and button
    push();
    imageMode(CENTER);
    image(textBg, width / 2, height / 2 + 25, 600, 650);
    image(passedCheckYes, width / 2 - 100, height / 2 + 50, 100, 50);
    image(passedCheckNo, width / 2 + 100, height / 2 + 50, 100, 50);
    pop();

    //set the text
    push();
    textFont(myFont);
    textSize(scoreText3.size);
    fill(passedMenuP3.text.fill);
    textAlign(CENTER, CENTER);
    text(passedMenuP3.text.b, passedMenuP3.text.x, passedMenuP3.text.y);
    pop();

    //set the description
    push();
    textFont(myFont);
    textSize(passedMenuP3.description.size);
    fill(passedMenuP3.description.fill);
    text(passedMenuP3.description.t, passedMenuP3.text.x, passedMenuP3.description.y);
    pop();
}

//display the pause Menu
function game3PauseMenu() {

    if (isPaused === true) {
        //draw the pauseMenu3
        drawPauseMenu3();
    }
}

//draw the pauseMenu3
function drawPauseMenu3() {

    //draw the image
    push();
    imageMode(CENTER);
    image(textBg, width / 2, height / 2 + 25, 600, 650);
    image(pauseCheckYes, imgYes3.x, imgYes3.y, imgYes3.w, imgYes3.h);
    image(pauseCheckNo, imgYes3.x2, imgYes3.y, imgYes3.w, imgYes3.h);
    pop();

    //draw the text
    push();
    textFont(myFont);
    textSize(scoreText3.size);
    fill(passedMenuP3.description.fill);
    textAlign(CENTER, CENTER);
    text(pauseP3.words.t, passedMenuP3.text.x, pauseP3.words.y);
    pop();


    //draw the dis
    push();
    textFont(myFont);
    textSize(passedMenuP3.description.size);
    fill(passedMenuP3.description.fill);
    textAlign(CENTER, CENTER);
    text(pauseP3.dis.t, passedMenuP3.text.x, pauseP3.dis.y);
    pop();
}

/**
 * This will be called whenever a key is pressed while the game3 is active
 */
function game3KeyPressed(event) {

    //for passed menu
    if (isPassed === true) {
        //press Enter to continue
        if (event.keyCode === 13) {
            isPassed = false;
            state = "passmenu";
        }
        // press Ese to go back to the main menu
        else if (event.keyCode === 27) {
            isPassed = false;
            state = "gamemenu";
            if (gamePassedCount > 0) {
                gamePassedCount--;
            }
        }
    }

    //for pause menu 
    //press Ese to the pause menu
    if (event.keyCode === 27) {
        // if paused menu is not opened, opened the pause menu
        if (isPaused === false) {
            isPaused = true;
        }
        //else do nothing
        else {
            isPaused = false;
        }
    }
    //press Enter return to main menu
    if (event.keyCode === 13 && isPaused === true) {
        isPaused = false;
        state = "gamemenu";
    }

    // if boats hit the rains, boats stoped
    if (HitPauseTimer > 0) {
        return;
    }

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


//use mouse to execute the menu commands
function game3MousePressed() {

    //Check if the game is passed
    if (isPassed === true) {

        //check the distance between mouse and buttons
        distCheckY = dist(width / 2 - 100, height / 2 + 50, mouseX, mouseY);
        distCheckN = dist(width / 2 + 100, height / 2 + 50, mouseX, mouseY);
        //if Mouse is on Yes button, go back to the main menu and reset the Pass check states
        if (distCheckY <= 50) {
            isPassed = false;
            state = "passmenu";
        }
        //if Mouse is on No button, go back to the main menu without counting the game pass.
        else if (distCheckN <= 50) {
            isPassed = false;
            state = "gamemenu";
            if (gamePassedCount > 0) {
                gamePassedCount--;
            }
        }
        return;
    }
    //Check if the game is paused
    else if (isPaused === true) {
        //if the game is paused, check the distance between mouse and buttons
        distCheckY = dist(width / 2 - 100, height / 2 + 50, mouseX, mouseY);
        distCheckN = dist(width / 2 + 100, height / 2 + 50, mouseX, mouseY);
        //if Mouse is on Yes button, go back to the main menu
        if (distCheckY <= 50) {
            isPaused = false;
            state = "gamemenu";
        }
        //if Mouse is on No button, go back to the main menu, continue the game
        else if (distCheckN <= 50) {
            isPaused = false;
        }
        return;
    }

}