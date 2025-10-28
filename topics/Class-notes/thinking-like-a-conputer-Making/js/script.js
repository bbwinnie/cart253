/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let gameState = "start"

let score = 0;

let timer = {
    startTime: 0,//set everthing to 0 
    timePassed: 0,//set everthing to 0 
    timeInterval: 10000
}

let finishState = "none";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
    background(0);
    setTimeout(startTheGame, 5000); // can not put it in to draw, beacuse every draw it will call out. put it in setup, because we want it run only one time. 
}

// event handler for timer
function startTheGame() {
    gameState = "play"
    //setTimeout(endTheGame, 10000); 
}

// function endTheGame() {
//     gameState = "end"
// }


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    // console.log(millis()); ---- tell you the time once you start program, we can use millis to set the timer. 
    // start=5000 gameclock = millis - 5000. 

    if (gameState == "start") {
        startScreen();
    }

    else if (gameState === "play") {
        gameScreen();
        // displayScore();  this is not wrong, but make it more since, we need put it in to gameScreen.
    }

    else if (gameState === "end") {
        endScreen();
    }

    // startScreen(); ---- becasue of draw we keep going into startscreen and gameScreen(back and forth)



}

function startScreen() {
    background("#e38d8dff");
    timer.startTime = millis();
}

function gameScreen() {
    console.log("in game screen");
    background("#e7ea80ff");
    displayRect();
    displayScore();// whatwever something on the bottom will come on the top of screen.
    displayTimer();
    //console.log(timer.startTime);
    timer.timePassed = millis() - timer.startTime;
    console.log(timer.timePassed);
    if (timer.timePassed > timer.timeInterval) {
        gameState = "end"
        if (score >= 10) {
            finishState = "win"
        }
        else {
            finishState = "lose"
        }
    }


}

function endScreen() {
    background("#8dcde3ff");
}

function mousePressed() {
    //gameState = "play"

    if (gameState === "play") {
        //we want the mouse Click only working in my gameScreen. 
        if (mouseX < width / 3) {
            score++; //once you click the board, the score will add by 1
        }
        else {
            score--;
        }

    }
}

function displayRect() {
    push();
    fill(255);
    rect(0, 0, width / 3, height);
    pop();
}

function displayScore() {
    push();
    textSize(24);
    fill(255);
    text(score, width - 150, 50);
    pop();
}

function displayTimer() {
    push();
    textSize(24);
    fill(255);
    text(10 - floor(timer.timePassed / 1000), width - 150, 120); //divid by 1000 to make the time as sec. or using the floor to cutting down the dicimal. 
    // or if you want it count start from 10, you can do " 10 - " 或者用round(n, [decimals])。 
    pop();
}


