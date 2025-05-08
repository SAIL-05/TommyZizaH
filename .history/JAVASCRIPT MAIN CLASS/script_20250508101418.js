// START OF TODAY's CLASS MONDAY 28TH APRIL 2025

//CLASS 1 JAVASCRIPT INTRODUCTION 28/4/2025

// let myAge = 34;
// let myName = "Tommy";

// console.log(myName);
// console.log(myAge);

// let age = 28;
// console.log(age);

// If `myAge` should be a constant, define it only once
// const myRealAge = 31;
// console.log(myRealAge);

// let myAge = 34
// let myName = "tommy"

// console.Log(myName);

// console.log(myAge);

// // age = 44
// // console.log(age);

// // const myAge = 34

// // console.log(myAge);



// //PRIMITIVE DATA TYPES
// //strings '' or " "

// // let kezaya = 'today is Kezaya's birthday' -- wrong
// let kezaya = "today is Kezaya's birthday"

// console.log(kezaya);

// //Numbers 

// let myNum = 72
// let myNum2 = -2

// console.log(myNum);
// console.log(myNum2);

// //Booleans TRUE or FALSE

// const me = true;
// const you = false;

// console.log(me);
// console.log(you);

// // Undefined - when a variable is declared but not assigned a value
// let test;
// console.log(test); //undefined
// test = 5

// // null - when a variable is declared and assigned a value of null

// let test2 = null
// console.log(test2); //null

// const test3 = null
// console.log(test3); //null



// // NON-PRIMITIVE DATA TYPES
// // Objects - a collection of key-value pairs

// const student = {
//     name: "Kezayaa",
//     age: 34,
//     isStudent: true
// }

// console.log(typeof student);

// //Arrays - a collection of values

// const myArray = [1, 2, 3, 4, 5]
// const myArray2 = ["Kezaya", 34, true, null, undefined]

// console.log(typeof myArray);
// console.log(typeof myArray2);

// const myArray3 = ["Amaka", "James", 354, {name: "Tommy", age: 34}, [2, 4, 6]]

// console.log(myArray3);
// console.log(myArray3[0]); //Amaka
// console.log(myArray[3]);
// console.log(myArray3[3].name); //Tommy


// // // Functions - a block of code that performs a specific task
// function greet(name) {
//     return `Hello, ${name}!`;
// }

// console.log(greet("Kezaya"));
// console.log(greet("Amaka"));

// // OPERATORS
// Arithmetic Operators - used to perform arithmetic operations
// subtraction (-), addition (+), multiplication (*), division (/), modulus (%), exponentiation (**), increment (++) and decrement (--)

// let a = 10;
// let b = 5;

// const sum = a + b; // addition
// const difference = a - b; // subtraction
// const product = a * b; // multiplication
// const quotient = a / b; // division
// const remainder = a % b; // modulus


// const exponent = a ** b; // exponentiation
// const increment = a++; // increment
// const decrement = a--; // decrement

// console.log(sum);
// console.log(difference);
// console.log(product);
// console.log(quotient);
// console.log(remainder);


// console.log(exponent);
// console.log(increment);
// console.log(decrement);

// // // Assignments Operators - used to assign values to variables
// // +=
// // -=

// let c = 39;



// // Comparison Operators - used to compare values and return a boolean value

// == means equal to,
//  === means strictly equal to, 
// != means not equal to, 
// !== means strictly not equal to, 
// > means greater than, 
// < means less than, 
// >= means greater than or equal to, 
// <= means less than or equal to

// const a = "tomola";
// const b = "tomola";

// console.log(a == b); // true because "tomola" is equal to "tomola"
// console.log(a === b); // true because "tomola" is strictly equal to "tomola"
// console.log(a != b); // false because "tomola" is not equal to "tomola"
// console.log(a !== b); // false because "tomola" is not strictly equal to "tomola"

// // const d = 10;
// // const e = 5;

// // console.log(d == e); // false because 10 is not equal to 5
// // console.log(d === e); // false because 10 is not equal to 5
// // console.log(d != e); // true because 10 is not equal to 5
// // console.log(d !== e); // true because 10 is not equal to 5
// // // console.log(d > e); // true because 10 is greater than 5
// // // console.log(d < e); // false because 10 is not less than 5
// // // console.log(d >= e); // true because 10 is greater than or equal to 5
// // // console.log(d <= e); // false because 10 is not less than or equal to 5

// END OF TODAY'S CLASS.


// CLASS 2 START OF TODAY's CLASS TUESDAY 29TH APRIL 2025

// // Logical Operators - used to perform logical operations
// && means AND, || means OR, ! means NOT
//Logical OR (||) - returns true if at least one of the operands is tru
// Logical AND (&&) - returns true if both operands are true
// Logical NOT (!) - returns true if the operand is false and false if the operand is true

//typeof - returns the data type of a variable
//Ayo's Admission List
// const fee  = true;
// const uniform = false;
// const textbooks = true;
// const idCard = false;

// const checkOR = fee || textbooks || uniform || idCard;
// const checkAND = fee && textbooks && uniform && idCard;
// const checkAyo2 = fee && textbooks; // true because fee is true and textbooks is false
// const checkAyo = (fee && textbooks) || (uniform && idCard); // true because fee and textbooks are true

// console.log(checkOR); // true because at least one of the operands is true
// console.log(checkAND); // false because all operands are false
// console.log(checkAyo); // true because fee and textbooks are true
// console.log(checkAyo2); // true because fee and textbooks are true

// // Unary Operators - used to perform operations on a single operand
//increment (++) - increases the value of a variable by 1
//decrement (--) - decreases the value of a variable by 1
//negation (-) - changes the sign of a number
//typeof - returns the data type of a variable
//delete - used to delete a property from an object
//void - used to evaluate an expression without returning a value
//new - used to create a new object

// let k = 10;
// k++;
// console.log(k); // 11

// k--;
// console.log(k); // 10


// // Ternary Operator - a shorthand way to write an if-else statement
// compares two values and return a value based on the comparison result
// condition ? value1 : value2;
// condition ? value1 : value2 : value3;
// condition ? "" : ""

// const tenTest = 10 > 30 ? "true Yes it is correct" : "false No it is not correct";
// const tenTest2 = 10 > 30 ? "true Yes it is correct" : "false No it is not correct" ? "true Yes it is correct" : "false No it is not correct";

// console.log(tenTest); // false No it is not correct
// console.log(tenTest2); // true Yes it is correct

// // write a program that tells if a user is legible to vote or not

// const age = 18;

// const votingEligibility = age >= 18 ? "You are eligible to vote" : "You are not eligible to vote";

// // console.log(votingEligibility);

// const votingEligibility2 = age < 18 ? "You are eligible to vote" : "You are not eligible to vote";
// console.log(votingEligibility2); // You are not eligible to vote

// //how about 18 to 100 only can vote
// const votingEligibility3 = age >= 18 && age <= 100 ? "You are eligible to vote" : "You are not eligible to vote";

// console.log(votingEligibility3);

// //how about 18 to 100 only can vote and negative numbers cannot vote
// const votingEligibility4 = age >= 18 && age <= 100 && age > 0 ? "You are eligible to vote" : "You are not eligible to vote";

// console.log(votingEligibility4);

// // END OF TODAY'S CLASS.

//CLASS 3 JAVASCRIPT INTRODUCTION 5/5/2025 - MAY 2025
// // START OF TODAY's CLASS MONDAY 5TH MAY 2025

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



// console.log(name);
// console.log(age);

// const myName = prompt("what is your name")
// const myAge = prompt("what is your age")

// console.log(myName);
// console.log(myAge);
// console.log(typeof myName); // string
// console.log(typeof myAge); // string



//alert - a built-in function that displays a dialog box that shows a message to the user
// const test = 54;
// console.log(`Your test score is ${test}`); // Your test score is 78

// alert(`Your test score is ${test}`); // Your test score is 78    


// const username = prompt("Enter your username");
// const password = prompt("Enter your password");

// alert(`Welcome ${username}, your password is ${password}`); // Welcome Tommy, your password is tommy123456


// let valueOne = (prompt("Enter the first value"));
// let valueTwo = (prompt("Enter the second value"));

// let ans = valueOne + valueTwo;
// alert(ans);


// //Parseint

// let two =55;
// let test = parseInt(two); // converts the string "55" to the number 55
// console.log(two); // 55
// console.log(test); // 55
// console.log(typeof test); // number
// console.log(typeof two); // string


// let valueOne = parseint(prompt("Enter the first value"));
// let valueTwo = parseint(prompt("Enter the second value"));

// let ans = valueOne + valueTwo; // adds the two values together
// alert(ans); // displays the result in an alert box




// // write a program that checks if a number is even or odd

// let number = parseInt(prompt("Enter a number")); // prompts the user to enter a number
// if (number % 2 === 0) {
//     console.log("The number is even");
// } else {
//     console.log("The number is odd");
// }
// alert(`The number is ${number}`);



// // CORRECTION OF THE ABOVE CODE

// const myNum = parseInt(prompt("Enter a number")); // prompts the user to enter a number

// if (myNum % 2 === 0) {
//     alert(`The number ${myNum} is an even number`);
// } else {
//     alert(`The number ${myNum} is an odd number`);4
// }

<<<<<<< HEAD


// // CLASS  JAVASCRIPT INTRODUCTION (REVISION+CLASS) 6/5/2025 - MAY 2025
=======
// // END OF TODAY'S CLASS.

// // CLASS 4 JAVASCRIPT INTRODUCTION (REVISION+CLASS) 6/5/2025 - MAY 2025
>>>>>>> a26c966 (latest commit 6th May 2025)
// // START OF TODAY's CLASS TUESDAY 6TH MAY 2025

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


// const userNumber = parseInt(prompt("Enter a number")); // prompts the user to enter a number

// if (userNumber > 0) {
//     alert(`The number ${userNumber} is a positive number`);
// }
// else if (userNumber === 0) {
//     alert(`The number ${userNumber} is invalid`);
// }
// else if(isNaN(userNumber)) {
//     alert(`The number ${userNumber} is not a number`);
// }

// // else if (userNumber.toString() === "NaN") {
// //     alert(`This is not a number`);
// // }
// else {
//     alert(`The number ${userNumber} is a negative number`);
// }


// write a program that determines the greatest of two numbers.

// let firstNumber = parseInt(prompt("Enter the first number"));
// let secondNumber = parseInt(prompt("Enter the second number"));

// if (firstNumber > secondNumber) {
//     alert(`The first number ${firstNumber} is the greatest`);
// } else {
//     alert(`The second number ${secondNumber} is the greatest`);    
// } 
// else if (firstNumber == secondNumber) {
//     alert(`Both numbers are equal`);
// } 
// else if(isNaN(firstNumber || secondNumber)) {
//     alert(`The user didn't enter a number`);
// }


// // CORRECTION TO ABOVE
// // write a program that determines the greatest of two numbers.
// let firstNumber = parseInt(prompt("Enter the first number"));
// let secondNumber = parseInt(prompt("Enter the second number"));

// if (firstNumber > secondNumber) {
//     alert(`The first number ${firstNumber} is the greatest`);
// } else if (secondNumber > firstNumber) {
//     alert(`The second number ${secondNumber} is the greatest`);    
// } 
// else if (firstNumber == secondNumber) {
//     alert(`Both numbers are equal`);
// } 
// else if(isNaN(firstNumber || secondNumber)) {
//     alert(`The user didn't enter a number`);
// }


// write a program that transforms a numerical grade to a letter grade 
// (e.g grade 0-39 should display "F", 40-44 should display "E", 45-49 should display "D", 
// 50-59 should display "C", 50-59 should display "B", 70-100 should display "A").

// let grade = parseInt(prompt("Enter your grade"));

// if (grade >= 0 && grade <= 39) {
//     alert(`Failed you got an F`);
// }

// else if (grade >= 40 && grade <= 44) {
//     alert(`Your grade is an E`);
// } else if (grade >= 45 && grade <= 49) {
//     alert(`Your grade is an D`);
// } else if (grade >= 50 && grade <= 59)3  {
//     alert(`Your grade is an C`);
// } else if (grade >= 60 && grade <= 69) {
//     alert(`Your grade is an B`);
// } else if (grade >= 70 && grade <= 100) {
//     alert(`Your grade is an A`);
// }



// //ASSIGNMENTS
write a program that calculates the body max index (BMI) and categorizes it. The formular for BMI is:
weight / (height * height) where weight is in kg and height is in meters. The categories are as follows:
underweight (BMI < 18.5), normal weight (BMI 18.5 - 24.9), overweight (BMI 25 - 29.9), and obesity (BMI >= 30).

// let weight = parseInt(prompt("Enter your weight in kg"));



// // END OF TODAY'S CLASS.










// // Bitwise Operators - used to perform bitwise operations


//Dates - a built-in object that represents dates and times
//Regular Expressions - a built-in object that provides a way to search and manipulate strings using patterns
//Maps - a collection of key-value pairs that can be of any data type
//Sets - a collection of unique values of any data type
//Weak Maps - a collection of key-value pairs where the keys are objects and the values can be of any data type
//Weak Sets - a collection of unique values where the values are objects and the values can be of any data type
//Symbols - a built-in object that represents a unique identifier
//BigInt - a built-in object that represents integers with arbitrary precision
//Typed Arrays - a built-in object that represents an array of binary data
//Array Buffers - a built-in object that represents a fixed-length binary data buffer
