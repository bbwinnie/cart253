/**
 * Frogfrogfrog
 * Pippin Barr
 * 
 * A game of catching flies with your frog-tongue
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Click to launch the tongue
 * - Catch flies
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";

let backgroundColor = "#87ceeb";

// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        sizeW: 240,
        sizeH: 170,
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    },
    // the frog left eyes have a position, size
    leftEye: {
        x: 280,
        y: 440,
        width: 30,
        height: 55,
    },
    // the frog right eyes have a position, size
    rightEye: {
        x: 360,
        y: 440,
        width: 30,
        height: 55,
    },
};

// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 200, // Will be random
    z: 0,
    size: 10,
    speed: 3,
    angle: 20,
    angle2: -20,
    wingW: 20,
    wingH: 5,
    color: {
        r: 0,
        g: 0,
        b: 0,
    },
    state: "free",// State can be: free and caught
    mode: "normal" // flymode can be : normal and bomb
};

//defuat the game state
let gameState = "start";

// froghead inside game screen
// has a position,color and size
let frogH = {
    fill: "#d3b64c",
    x: 320,
    y: 240,
    w: 240,
    h: 170
}

// forg eyes has a position,color,startpoint, endpoint and size.
let frogE = {
    fill: "#d3b64c",
    rightEarX: 370,
    leftEarX: 270,
    y: 185,
    w: 65,
    h: 100,
    arcStartP: 180,
    arcStopP: 0
}

// forg eyes ball has a position,color, rotate position, strokewidth, and size.
let frogEyes = {
    fill: "#000000ff",
    y: 162,
    w: 32,
    h: 38,
    rotateLeft: 15,
    rotateRight: 345,
    strokeWeight: 2.5,
    strokeColor: "#ffffffff"
}

//forg mouth has a position, color, size, arcstartPoint and arcEndPoint.
let frogMouth = {
    fill: "#f07979ff",
    x: 320,
    y: 190,
    w: 30,
    h: 150,
    arcStartP: 0,
    arcStopP: 180,
    arcRatio: 0.2
    // The default ratio equals to the quotient of the original width divided by height  0.2 = 30 / 150
}

//forg cheek has a position, color, and size.
let frogCheek = {
    fill: "#f7f8c3ff",
    leftX: 250,
    rightX: 390,
    y: 220,
    w: 70,
    h: 50,
}

//the line inside forg cheek has stokeWeight, position and color.
let frogCheekLine = {
    strokeWeight: 3,
    leftLX1: 275,
    RightLX1: 375,
    y1: 210,
    leftLx2: 260,
    rightlx2: 360,
    y2: 226,
    x: 375,
    y: 330,
    strokeColor: 0
}

//bomb has emojim, text size and text position.
let bombText = {
    text: "💣",
    textSize: 25,
    textSize2: 15,
    text2: "Press any key to see your spical dinner!😈",
    text3: "😈",
    x: 200,
    xL: 178,
    xR: 450,
    y: 20,
}


//defaut of font
let myFont;

// startText has text, fill, fontsize and position.
let startTextP = {
    text: "Press and hold the mouse to start your adventure!",
    fill: "#fcff37ff",
    fontSize: 25,
    x: 55,
    y: 400,
}

// set the defaut of timer, make game time will be 15sec.
let timer = {
    startTime: 0,//set everthing to 0 
    timePassed: 0,//set everthing to 0 
    timeInterval: 5000 // set the time to be 15secs.
}

// set the defaut of score is 0.
let score = 8;

// Score bar has position, color, and weight.
let scoreP = {
    y: 400,
    outLine: {
        fill: "#fff9a9ff",
        weight: 30,
        x1: 120,
        x2: 520,
    },
    scoreLine: {
        fill: "#f5bfcfff",
        weight: 20,
        x1: 120,
        x2: 120,
    }
}

//reStart button 
let reStartButtonP = {
    //button has color, position and size
    button: {
        fill: "#d3843bff",
        x: 320,
        y: 445,
        size: 45,
    },
    //text has color, position and size
    text: {
        size: 12,
        fill: 255,
        t1: "Play",
        x1: 309,
        y1: 442,
        t2: "Again",
        x2: 306,
        y2: 452,
    }
}

//set the defaut score bar start at x position 120
let scoreEndX2 = 120;


let frogHeartP = {
    r: 0,
    g: 0,
    b: 0
}

let mySoundStart;

//frog smile face 
let frogSmileP = {
    //eyes has position and size
    arc: {
        x: 280,
        y: 160,
        w: 25,
        h: 40,
        xr: 380,
    },
    //eyes has position and size
    line: {
        x1: 250,
        x2: 290,
        y: 160,
        strokeW: 5,
        xr1: 350,
        xr2: 390,
    },
    //mouth has position and size
    arcM: {
        x: 320,
        y: 200,
        w: 20,
        h: 30,
    }
}

//USED TO LOAD EXTERNAL FILES 
function preload() {
    myFont = loadFont('assets/textFont/Super joyful.ttf');
    soundFormats('mp3', 'ogg');
    mySoundStart = loadSound('assets/sounds/Accept.mp3');
}

/**
 * Creates the canvas and initializes the fly
 */
function setup() {

    createCanvas(640, 480);

    angleMode(DEGREES);

    // Give the fly its first random position
    resetFly();

    //reset the background
    background(0);

}


function draw() {
    console.log(gameState);

    if (gameState === "start") {
        startScreen();
    }
    else if (gameState === "play") {
        gameScreen();
    }
    else if (gameState === "end") {
        endScreen();
    }

}

//Set the screen system for start the game
function startScreen() {
    background(backgroundColor);

    //Display the text
    startText();

    //Draw the froghead
    frogHead();

    //Draw the MoveMouth
    moveMouth();

    //Draw the frogeyes and mouth
    frogStart();
    // when the code start run, the timer start crount
    timer.startTime = millis();

}

//Display the Froghead
function frogHead() {

    //SET THE FROGHEAD
    push();
    fill(frogH.fill);
    noStroke();
    ellipse(frogH.x, frogH.y, frogH.w, frogH.h);
    pop();

    //SET THE FROGEAR
    push();
    fill(frogE.fill);
    noStroke();
    arc(frogE.leftEarX, frogE.y, frogE.w, frogE.h, frogE.arcStartP, frogE.arcStopP, CHORD);
    arc(frogE.rightEarX, frogE.y, frogE.w, frogE.h, frogE.arcStartP, frogE.arcStopP, CHORD);
    pop();

    //SET THE CHEEK FOR THE FROG
    push();
    fill(frogCheek.fill);
    noStroke();
    ellipse(frogCheek.leftX, frogCheek.y, frogCheek.w, frogCheek.h);
    ellipse(frogCheek.rightX, frogCheek.y, frogCheek.w, frogCheek.h);
    pop();

    //SET THE CHEEK DETAIL FOR THE FROG, MAKE THE COLOR CHANGE BY THE MOUSE
    push();
    strokeWeight(frogCheekLine.strokeWeight);

    //MAKE THE FROGCHEEKLINE COLOR CHANGED BY MOUSE AND RANDOM B. WHEN THE MOUSE NOT MOVE, THE RGB(B) WILL NOT CHANGE. IF MOUSE MOVE, THE RGB(B)COLOR WILL CHANGE.
    if (frogCheekLine.x == mouseX && frogCheekLine.y == mouseY) {
        stroke(mouseX, mouseY, frogCheekLine.strokeColor);
    }

    else {
        frogCheekLine.strokeColor = random(0, 255);
        stroke(mouseX, mouseY, frogCheekLine.strokeColor);
        frogCheekLine.x = mouseX;
        frogCheekLine.y = mouseY;
    }

    line(frogCheekLine.leftLX1, frogCheekLine.y1, frogCheekLine.leftLx2, frogCheekLine.y2);
    line(frogCheekLine.leftLX1 - 20, frogCheekLine.y1, frogCheekLine.leftLx2 - 20, frogCheekLine.y2);
    line(frogCheekLine.leftLX1 - 40, frogCheekLine.y1, frogCheekLine.leftLx2 - 40, frogCheekLine.y2);
    line(frogCheekLine.RightLX1, frogCheekLine.y1, frogCheekLine.rightlx2, frogCheekLine.y2);
    line(frogCheekLine.RightLX1 + 20, frogCheekLine.y1, frogCheekLine.rightlx2 + 20, frogCheekLine.y2);
    line(frogCheekLine.RightLX1 + 40, frogCheekLine.y1, frogCheekLine.rightlx2 + 40, frogCheekLine.y2);
    pop();

}

function frogStart() {
    //SET THE FROG LEFT EYES
    push();
    fill(frogEyes.fill);
    strokeWeight(frogEyes.strokeWeight);
    stroke(frogEyes.strokeColor);
    translate(frogE.leftEarX, frogEyes.y);
    rotate(frogEyes.rotateLeft);
    ellipse(0, 0, frogEyes.w, frogEyes.h);
    pop();

    //SET THE FROG RIGHT EYES
    push();
    fill(frogEyes.fill);
    strokeWeight(frogEyes.strokeWeight);
    stroke(frogEyes.strokeColor);
    translate(frogE.rightEarX, frogEyes.y);
    rotate(frogEyes.rotateRight);
    ellipse(0, 0, frogEyes.w, frogEyes.h);
    pop();

    //SET THE FROG MOUTH (PUT IT IN THE BOTTOM LAYER ONCE IT BECOME BIGGER CAN OVER ALL THE HEAD)
    push();
    fill(frogMouth.fill);
    noStroke();
    arc(frogMouth.x, frogMouth.y, frogMouth.w, frogMouth.h, frogMouth.arcStartP, frogMouth.arcStopP, CHORD);
    pop();

}
function moveMouth() {

    if (mouseIsPressed) {
        // When the mouse is pressed, play the start sound only once.
        // The check event prevents it from replaying every frame
        // while the mouse button is held down.
        if (!mySoundStart.isPlaying()) {
            mySoundStart.play();
        }
        //When the mouse is held down, gradually make the mouth bigger
        frogMouth.w = min(frogMouth.w + 5, 800);  // Limit the maximum width to prevent infinite growth
        frogMouth.h = min(frogMouth.h + 5, 920);
        frogMouth.arcStartP = min(frogMouth.arcStartP - frogMouth.arcRatio, 0);
        frogMouth.arcStopP = min(frogMouth.arcStopP + frogMouth.arcRatio, 250);
        //when the mouth cover the screen, the game will start.
        if (frogMouth.w === 800) {
            gameState = "play";
        }
    } else if (frogMouth.w <= 800) {
        //  When the mouse is released, gradually make the mouth smaller and set the mouth stay small.
        frogMouth.arcRatio = frogMouth.w / frogMouth.h // Calculate the ratio of the current mouth
        if (frogMouth.w > 30) {
            frogMouth.w = max(frogMouth.w - 5, 30);
            frogMouth.h = max(frogMouth.h - 5, 150);
            frogMouth.arcStartP = min(frogMouth.arcStartP + frogMouth.arcRatio, 0);
            frogMouth.arcStopP = max(frogMouth.arcStopP - frogMouth.arcRatio, 180);
        }
        else {
            frogMouth.arcRatio = 0.2; // Reset the ratio to default
        }
    }
}


//Displays the text
function startText() {

    //set the inform for the text
    push();
    fill(startTextP.fill);
    textSize(startTextP.fontSize);
    textFont(myFont);
    text(startTextP.text, startTextP.x, startTextP.y);
    pop();
}

//Set the screen system for the game
function gameScreen() {

    background(backgroundColor);
    moveFly();
    bomb(); // run the keyPressed first, than draw the fly or bomb
    changeFly();
    moveFrog();
    eyesTrack();
    moveTongue();
    checkTongueFlyOverlap();
    drawFrog();
    writeText();

    // crount the time , using the runing program time 
    // subtract the time when you enter the game Screen.
    timer.timePassed = millis() - timer.startTime;
    // if time over 15sec, game end.
    if (timer.timePassed > timer.timeInterval) {
        gameState = "end"
    }

}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill(frogMouth.fill);
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke(frogMouth.fill);
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill(frogH.fill);
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.sizeW, frog.body.sizeH);
    ellipse(frog.body.x - 40, frog.body.y - 70, 65, 100);
    ellipse(frog.body.x + 40, frog.body.y - 70, 65, 100);
    pop();

    //Darw the frog's eyes
    push();
    fill("#ffffffff");
    noStroke();
    ellipse(frog.body.x - 40, frog.body.y - 80, 45, 70);
    ellipse(frog.body.x + 40, frog.body.y - 80, 45, 70);
    pop();

    //Draw the frog's eyeball
    push();
    fill("#000000ff");
    noStroke();
    ellipse(frog.leftEye.x, frog.body.y - 80, 30, 55);
    ellipse(frog.rightEye.x, frog.body.y - 80, 30, 50);
    pop();

}

/**
 * Draws the fly as a black circle
 */
function drawFly() {

    /**Make the fly's angles swing smoothly between -20° and 20°
    * The sine function creates a natural oscillation over time
    *frameCount * 10 controls the speed of the swinging motion
    *Multiplying by 20 sets the maximum angle range (amplitude)
    */
    fly.angle = sin(frameCount * 10) * 20;
    fly.angle2 = -sin(frameCount * 10) * 20;

    //Set the fly Color to ramdom color 
    fly.color.r = random(0, 255);
    fly.color.g = random(0, 255);
    fly.color.b = random(0, 255);

    //Draw the fly wings
    push();
    noStroke();
    fill(fly.color.r, fly.color.g, fly.color.b);
    translate(fly.x, fly.y); //Translate the origin point to make the rotate on x and y.
    rotate(fly.angle); // rotate the fly's wings.
    ellipse(0, 0, fly.wingW, fly.wingH);
    ellipse(0, 0, fly.size);
    pop();

    //Draw the fly wings
    push();
    noStroke();
    fill(fly.color.r, fly.color.g, fly.color.b);
    translate(fly.x, fly.y);//Translate the origin point to make the rotate on x and y.
    rotate(fly.angle2);// rotate the fly's wings.
    ellipse(0, 0, fly.wingW, fly.wingH);
    pop();

}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {

    //If frog.tougue catch the fly, fly position will fellow by tongue's position
    if (fly.state === "caught") {
        fly.x = frog.tongue.x;
        fly.y = frog.tongue.y

        //If the tougue get into the mouth and frog position reach under frog head. fly will reset.
        if (frog.tongue.state === "inbound" && frog.tongue.y === 400) {
            //Reset the fly on random position of left of canvas
            resetFly();
            //Reset the fly state to free, make it keep moving
            fly.state = "free";
        }
        //End the function when the fly is caught.
        return;
    }

    // Move the fly
    fly.x += fly.speed;

    // Move the fly sine wave, add  the random.z make the fly show differently evertime it show up.
    // Multiplying by 50 sets the maximum angle range (amplitude)
    fly.y = 50 * sin(fly.x * 2) + fly.z;

    //Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
    }
}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = -20; // set the out of the window when the fly rest
    //fly.y = random(0, 300);
    fly.z = random(0, 300);
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size / 2 + fly.size / 2);

    //If tongue cauth the fly. fly.state become caught and bring back the tongue
    if (eaten && fly.state === "free") {
        // catch the fly
        fly.state = "caught";
        // Bring back the tongue
        frog.tongue.state = "inbound";
        // score crount system when frog eat a fly or bomb.
        //  if eat a fly, fly.mode is normal, score add by 1.
        if (fly.mode === "normal") {
            score++;
        }
        //  if eat a bomb, fly.mode is bomb, score subtract by 1.
        else {
            score--;
        }
    }
}


/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
}

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
    frog.body.x = mouseX;
}

//Make the eyes follow the fly
function eyesTrack() {

    // if eyes and fly on the same position, eyes did not move.
    if (fly.x === frog.body.x) {
        frog.leftEye.x = frog.body.x - 40
        frog.rightEye.x = frog.body.x + 40
    }

    // if the fly on the left side of frog, the eyes will move gradually by the position of fly.
    else if (fly.x < frog.body.x) {
        // using fly position subtract mouse.x position devide by mouse.x
        frog.leftEye.x = frog.body.x - 40 + 7 * ((fly.x - frog.body.x) / frog.body.x)
        frog.rightEye.x = frog.body.x + 40 + 7 * ((fly.x - frog.body.x) / frog.body.x)
    }

    // if the fly on the right side of frog, the eyes will move gradually by the position of fly.
    else if (fly.x > frog.body.x) {
        frog.leftEye.x = frog.body.x - 40 + 7 * ((fly.x - frog.body.x) / (640 - frog.body.x))
        frog.rightEye.x = frog.body.x + 40 + 7 * ((fly.x - frog.body.x) / (640 - frog.body.x))
    }
}

//draw the fly or bomb
function changeFly() {
    // if fly.mode become bomb draw bomb
    if (fly.mode === "bomb") {
        drawBomb();
    }
    //else fly.mode become normal draw fly
    else {
        drawFly();
    }
}

// check the key is pressed or not.
function bomb() {

    //if key is pressed fly mode become bomb 
    if (keyIsPressed) {
        fly.mode = "bomb";
    }
    //else key is not Pressed fly mode is normal
    else {
        fly.mode = "normal";
    }

}

//Draw the Bomb
function drawBomb() {

    //Draw the Bomb
    push();
    textSize(bombText.textSize);
    text(bombText.text, fly.x, fly.y);
    pop();

}

//Display the instruaction for bomb;
function writeText() {

    //Draw the Text 
    push();
    textSize(bombText.textSize2);
    fill(startTextP.fill);
    textFont(myFont);
    text(bombText.text2, bombText.x, bombText.y);
    pop();

    //Draw the Text for instruction
    push();
    textSize(bombText.textSize2);
    fill(startTextP.fill);
    text(bombText.text3, bombText.xR, bombText.y);
    text(bombText.text3, bombText.xL, bombText.y);
    pop();
}

//Set the screen system for end of game
function endScreen() {

    // draw the background color
    background(backgroundColor);

    //display the Score artwork
    displayScore();

    //calculator the score and move the score bar
    scoreCalculator();

    //display the different score of emoji;
    scoreEmoji();

    // display the reStart Game Button
    reStartGameButton();
}


//Calculator the score and move the score bar
function scoreCalculator() {

    // score bar secound point x position will change by the % of score.
    // it also need add the start point 120. 
    scoreEndX2 = score * (400 / 14) + 120;

    // if the score is 0 to 14 , score bar will adding by 2 and end at score%
    if (score >= 0 && score <= 14) {
        scoreP.scoreLine.x2 += 2; // adding by 2 
        if (scoreP.scoreLine.x2 >= scoreEndX2) {
            scoreP.scoreLine.x2 = scoreEndX2 //stop at score %
        }
    }

    // if the score is bigger or equal to 15 , score bar will adding by 2 and end at 100%
    else if (score >= 15) {
        score = 14; //score biiger than 15 is equal to 100%
        scoreP.scoreLine.x2 += 2; // adding by 2 
        if (scoreP.scoreLine.x2 === 400) {
            scoreP.scoreLine.x2 = scoreEndX2    //stop at score %
        }
    }

    // if the score is small or equal to 0 , score bar will do nothing. stay at start point.
    else if (score <= 0) {
        score = 0;
    }
}

//Draw the different emoji for the score
function scoreEmoji() {

    //if score is >= 7 and socre < 14. reset the Mouthsize, and darw the frog head with happy face.
    if (score >= 7 && score < 14) {
        frogMouth.w = 30; //reset the mouth default size
        frogMouth.h = 150;//reset the mouth default size
        //draw the frog head
        frogHead();
        // draw the happy face
        frogStart();
    }
    //if score is > 2 and socre < 7. darw the frog head with smailling face.
    else if (score > 2 && score < 7) {
        //draw the frog head
        frogHead();
        //draw the smailling face 
        frogSmile();
    }
    //if score is >=14.darw the heart face
    else if (score >= 14) {
        //draw the frog head
        frogHead();
        //draw the heart face 
        frogHeart();
    }
    //if score is >=14.darw the heart face
    else if (score <= 2) {
        //draw the frogDead
        frogDead();
    }
}

//Draw the frog Smile face.
function frogSmile() {

    //SET THE FROG LEFT EYES
    push();
    fill(frogEyes.fill);
    noStroke();
    arc(frogSmileP.arc.x, frogSmileP.arc.y, frogSmileP.arc.w, frogSmileP.arc.h, 0, 180, open);
    pop();

    push();
    fill(frogEyes.fill);
    strokeWeight(frogSmileP.line.strokeW);
    line(frogSmileP.line.x1, frogSmileP.line.y, frogSmileP.line.x2, frogSmileP.line.y)
    pop();


    //SET THE FROG right EYES
    push();
    fill(frogEyes.fill);
    noStroke();
    arc(frogSmileP.arc.xr, frogSmileP.arc.y, frogSmileP.arc.w, frogSmileP.arc.h, 0, 180, open);
    pop();

    push();
    fill(frogEyes.fill);
    strokeWeight(frogSmileP.line.strokeW);
    line(frogSmileP.line.xr1, frogSmileP.line.y, frogSmileP.line.xr2, frogSmileP.line.y) //270,275
    pop();

    //SET THE FROG MOUTH 
    push();
    noFill();
    stroke(frogMouth.fill);
    strokeWeight(frogSmileP.line.strokeW);
    arc(frogSmileP.arcM.x, frogSmileP.arcM.y, frogSmileP.arcM.w, frogSmileP.arcM.h, 180, 0);
    pop();
}

//draw the frog Heart face
function frogHeart() {

    //set the frog eyes become random color
    frogHeartP.r = random(0, 255);
    frogHeartP.g = random(0, 255);
    frogHeartP.b = random(0, 255);

    //SET THE FROG LEFT EYES
    push();
    fill(frogHeartP.r, frogHeartP.g, frogHeartP.b);
    noStroke();
    translate(270, 160)
    //draw heart shape
    beginShape();
    vertex(0, 0);
    bezierVertex(0, -15, 35, -5, 0, 20);
    vertex(0, 0);
    bezierVertex(0, -15, -35, -5, 0, 20);
    endShape();
    pop();

    //SET THE FROG right EYES
    push();
    fill(frogHeartP.r, frogHeartP.g, frogHeartP.b);
    noStroke();
    translate(370, 160);
    //draw heart shape
    beginShape();
    vertex(0, 0);
    bezierVertex(0, -15, 35, -5, 0, 20);
    vertex(0, 0);
    bezierVertex(0, -15, -35, -5, 0, 20);
    endShape();
    pop();

    //SET THE FROG MOUTH    
    push();
    noFill();
    stroke("#a74e4eff");
    strokeWeight(5);
    arc(320, 200, 20, 30, 0, 180);
    pop();
}

//draw the frog dead 
function frogDead() {

    //draw the cross
    push();
    stroke("#6d6565ff");
    strokeWeight(15);
    line(310, 60, 340, 60);
    line(325, 45, 325, 80);
    pop();

    //SET THE tombstone shadow
    push();
    fill("#6d6565ff");
    noStroke();
    ellipse(335, 200, 170, 240);
    rect(250, 265, 170, 55, 5, 5)
    pop();

    //SET THE tombstone
    push();
    fill("#c2c2c2ff");
    noStroke();
    ellipse(320, 200, 170, 240);
    pop();

    push();
    fill("#c2c2c2ff");
    noStroke();
    rect(235, 270, 170, 50, 5, 5)
    pop();

    //SET THE FROGEAR
    push();
    fill("#6d6565ff");
    noStroke();
    arc(300, 132, 22, 38, frogE.arcStartP, frogE.arcStopP, CHORD);//270
    arc(340, 132, 22, 38, frogE.arcStartP, frogE.arcStopP, CHORD);
    ellipse(frogH.x, 150, 80, 55);
    pop();

    //set the frog eyes
    push();
    textFont(myFont);
    fill("#383535ff");
    textSize(20);
    text("x", 295, 132);
    text("x", 335, 132);
    pop();

    //set the frog mouth
    push();
    textFont(myFont);
    fill("#383535ff");
    textSize(10);
    text("x", 318, 150);
    pop();

    //set the R.I.P text
    push();
    textFont(myFont);
    fill("#383535ff");
    textSize(50);
    text("R.I.P", 280, 250);
    pop();

}


//display the score%
function displayScore() {

    // Draw the ScoreOutline
    push();
    stroke(scoreP.outLine.fill);
    strokeWeight(scoreP.outLine.weight);
    line(scoreP.outLine.x1, scoreP.y, scoreP.outLine.x2, scoreP.y);
    pop();

    // Draw the ScoreLine
    push();
    stroke(scoreP.scoreLine.fill);
    strokeWeight(scoreP.scoreLine.weight);
    line(scoreP.scoreLine.x1, scoreP.y, scoreP.scoreLine.x2, scoreP.y);
    pop();

    //Show the Score%
    push();
    textSize(24);
    textFont(myFont);
    fill(255);
    text(int(score / 14 * 100) + "%", 305, 380);
    pop();

}

//Draw the restart button
function reStartGameButton() {

    //draw the button
    push();
    fill(reStartButtonP.button.fill);
    noStroke();
    ellipse(reStartButtonP.button.x, reStartButtonP.button.y, reStartButtonP.button.size);
    pop();

    //draw the text
    push();
    textFont(myFont);
    textSize(reStartButtonP.text.size);
    fill(reStartButtonP.text.fill);
    text(reStartButtonP.text.t1, reStartButtonP.text.x1, reStartButtonP.text.y1);
    text(reStartButtonP.text.t2, reStartButtonP.text.x2, reStartButtonP.text.y2);
    pop();
}


//set the function for the mouseClicked
function mouseClicked() {

    //if gameState is end, when the mouse is touching the button, restart Game
    if (gameState === "end") {

        // Get distance from mouse and button
        let distance = dist(mouseX, mouseY, 320, 445);

        // if mouse touch, restart Game
        if (distance < 45 / 2) {
            restartGame();
        }
    }
}

//set the function for the restartGame
function restartGame() {

    // reset the time crount from 0
    timer.startTime = millis();
    timer.timePassed = 0;

    //reset the game score to 0, and score bar to start point
    score = 0;
    scoreP.scoreLine.x2 = 120;

    // reset the fly position, mode and state
    resetFly();
    fly.state = "free";
    fly.mode = "normal";

    //reset the frog mouse 
    frog.tongue.state = "idle";
    frog.tongue.y = height; //reset the frog tongue at top of screen

    //reset the game State to play. back to game screen.
    gameState = "play";
}