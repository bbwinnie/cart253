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
let starCount;
let MoodsList;
let MoodWords;
let MoodCategory;
let manwords;

function preloadGame1() {
    char1 = loadImage("assets/images/char1.gif");
    bgImg1 = loadImage("assets/images/background1.jpeg");
    star1 = loadImage("assets/images/star.gif");
    MoodsList = loadJSON("assets/JSON/moods.json");
}
/**
 * This will be called just before the blue variation starts
 */
function game1Setup() {
    starArray = [];
    stars = 5;
    MoodCategory = [];
    for (let i = 0; i < stars; i++) {
        starArray[i] = {};
        starArray[i].starX = random(50, 650);
        starArray[i].starY = random(-100, -50);
        starArray[i].starVSpeed = random(1, 5);
        textFont(myFont);
        textSize(20);
        textAlign(CENTER, CENTER);
        starArray[i].MoodWords = random(MoodsList.moods);
        MoodCategory[i] = MoodsList.positive.includes(starArray[i].MoodWords);
        starArray[i].textWStarX = starArray[i].starX;
        starArray[i].textWStarY = starArray[i].starY + 50;
        starArray[i].textWStarVSpeed = starArray[i].starVSpeed;
    }
    starCount = 0;
}

/**
 * This will be called every frame when the blue variation is active
 */
function game1Draw() {

    imageMode(CENTER);
    image(bgImg1, 350, 250, 700, 500);
    image(char1, mouseX, 400, 200, 200);

    push();
    textFont(myFont);
    textSize(20);
    fill("#ffcc00");
    textAlign(LEFT, CENTER);
    text("Starman Caught: " + starCount, 25, 50);
    pop();

    push();
    textSize(20);
    textAlign(LEFT, CENTER);
    textFont("sans-serif");
    text("⭐", 225, 52); //
    pop();

    starDraw();
    starCatchCount()
    starmanwords()

}

function starDraw() {
    push();
    imageMode(CENTER);
    for (let i = 0; i < stars; i++) {
        image(star1, starArray[i].starX, starArray[i].starY, 150, 150);
        if (MoodCategory[i] === true) {
            fill("#ffcc00");
            text(starArray[i].MoodWords, starArray[i].textWStarX, starArray[i].textWStarY);
        }
        else {
            fill("#e70909ff");
            text(starArray[i].MoodWords, starArray[i].textWStarX, starArray[i].textWStarY);
        }
        if (starArray[i].starY <= 600) {
            starArray[i].starY += starArray[i].starVSpeed;
            starArray[i].textWStarY += starArray[i].textWStarVSpeed;
        }
        else {
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

function starmanwords() {
    push();
    textFont(myFont);
    textSize(20);
    fill("#ffcc00");
    textAlign(CENTER, CENTER);
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

/**
 * This will be called whenever a key is pressed while the blue variation is active
 */
function game1KeyPressed(event) {
    if (event.keyCode === 27) {
        state = "gamemenu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the blue variation is active
 */
function game1MousePressed() {

}