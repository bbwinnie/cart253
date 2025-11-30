/**
 * This file contains the code to run *only* the game1 part of the program.
 * Note how it has its own draw, game1Draw(), and its own keyPressed, blueKeyPressed().
 */
let starX;
let starY;
let starVSpeed;
let textWStarX;
let textWStarY;
let textWStarVSpeed;
let starArray;
let stars;

// set the background img size and position
let imgBG = {
    x: 350,
    y: 250,
    w: 700,
    h: 500
}

//set the chart img position and size
let char1p = {
    y: 400,
    size: 200
}

//set the score text , emoji, position and size
let scoreText = {
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
    size: 20,
}

//set the passed menu text, position ,color and size
let passedMenuP = {
    text: {
        fill: "#91c7faff",
        t: 'Congrats! \n You find the magic basket! \n Would you like to continue?',
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

//set the img size and position 
let imgYes = {
    x: 250,
    x2: 450,
    y: 300,
    w: 100,
    h: 50
}

//set the pause menu text and position 
let pauseP = {
    words: {
        t: 'Do you want to give up?',
        y: 180
    },
    dis: {
        t: 'Click the button below \n Press "Esc" or "Enter"',
        y: 260
    }
}

// perload the image
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
 * This will be called every frame when the game1Draw
 */
function game1Draw() {

    //draw the detectMenu
    detectMenu();

    //if the state is passed or pause, only show the menu, game stoped
    if (isPaused === true || isPassed === true) {
        return;
    }

    //draw the background and charact
    push();
    imageMode(CENTER);
    image(bgImg1, imgBG.x, imgBG.y, imgBG.w, imgBG.h);
    image(char1, mouseX, char1p.y, char1p.size, char1p.size);
    pop();

    //display the star
    starDraw();

    //display the sentence once you got score
    starmanwords();

    //called the star count system
    starCatchCount();

    //display the score
    game1CountBoardDraw();

}

//set the detectMenu for the game
function detectMenu() {

    // if you got 10 point, the passed state turn true, pass menu show up.
    if (isPassed === true) {
        game1PassedMenu();
    }

    // if you press the esc, the paused the menu will show up
    if (isPaused === true) {
        game1PauseMenu();
    }
}


//Draw the star 
function starDraw() {

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

}

//set the Score system
function game1CountBoardDraw() {

    //set the score text
    push();
    textFont(myFont);
    textSize(scoreText.size);
    fill(tittleP.fill);
    textAlign(LEFT, CENTER);
    text(scoreText.word.text + starCount, scoreText.word.x, scoreText.word.y);
    pop();

    //set the score emoji
    push();
    textSize(scoreText.size);
    textAlign(LEFT, CENTER);
    textFont("sans-serif");
    text(scoreText.emoji.text, scoreText.emoji.x, scoreText.emoji.y);
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

    //set the font size and color for the text
    textFont(myFont);
    textSize(scoreText.size);
    fill(tittleP.fill);
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

}

//when you got 10 star, passed menu show up 
function game1PassedMenu() {
    if (isPassed === true) {
        drawPassed();
    }
}


//set the passed Menu
function drawPassed() {

    //set the background
    push();
    imageMode(CENTER);
    image(textBg, width / 2, height / 2 + 25, 600, 650);
    image(passedCheckYes, width / 2 - 100, height / 2 + 50, 100, 50);
    image(passedCheckNo, width / 2 + 100, height / 2 + 50, 100, 50);
    pop();

    //set the text
    push();
    textFont(myFont);
    textSize(scoreText.size);
    fill(passedMenuP.text.fill);
    textAlign(CENTER, CENTER);
    text(passedMenuP.text.t, passedMenuP.text.x, passedMenuP.text.y);
    pop();

    //set the description
    push();
    textFont(myFont);
    fill(passedMenuP.description.fill);
    textAlign(CENTER, CENTER);
    textSize(passedMenuP.description.size);
    text(passedMenuP.description.t, passedMenuP.text.x, passedMenuP.description.y);
    pop();

}

//display the pause Menu
function game1PauseMenu() {

    //if paused is true show the pause menu
    if (isPaused === true) {
        drawPause();
    }

}


//draw the pause Menu
function drawPause() {

    // draw the background and button of the menu
    push();
    imageMode(CENTER);
    image(textBg, width / 2, height / 2 + 25, 600, 650);
    image(pauseCheckYes, imgYes.x, imgYes.y, imgYes.w, imgYes.h);
    image(pauseCheckNo, imgYes.x2, imgYes.y, imgYes.w, imgYes.h);
    pop();

    //draw the text for the menu
    push();
    textFont(myFont);
    textSize(scoreText.size);
    fill(passedMenuP.description.fill);
    textAlign(CENTER, CENTER);
    text(pauseP.words.t, passedMenuP.text.x, pauseP.words.y);
    pop();

    //draw the description for the menu
    push();
    textFont(myFont);
    fill(passedMenuP.description.fill);
    textAlign(CENTER, CENTER);
    textSize(passedMenuP.description.size);
    text(pauseP.dis.t, passedMenuP.text.x, pauseP.dis.y);
    pop();
}

//when the key pressed, state change
function game1KeyPressed(event) {

    //for passed menu
    if (isPassed === true) {
        //press Enter to continue
        if (event.keyCode === 13) {
            isPassed = false;
            state = "gamemenu";
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
}

//use mouse to execute the menu commands
function game1MousePressed() {
    //Check if the game is passed
    if (isPassed === true) {
        //check the distance between mouse and buttons
        distCheckY = dist(imgYes.x, imgYes.y, mouseX, mouseY);
        distCheckN = dist(imgYes.x2, imgYes.y, mouseX, mouseY);
        //if Mouse is on Yes button, go back to the main menu and reset the Pass check states
        if (distCheckY <= 50) {
            isPassed = false;
            state = "gamemenu";
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
    else {
        //if the game is paused, check the distance between mouse and buttons
        if (isPaused === true) {
            distCheckY = dist(imgYes.x, imgYes.y, mouseX, mouseY);
            distCheckN = dist(imgYes.x2, imgYes.y, mouseX, mouseY);
            //if Mouse is on Yes button, go back to the main menu
            if (distCheckY <= 50) {
                isPaused = false;
                state = "gamemenu";
            }
            //if Mouse is on No button, go back to the main menu, continue the game
            else if (distCheckN <= 50) {
                isPaused = false;
            }
        }
        return;
    }
}

