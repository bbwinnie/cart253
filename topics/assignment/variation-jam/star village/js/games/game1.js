/**
 * This file contains the code to run *only* the blue variation part of the program.
 * Note how it has its own draw, game1Draw(), and its own keyPressed, blueKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */
let starX;
let starY;
let starVSpeed;
let textWStarX;
let textWStarY;
let textWStarVSpeed;
let starArray;
let stars;

function preloadGame1() {
    char1 = loadImage("assets/images/char1.gif");
    bgImg1 = loadImage("assets/images/background1.jpeg");
    star1 = loadImage("assets/images/star.gif");
    MoodsList = loadJSON("assets/JSON/moods.json");
    pauseCheckYes = loadImage("assets/images/yes.png");
    pauseCheckNo = loadImage("assets/images/no.png");
    passedCheckYes = loadImage("assets/images/yes.png");
    passedCheckNo = loadImage("assets/images/no.png");
}


/**
 * set the dault of value of star,emotion words and other details
 */
function game1Setup() {
    starArray = [];

    // total 5 stars at one times
    stars = 5;
    MoodCategory = [];
    MoodWords = '';
    distCheckY = 0;
    distCheckN = 0;
    MoodCategory = [];

    //the game will have 5 stars,each star will have random position and random emotion words.
    for (let i = 0; i < stars; i++) {
        starArray[i] = {};
        starArray[i].starX = random(50, 650);
        starArray[i].starY = random(-100, -50);
        starArray[i].starVSpeed = random(1, 5);
        textFont(myFont);
        textSize(20);
        textAlign(CENTER, CENTER);
        starArray[i].MoodWords = random(MoodsList.moods);
        //auto check if a random words inside the array positive the state is ture. otherwise is false
        MoodCategory[i] = MoodsList.positive.includes(starArray[i].MoodWords);
        starArray[i].textWStarX = starArray[i].starX;
        starArray[i].textWStarY = starArray[i].starY + 50;
        starArray[i].textWStarVSpeed = starArray[i].starVSpeed;
    }
    starCount = 0;
    isPaused = false;
    isPassed = false;
}

/**
 * This will be called every frame when the blue variation is active
 */
function game1Draw() {

    //dtaw the detectMenu
    detectMenu();

    //draw the background and charact
    imageMode(CENTER);
    image(bgImg1, 350, 250, 700, 500);
    image(char1, mouseX, 400, 200, 200);

    starDraw();

    starCatchCount();

    starmanwords();

    game1CountBoardDraw();

}

//set the detectMenu for the game
function detectMenu() {

    // if you got 10 point, the passed state turn true, pass menu show up.
    if (isPassed === true) {
        game1PassedMenu();
        return;
    }

    // if you press the esc, the paused the menu will show up
    if (isPaused === true) {
        game1PauseMenu();
        return;
    }
}


function starDraw() {
    push();
    imageMode(CENTER);

    //the game will have 5 stars,each star will have random position and random emotion words.
    for (let i = 0; i < stars; i++) {
        //draw the star imag
        image(star1, starArray[i].starX, starArray[i].starY, 150, 150);

        //if the words inside the array positive the words become yellow
        if (MoodCategory[i] === true) {
            fill("#ffcc00");
            text(starArray[i].MoodWords, starArray[i].textWStarX, starArray[i].textWStarY);
        }

        //if the words does not inside the array positive the words become red
        else {
            fill("#e70909ff");
            text(starArray[i].MoodWords, starArray[i].textWStarX, starArray[i].textWStarY);
        }

        // let the star falling down if the star inside screen
        if (starArray[i].starY <= 600) {
            starArray[i].starY += starArray[i].starVSpeed;
            starArray[i].textWStarY += starArray[i].textWStarVSpeed;
        }

        // if the star went out of the screen, it will reset on the top of the screen in the random position
        else {
            //new x and y position 
            starArray[i].starX = random(50, 650);
            starArray[i].starY = random(-100, -50);

            //new random speed
            starArray[i].starVSpeed = random(1, 5);

            //text follow the start position 
            starArray[i].textWStarX = starArray[i].starX;
            starArray[i].textWStarY = starArray[i].starY + 50;
            starArray[i].textWStarVSpeed = starArray[i].starVSpeed;

            //get a new emotion words for the start
            starArray[i].MoodWords = random(MoodsList.moods);

            //determine the emotion words is positive or not
            MoodCategory[i] = MoodsList.positive.includes(starArray[i].MoodWords);
        }
    }
    pop();
}

function starCatchCount() {
    for (let i = 0; i < stars; i++) {
        if (starArray[i].starY >= 320 && starArray[i].starY <= 350) {
            if (starArray[i].starX >= mouseX - 50 && starArray[i].starX <= mouseX + 50) {
                if (MoodCategory[i] === true) {
                    starCount++;
                }
                else {
                    if (starCount > 0) {
                        starCount--;
                    }
                    else {
                        starCount = 0;
                    }
                }
                starArray[i].starX = random(50, 650);
                starArray[i].starY = random(-100, -50);
                starArray[i].starVSpeed = random(1, 5);
                starArray[i].textWStarX = starArray[i].starX;
                starArray[i].textWStarY = starArray[i].starY + 50;
                starArray[i].textWStarVSpeed = starArray[i].starVSpeed;
                starArray[i].MoodWords = random(MoodsList.moods);
                MoodCategory[i] = MoodsList.positive.includes(starArray[i].MoodWords);
            }
        }
    }
}

//set the Score system
function game1CountBoardDraw() {
    //set the score text
    push();
    textFont(myFont);
    textSize(20);
    fill("#ffcc00");
    textAlign(LEFT, CENTER);
    text("Starman Caught: " + starCount, 25, 50);
    pop();

    //set the score emoji
    push();
    textSize(20);
    textAlign(LEFT, CENTER);
    textFont("sans-serif");
    text("⭐", 225, 52);
    pop();
}

//set the star Catch Count
function starCatchCount() {

    //check if each star has been catched
    for (let i = 0; i < stars; i++) {

        //check if the star has been catched inside the basket y position
        if (starArray[i].starY >= 320 && starArray[i].starY <= 350) {

            //check if the star has ben catched inside the basket x position
            if (starArray[i].starX >= mouseX - 50 && starArray[i].starX <= mouseX + 50) {

                // if the emotion state is positive (true) add 1 score
                if (MoodCategory[i] === true) {
                    starCount++;
                }

                // if the emotion state is nagetive (false) minus 1 score but the score will never below 0
                else {
                    if (starCount > 0) {
                        starCount--;
                    }
                    else {
                        starCount = 0;
                    }
                }

                // once the star been catched, will have a random new star with emotion words display
                starArray[i].starX = random(50, 650);
                starArray[i].starY = random(-100, -50);
                starArray[i].starVSpeed = random(1, 5);
                starArray[i].textWStarX = starArray[i].starX;
                starArray[i].textWStarY = starArray[i].starY + 50;
                starArray[i].textWStarVSpeed = starArray[i].starVSpeed;
                starArray[i].MoodWords = random(MoodsList.moods);
                MoodCategory[i] = MoodsList.positive.includes(starArray[i].MoodWords);
            }
        }
    }

    // if catch 10 star, game end.
    if (starCount === 10) {
        isPassed = true;

        // the game can only play once.
        if (game1PassTime < 1) {
            gamePassedCount++;
            game1PassTime++;
        }
    }
}

//display the encourage sentence
function starmanwords() {

    push();
    textFont(myFont);
    textSize(20);
    fill("#ffcc00");
    textAlign(CENTER, CENTER);

    //switch the sentence once the score got change
    switch (starCount) {
        case 1:
            text('“I think I’ve waited too long.”', mouseX, 320);
            break;
        case 2:
            text('“I can’t seem to do it right now.”', mouseX, 320);
            break;
        case 3:
            text('“I’m scared I’m not good enough.”', mouseX, 320);
            break;
        case 4:
            text('“One step at a time.”', mouseX, 320);
            break;
        case 5:
            text('“You’re not failing—you’re just buffering.”', mouseX, 320);
            break;
        case 6:
            text('“It’s okay if today feels heavy.”', mouseX, 320);
            break;
        case 7:
            text('“You’re doing enough, truly.”', mouseX, 320);
            break;
        case 8:
            text(' “It’s okay to be a little scrambled today. ”', mouseX, 320);
            break;
        case 9:
            text(' “You’re doing better than you think.', mouseX, 320);
            break;
        case 10:
            text('“The stars don’t shine all the time either—they take turns.”', mouseX, 320);
            break;
    }
    pop();
}
