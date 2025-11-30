/**
 * This file contains the code to run *only* the game2 part of the program.
 * Note how it has its own draw, greenDraw(), and its own keyPressed, greenKeyPressed().
 * there was two challenge, The first one is how to make the stars shoot out as you click the mouse. the secoud one is my star jam gif
 * only can show on first broken jar.
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

//set the score text , emoji, position and size
let scoreText2 = {
    fill: "#ffcc00",
    word: {
        text: "Saved Star: ",
        x: 25,
        y: 50
    },
    emoji: {
        text: "⭐",
        x: 165,
        y: 52
    },
    dis: {
        text: "Break the jar to save good mood star!",
        x: 350,
        y: 10,
    },
    size: 20,
}

//set the passed menu text, position ,color and size
let passedMenuP2 = {
    text: {
        fill: "#91c7faff",
        t: 'Congrats! \n You find the star wand \n Would you like to continue?',
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
let imgYes2 = {
    x: 250,
    x2: 450,
    y: 300,
    w: 100,
    h: 50
}

//set the pause menu text and position 
let pauseP2 = {
    words: {
        t: 'Do you want to give up?',
        y: 180
    },
    dis: {
        t: 'Click the button below \n Press "Esc" or "Enter"',
        y: 260
    }
}


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

    //display the detectMenu
    detectMenu2();

    //if the state is passed or pause, only show the menu, game stoped
    if (isPaused === true || isPassed === true) {
        return;
    }

    //display the background
    drawBackground2();

    //display the starJar
    starJarDraw();

    //display the star wand
    WandStarsMovingDraw();

    //display the count board
    game2CountBoardDraw();

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

        //the orginal jars are not broken
        if (starJarArray[i].isBroken === false) {
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

            // wand star setting
            for (let j = 0; j < wandStarArray.length; j++) {
                // distance between star wand and star jar
                lenStoJ = dist(wandStarArray[j].wandStarX, wandStarArray[j].wandStarY, starJarArray[i].starJarX, starJarArray[i].starJarY);
                //if wand star hit the jar, add scoure
                if (lenStoJ <= 50) {
                    starJarArray[i].isBroken = true;
                    starJarArray[i].breakTimer = 60;
                    starJarArray[i].jarImg = starJar2;
                    //delet the star that hit the jar
                    wandStarArray.splice(j, 1);
                    wandStarCount--;

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

                    // if hits 10 star, game end
                    if (starCount === 10) {
                        isPassed = true;

                        // the game can only play once.
                        if (game2PassTime < 1) {
                            gamePassedCount++;
                            game2PassTime++;
                        }
                    }
                    break;
                }
            }
        }
        else {
            // if star jar broken, timer star count
            starJarArray[i].breakTimer--;
            if (starJarArray[i].breakTimer <= 0) {
                // if count down over, reset the starjar
                starJarArray[i].starJarX = random(50, 650);
                starJarArray[i].starJarY = random(50, 400);
                starJarArray[i].starJarHSpeed = random([random(-3, -1), random(1, 3)]);
                starJarArray[i].starJarVSpeed = random([random(-3, -1), random(1, 3)]);
                // reset the emotion words
                starJarArray[i].MoodWords = random(MoodsList.moods);
                MoodCategory[i] = MoodsList.positive.includes(starJarArray[i].MoodWords);
                // reset the emotion words position and speed
                starJarArray[i].textWStarJarX = starJarArray[i].starJarX;
                starJarArray[i].textWStarJarY = starJarArray[i].starJarY + 50;
                starJarArray[i].textWStarJarHSpeed = starJarArray[i].starJarHSpeed;
                starJarArray[i].textWStarJarVSpeed = starJarArray[i].starJarVSpeed;
                // change the state back to orginal
                starJarArray[i].isBroken = false;
                starJarArray[i].breakTimer = 0;
                starJarArray[i].jarImg = starJar1;
                // reset the auto refresh timer 
                starJarArray[i].refreshTimer = 400;
            }
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

//draw the wand star
function wandStarDraw(wandStarX, wandStarY) {

    //draw the star
    push();
    noStroke();
    fill("#ffcc00");
    let angle = TWO_PI / 5;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = wandStarX + cos(a) * 12;
        let sy = wandStarY + sin(a) * 12;
        vertex(sx, sy);
        sx = wandStarX + cos(a + halfAngle) * 8;
        sy = wandStarY + sin(a + halfAngle) * 8;
        vertex(sx, sy);
    }
    endShape(CLOSE);
    pop();
}


//shoot the stars
function wandMagic() {
    // the canvas only can have 5 stars
    if (wandStarCount > 4) {
        return;
    }
    // if not, shoot a star
    else {

        //distance between orignal star.x and mouseX. This is a challenge for me to understand how to move star by using mouse coordinator. 
        dx = mouseX - wandStarX;
        dy = mouseY - wandStarY;

        //calculer the length between mouseX and orginal star.x
        lenMtoS = sqrt(dx * dx + dy * dy);

        //if the length is 0, cannot shoot the star, so i need give the value as 1
        if (lenMtoS === 0) {
            lenMtoS = 1;
        }

        //give wand star orginal speed and position
        wandStarArray[wandStarCount] = {};
        wandStarArray[wandStarCount].wandStarX = wandStarX;
        wandStarArray[wandStarCount].wandStarY = wandStarY;
        wandStarArray[wandStarCount].wandStarHSpeed = dx / lenMtoS * wandStarSpeed;
        wandStarArray[wandStarCount].wandStarVSpeed = dy / lenMtoS * wandStarSpeed;
        wandStarCount++;
    }
}

//move the wand star
function WandStarsMovingDraw() {

    //array for moving star
    for (let i = wandStarArray.length - 1; i >= 0; i--) {

        // move star 
        wandStarArray[i].wandStarX += wandStarArray[i].wandStarHSpeed;
        wandStarArray[i].wandStarY += wandStarArray[i].wandStarVSpeed;

        //draw the wand star
        wandStarDraw(wandStarArray[i].wandStarX, wandStarArray[i].wandStarY);

        // if star went out of screen , reset the star
        if (wandStarArray[i].wandStarX < 0 || wandStarArray[i].wandStarX > width ||
            wandStarArray[i].wandStarY < 0 || wandStarArray[i].wandStarY > height) {
            wandStarArray.splice(i, 1);
            wandStarCount--;
        }
    }
}

//set the Score system
function game2CountBoardDraw() {
    //set the star Catch Count
    push();
    textFont(myFont);
    textSize(scoreText2.size);
    fill(scoreText2.fill);
    textAlign(LEFT, CENTER);
    text(scoreText2.word.text + starCount, scoreText2.word.x, scoreText2.word.y);
    pop();

    //set the score emoji
    push();
    textSize(scoreText2.size);
    textAlign(LEFT, CENTER);
    textFont("sans-serif");
    text(scoreText2.emoji.text, scoreText2.emoji.x, scoreText2.emoji.y);
    pop();

    push();
    textFont(myFont);
    textSize(scoreText2.size);
    fill(scoreText2.fill);
    textAlign(CENTER, CENTER);
    text(scoreText2.dis.text, scoreText2.dis.x, scoreText2.dis.y);
    pop();
}

//when you save 10 star, passed menu show up 
function game2PassedMenu() {

    if (isPassed === true) {
        drawPassedMenu2();
    }
}


//set the passed Menu
function drawPassedMenu2() {

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
    textSize(scoreText2.size);
    fill(passedMenuP2.text.fill);
    textAlign(CENTER, CENTER);
    text(passedMenuP2.text.t, passedMenuP2.text.x, passedMenuP2.text.y);
    pop();

    //set the description
    push();
    textFont(myFont);
    textSize(passedMenuP2.description.size);
    fill(passedMenuP2.description.fill);
    textAlign(CENTER, CENTER);
    text(passedMenuP2.description.t, passedMenuP2.text.x, passedMenuP2.description.y);
    pop();

}

//display the pause Menu
function game2PauseMenu() {

    //if paused is true show the pause menu
    if (isPaused === true) {
        drawPauseMenu2();
    }
}

//draw the pause Menu
function drawPauseMenu2() {

    // draw the background and button of the menu
    push();
    imageMode(CENTER);
    image(textBg, width / 2, height / 2 + 25, 600, 650);
    image(pauseCheckYes, imgYes2.x, imgYes2.y, imgYes2.w, imgYes2.h);
    image(pauseCheckNo, imgYes2.x2, imgYes2.y, imgYes2.w, imgYes2.h);
    pop();

    //draw the text for the menu
    push();
    textFont(myFont);
    textSize(scoreText2.size);
    fill(passedMenuP2.description.fill);
    textAlign(CENTER, CENTER);
    text(pauseP2.words.t, passedMenuP2.text.x, pauseP2.words.y);
    pop();

    //draw the description for the menu
    push();
    textFont(myFont);
    textSize(passedMenuP.description.size);
    fill(passedMenuP2.description.fill);
    textAlign(CENTER, CENTER);
    text(pauseP2.words.t, passedMenuP2.text.x, pauseP2.dis.y);
    pop();
}

//when the key pressed, state change 
function game2KeyPressed(event) {

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
function game2MousePressed() {
    //Check if the game is passed
    if (isPassed === true) {

        //check the distance between mouse and buttons
        distCheckY = dist(width / 2 - 100, height / 2 + 50, mouseX, mouseY);
        distCheckN = dist(width / 2 + 100, height / 2 + 50, mouseX, mouseY);
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
    if (isPaused === true) {
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
    //when the mouse pressed,shoot the star
    wandMagic();
}