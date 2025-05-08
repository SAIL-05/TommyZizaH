//CLASS 3 JAVASCRIPT INTRODUCTION 5/5/2025 - MAY 2025
// // START OF TODAY's CLASS MONDAY 5TH MAY 2025
// // CONDITIONALS IN JAVASCRIPT

//Conditionals
// if statement
// if else statement
// if else if statement 

//if conditional statement

let a = 10;
let b = 20;

if (a > b) {
    console.log("The first value a is the greatest");
}


// //if else conditional statement

if (a > b) {
    console.log("The first value is the greatest");
} else {
    console.log("The second value is the greatest");
}


if (45 > 67) {
    console.log("The 45 is the greatest");
} else {
    console.log("The 67 is the greatest");
}


let DBpass = "tommy123456"
let password = "tommy123456"

if (password === DBpass) {
    console.log("Welcome to your dashboard");
}
else {
    console.log("Incorrect password");
}

// // The console is used to display outpouts in the browser console
// // The alert is used to display outputs in a dialog box
// // The prompt is used to display a dialog box that prompts the user for input
// // The confirm is used to display a dialog box that asks the user to confirm or cancel an action


// // Alert - a built-in function that displays a dialog box that shows a message to the user
const a = 45;
const b = 65;
alert(a+b);

// back tick `` - a template literal that allows you to create multi-line strings and embed expressions inside the string
const  name = "Tommy";
const age = 67;
const myStory = `My name is ${name} and I am ${age} years old`;

console.log(myStory);
alert(myStory); // My name is Tommy and I am 67 years old
console.log(myStory);




// //if else if conditional statement
if (a > b) {
    console.log("The first value is the greatest");
} else if (b > a) {
    console.log("The second value is the greatest");
}

else {
    console.log("Both values are equal");
}



//Prompt - a built-in function that displays a dialog box that prompts the user for input
//confirm - a built-in function that displays a dialog box that asks the user to confirm or cancel an action
//alert - a built-in function that displays a dialog box that shows a message to the user

//Prompt - a built-in function that displays a dialog box that prompts the user for input
let name = prompt("what is your name")
let age = prompt("what is your age")

const storeprompt = prompt("what is your name")
console.log(storeprompt); // "Tommy"



console.log(name);
console.log(age);

const myName = prompt("what is your name")
const myAge = prompt("what is your age")

console.log(myName);
console.log(myAge);
console.log(typeof myName); // string
console.log(typeof myAge); // string



//alert - a built-in function that displays a dialog box that shows a message to the user
const test = 54;
console.log(`Your test score is ${test}`); // Your test score is 78

alert(`Your test score is ${test}`); // Your test score is 78    


const username = prompt("Enter your username");
const password = prompt("Enter your password");

alert(`Welcome ${username}, your password is ${password}`); // Welcome Tommy, your password is tommy123456


let valueOne = (prompt("Enter the first value"));
let valueTwo = (prompt("Enter the second value"));

let ans = valueOne + valueTwo;
alert(ans);


// //Parseint

let two =55;
let test = parseInt(two); // converts the string "55" to the number 55
console.log(two); // 55
console.log(test); // 55
console.log(typeof test); // number
console.log(typeof two); // string


let valueOne = parseint(prompt("Enter the first value"));
let valueTwo = parseint(prompt("Enter the second value"));

let ans = valueOne + valueTwo; // adds the two values together
alert(ans); // displays the result in an alert box




// // write a program that checks if a number is even or odd

let number = parseInt(prompt("Enter a number")); // prompts the user to enter a number
if (number % 2 === 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}
alert(`The number is ${number}`);



// // CORRECTION OF THE ABOVE CODE

const myNum = parseInt(prompt("Enter a number")); // prompts the user to enter a number

if (myNum % 2 === 0) {
    alert(`The number ${myNum} is an even number`);
} else {
    alert(`The number ${myNum} is an odd number`);4
}

// // END OF TODAY'S CLASS.