/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//let emptyArray =[];
// console.log(emptyArray.length); ==0 没有放element的array 0个element

// let emptyArray[5] = hello;
// console.log(emptyArray.length); ===6,因为你放了最后一个进去，他会自动dynamically add the element.

let numbers = [];
console.log(numbers);
//syntax to add an element to array is: 
numbers.push(2); // push will always be the last element
numbers.push(2);
numbers.push(2);

numbers.pop(2) //reomved the last element in the array.
console.log(numbers);

// console.log(numbers.indexOf(2)); this one we can see how many element it pasted.

//let's create an array!
let newArray = [5, 6, 7];
// let num1 = 5;
// let num2 = 6;
// let num3 = 7; exact writing this in speart we can use array!

//if i want to get access to an element of my array I write: 
//arryName[x]
console.log(newArray[2]);

// 两个-内容是一起的，两种写法都可以
//- let colors = ["r", "g", "b"];
// *let colors = [];
let colors = ["r", "g", "b"];

let index = 2;

let ballons = [];

function createNewBall() {
    let ball = {
        x: random(0, 100),
        y: random(0, 100),
        size: 20,
        color: {
            r: random(0, 255),
            g: random(0, 255),
            b: random(0, 255),
        }
    }
    return ball;
};

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {

    createCanvas(680, 400);
    //-let previousValure = colors[0]; 用这个可以保持原来的element

    //-colors[0]="red"; 在这条code之前，color【0】是“r”，跑了这条变成“red”
    //-console.log("current array element:" + colors[0]);
    //-console.log("previonsValure array element held in different variable:" + previousValure);
    //-colors[1]="green";
    //-colors[2]="blue";

    // *colors[0] = "red";
    // *colors[1] = "green";
    // *colors[5] = "blue";
    // *console.log(colors[2]); 这个会变成undifined, 因为你没有给他数据will be a hole. (show a specific element in the array)

    // console.log(colors); //可以显示所有的element. show the entire array.

    console.log(colors[index]);

    console.log(colors.length);

    //first elemont of the array: arrayName[0]
    //in the case that i want the last element of the array: arrayName[arrayName.length - 1]

    console.log(colors[colors.length]); // colors.length === 6 但是这个最后一个不一样，因为一共6个数，但是计算机是从0开始数的所以最后一个element的index是5

    //lets make objects!

    //let's make an array of objects!
    // let ballons = [
    //     {
    //         x: random(0, 100),
    //         y: random(0, 100),
    //         size: 20,
    //         color: {
    //             r: random(0, 255),
    //             g: random(0, 255),
    //             b: random(0, 255),
    //         }
    //     },
    //     {
    //         x: random(0, 100),
    //         y: random(0, 100),
    //         size: 20,
    //         color: {
    //             r: random(0, 255),
    //             g: random(0, 255),
    //             b: random(0, 255),
    //         }
    //     },
    //     {
    //         x: random(0, 100),
    //         y: random(0, 100),
    //         size: 20,
    //         color: {
    //             r: random(0, 255),
    //             g: random(0, 255),
    //             b: random(0, 255),
    //         }
    //     }
    // ];
    // console.log(ballons)


}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    //for every wlwment in my array
    for (let ball of ballons) {
        //do the following instructions
        // console.log(ball) //for every ball of ballons console.log...

        fill(ball.color.r, ball.color.g, ball.color.b);
        circle(ball.x, ball.y, ball.size);

    }

}

//is mousePressed, i want to dynamically add a new elemengt in my array
//everytime that I chlick!
//I want to assign a random number to the element
function mousePressed() {

    // numbers.push(random(0, 1000));
    // console.log(numbers);
    // console.log("the length of my array is" + numbers.length);
    // console.log("the last element of my array is " + numbers[numbers.length - 1]);

    let newBall = createNewBall(); // create new ball

    ballons.push(newBall); // store new ball in the array

    console.log(ballons); // lets see the array

    console.log(ballons[ballons.length - 1].x); //the last element's x value.
    console.log(ballons[ballons.length - 1].color.g);
}