/**
 * function challenge
 * weini wang
 * 
 * function challenge
 * 
 *  The starting point for a ball - bouncing experience of epic proportions!
 */

"use strict";

// Our ball set the initial number.
let ball = undefined;
let ball2 = undefined;

// const ball = {
//     x: 300,
//     y: 20,
//     width: 10,
//     height: 10,
//     velocity: {
//         x: 0,
//         y: 1
//     }
// };

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

    // set two ball
    ball = createBall(300, 10);
    ball2 = createBall(450, 3);
}


/**
 * Move and display the ball and paddle
*/
function draw() {
    background("#87ceeb");

    //make the movement for the ball
    movePaddle(paddle);
    moveBall(ball);
    moveBall(ball2)

    handleBounce(ball, paddle);
    handleBounce(ball2, paddle);

    //draw the two ball
    drawPaddle(paddle);
    drawBall(ball);
    drawBall(ball2);

    //console.log(checkOverlap);
    console.log(ball.y);
    //console.log(ball.y);
}

//set the createball function to make the veriable change easier.
function createBall(po, velocity_y) {
    const ball = {
        x: po,
        y: 20,
        width: 10,
        height: 10,
        velocity: {
            x: 0,
            y: velocity_y
        }
    };
    return ball;
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
}

/**
 * Bounces the provided ball off the provided paddle
 */
function handleBounce(ball, Paddle) {

    // using the if statment to check the overlap and make the ball bounce.
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