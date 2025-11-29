/**
 * This menu file contains the code to run *only* the menu part of the program.
 */

//set the text , color and position for the game
let title = {
    text: "Collect all the three magic item",
    color: "#ffcc00",
    size: 32,
    x: 350,
    y: 50
}

//set the 3 game's size, position, color and game text.
let game = {
    g1: {
        text: "Magic Basket",
        x: 700 / 6,
        y: 500 / 2,
    },
    g2: {
        text: "Star Wand",
        x: 700 / 6 * 3,
    },
    g3: {
        text: "Moon Boat",
        x: 700 / 6 * 5,
    },
    color: "#f8a01cff",
    size: 20,
    imgs: 150,
    textY: 335,
}

//draw the star and menu option
function gameMenuDraw() {

    //draw the background
    drawBgImage();

    //display the intro Text
    drawIntroText();

    //display the game select menu
    drawStar();
}

//draw the intro text
function drawIntroText() {
    push();
    textFont(myFont);
    textSize(title.size);
    fill(title.color)
    textAlign(CENTER, CENTER);
    text(title.text, title.x, title.y);
    pop();
}

//draw the game select menu
function drawStar() {
    push();
    textSize(game.size);
    fill(game.color);
    textFont(myFont);
    textAlign(CENTER, CENTER);
    imageMode(CENTER);
    //1st Game Left 
    image(game1BG, game.g1.x, game.g1.y, game.imgs, game.imgs);
    text(game.g1.text, game.g1.x, game.textY);
    //2nd Game Middle
    image(game2BG, game.g2.x, game.g1.y, game.imgs, game.imgs);
    text(game.g2.text, game.g2.x, game.textY);
    //3rd Game Right
    image(game3BG, game.g3.x, game.g1.y, game.imgs, game.imgs);
    text(game.g3.text, game.g3.x, game.textY);
    pop();
}

//set the game selection, when you click the star, the game state will change, you will get in to the game.
function gameSelectMousePressed() {

    //get the distance from mouseX and mouseY to the each star
    let d1 = dist(game.g1.x, game.g1.y, mouseX, mouseY);
    let d2 = dist(game.g2.x, game.g1.y, mouseX, mouseY);
    let d3 = dist(game.g3.x, game.g1.y, mouseX, mouseY);

    // if mousex and mousey on the first star, go to game 1
    if (d1 <= 240 / 2) {
        game1Setup();
        state = "game1";
    }

    // if mousex and mousey on the secound star, go to game 2
    else if (d2 <= 240 / 2) {
        redSetup();
        state = "game2";
    }

    // if mousex and mousey on the third star, go to game 3
    else if (d3 <= 240 / 2) {
        yellowSetup();
        state = "game3";
    }
    else {
        return;
    }
}