/**
 * function challenge
 * weini wang
 * 
 * function challenge
 * 
 *  The starting point for a ball - bouncing experience of epic proportions!
 */

"use strict";

// Our ball
const ball = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 0,
        y: 10
    }
};

// Our paddle
const paddle = {
    x: 300,
    y: 280,
    width: 80,
    height: 10
};

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 300);
}


/**
 * Move and display the ball and paddle
*/
function draw() {
    background("#87ceeb");

    movePaddle(paddle);
    moveBall(ball);

    handleBounce(ball, paddle);

    drawPaddle(paddle);
    drawBall(ball);

    //console.log(checkOverlap);
    console.log(paddle.x);
    //console.log(ball.y);
}

/**
 * Moves the paddle
 */
function movePaddle(paddle) {
    paddle.x = mouseX
}

/**
 * Moves the ball passed in as a parameter
 */
function moveBall(ball) {
    ball.y += ball.velocity.y
    if (checkOverlap(paddle, ball) === true && ball.y == 0) {
        ball.velocity.y = ball.velocity.y * -1;
    }
}

/**
 * Bounces the provided ball off the provided paddle
 */
function handleBounce(ball, Paddle) {
    if (checkOverlap(paddle, ball) === true) {
        ball.velocity.y = ball.velocity.y * -1;
    }
    else if (checkOverlap(paddle, ball) === false && ball.y == 400) {
        ball.velocity.y = 0;
    }
}

/**
 * Draws the specified paddle on the canvas
 */
function drawPaddle(paddle) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
    pop();
}

/**
 * Draws the specified ball on the canvas
 */
function drawBall(ball) {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(ball.x, ball.y, ball.width, ball.height);
    pop();
}

/**
 * Returns true if paddle and ball overlap, and false otherwise
 * Assumes paddle and ball have properties x, y, width and height to describe
 * their paddlengles, and that paddle and ball are displayed CENTERED on their
 * x,y coordinates.
 */
function checkOverlap(paddle, ball) {
    return (paddle.x + paddle.width / 2 > ball.x - ball.width / 2 &&
        paddle.x - paddle.width / 2 < ball.x + ball.width / 2 &&
        paddle.y + paddle.height / 2 > ball.y - ball.height / 2 &&
        paddle.y - paddle.height / 2 < ball.y + ball.height / 2);
}