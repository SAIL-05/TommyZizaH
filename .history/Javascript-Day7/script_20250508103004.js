//Conditionals
// if statement
// if else statement
// if else if statement 

//if conditional statement

// let a = 10;
// let b = 20;

// if (a > b) {
//     console.log("The first value a is the greatest");
// }


// //if else conditional statement

// if (a > b) {
//     console.log("The first value is the greatest");
// } else {
//     console.log("The second value is the greatest");
// }


// if (45 > 67) {
//     console.log("The 45 is the greatest");
// } else {
//     console.log("The 67 is the greatest");
// }


// let DBpass = "tommy123456"
// let password = "tommy123456"

// if (password === DBpass) {
//     console.log("Welcome to your dashboard");
// }
// else {
//     console.log("Incorrect password");
// }

// // The console is used to display outpouts in the browser console
// // The alert is used to display outputs in a dialog box
// // The prompt is used to display a dialog box that prompts the user for input
// // The confirm is used to display a dialog box that asks the user to confirm or cancel an action



// const a = 45;
// const b = 65;
// alert(a+b);

// back tick
// const  name = "Tommy";
// const age = 31;
// const myStory = `My name is ${name} and I am ${age} years old`;

// console.log(myStory);
// alert(myStory); // My name is Tommy and I am 31 years old
// console.log(myStory); // My name is Tommy and I am 31 years old




// //if else if conditional statement
// if (a > b) {
//     console.log("The first value is the greatest");
// } else if (b > a) {
//     console.log("The second value is the greatest");
// }

// else {
//     console.log("Both values are equal");
// }



//Prompt - a built-in function that displays a dialog box that prompts the user for input
//confirm - a built-in function that displays a dialog box that asks the user to confirm or cancel an action
//alert - a built-in function that displays a dialog box that shows a message to the user

//Prompt - a built-in function that displays a dialog box that prompts the user for input
// let name = prompt("what is your name")
// let age = prompt("what is your age")

// const storeprompt = prompt("what is your name")
// console.log(storeprompt); // "Tommy"

// convert numbers to string using toString()
// convert numbers to string using toLocaleString()
// convert numbers to string using toFixed()
// convert numbers to string using toPrecision()

// cons a = 45
// console.log(a)
// console.log(typeof a); // number    
// console.log(a.toString()); // "45"



// parseInt - a built-in function that converts a string to an integer
// parseFloat - a built-in function that converts a string to a floating-point number
// Number - a built-in function that converts a string to a number
// String - a built-in function that converts a number to a string
// Boolean - a built-in function that converts a value to a boolean
// JSON - a built-in object that provides methods for parsing and stringifying JSON data

// let number = parseint(prompt("Enter a number")); // prompts the user to enter a number
// if number (number > 0) {

//     alert(`The number ${number} is a positive number`);
// } else {
//     alert(`The number ${number} is a negative number`);    
// }



// if else if conditional statement


const userNumber = parseInt(prompt("Enter a number")); // prompts the user to enter a number

if (userNumber > 0) {
    alert(`The number ${userNumber} is a positive number`);
}
else if (userNumber === 0) {
    alert(`The number ${userNumber} is invalid`);
}
else if(isNaN(userNumber)) {
    alert(`The number ${userNumber} is not a number`);
}

// else if (userNumber.toString() === "NaN") {
//     alert(`This is not a number`);
// }
else {
    alert(`The number ${userNumber} is a negative number`);
}


// write a program that determines the greatest of two numbers.

let firstNumber = parseInt(prompt("Enter the first number"));
let secondNumber = parseInt(prompt("Enter the second number"));

if (firstNumber > secondNumber) {
    alert(`The first number ${firstNumber} is the greatest`);
} else {
    alert(`The second number ${secondNumber} is the greatest`);    
} 
else if (firstNumber == secondNumber) {
    alert(`Both numbers are equal`);
} 
else if(isNaN(firstNumber || secondNumber)) {
    alert(`The user didn't enter a number`);
}


// // CORRECTION TO ABOVE
// // write a program that determines the greatest of two numbers.

let firstNumber = parseInt(prompt("Enter the first number"));
let secondNumber = parseInt(prompt("Enter the second number"));

if (firstNumber > secondNumber) {
    alert(`The first number ${firstNumber} is the greatest`);
} else if (secondNumber > firstNumber) {
    alert(`The second number ${secondNumber} is the greatest`);    
} 
else if (firstNumber == secondNumber) {
    alert(`Both numbers are equal`);
} 
else if(isNaN(firstNumber || secondNumber)) {
    alert(`The user didn't enter a number`);
}