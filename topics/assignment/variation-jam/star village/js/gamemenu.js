/**
 * This menu file contains the code to run *only* the menu part of the program.
 * Note how it has its own draw, menuDraw(), and its own keyPressed, menuKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

let title = "Click any star to start";
let firstGame = "Lightcatcher Basket";
let secondGame = "Star Wand";
let thirdGame = "Moon Boat";

function gameMenuDraw() {
    push();
    background(bgImg);
    textFont(myFont);
    textSize(32);
    fill("#ffcc00")
    textAlign(CENTER, CENTER);
    text(title, width / 2, 50);

    //Game Select Menu
    textSize(20);
    fill("#080808ff");
    imageMode(CENTER);
    //1st Game Left
    image(game1BG, width / 6, height / 2, 240, 240);
    text(firstGame, width / 6, height / 4 * 3);
    //2nd Game Middle
    image(game2BG, width / 6 * 3, height / 2, 240, 240);
    text(secondGame, width / 6 * 3, height / 4 * 3);
    //3rd Game Right
    image(game3BG, width / 6 * 5, height / 2, 240, 240);
    text(thirdGame, width / 6 * 5, height / 4 * 3);

    pop();
}

function gamelSelectMousePressed() {
    let xImg1 = width / 6;
    let xImg2 = width / 6 * 3;
    let xImg3 = width / 6 * 5;
    let yImg = height / 2;
    let xWidth = 240 / 6;
    let yHeight = 240 / 6;

    if (mouseX >= xImg1 - xWidth && mouseX <= xImg1 + xWidth && mouseY >= yImg - yHeight && mouseY <= yImg + yHeight) {
        game1Setup();
        state = "game1";
    }
    else if (mouseX >= xImg2 - xWidth && mouseX <= xImg2 + xWidth && mouseY >= yImg - yHeight && mouseY <= yImg + yHeight) {
        redSetup();
        state = "game2";
    }
    else if (mouseX >= xImg3 - xWidth && mouseX <= xImg3 + xWidth && mouseY >= yImg - yHeight && mouseY <= yImg + yHeight) {
        yellowSetup();
        state = "game3";
    }
    else {
        return;
    }
}