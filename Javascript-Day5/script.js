// CLASS 2 START OF TODAY's CLASS TUESDAY 29TH APRIL 2025

// // Logical Operators - used to perform logical operations
// && means AND, || means OR, ! means NOT
//Logical OR (||) - returns true if at least one of the operands is tru
// Logical AND (&&) - returns true if both operands are true
// Logical NOT (!) - returns true if the operand is false and false if the operand is true

//typeof - returns the data type of a variable
//Ayo's Admission List
const fee  = true;
const uniform = false;
const textbooks = true;
const idCard = false;

const checkOR = fee || textbooks || uniform || idCard;
const checkAND = fee && textbooks && uniform && idCard;
const checkAyo2 = fee && textbooks; // true because fee is true and textbooks is false
const checkAyo = (fee && textbooks) || (uniform && idCard); // true because fee and textbooks are true

console.log(checkOR); // true because at least one of the operands is true
console.log(checkAND); // false because all operands are false
console.log(checkAyo); // true because fee and textbooks are true
console.log(checkAyo2); // true because fee and textbooks are true

// // Unary Operators - used to perform operations on a single operand
//increment (++) - increases the value of a variable by 1
//decrement (--) - decreases the value of a variable by 1
//negation (-) - changes the sign of a number
//typeof - returns the data type of a variable
//delete - used to delete a property from an object
//void - used to evaluate an expression without returning a value
//new - used to create a new object

let k = 10;
k++;
console.log(k); // 11

k--;
console.log(k); // 10


// // Ternary Operator - a shorthand way to write an if-else statement
// compares two values and return a value based on the comparison result
condition ? value1 : value2;
condition ? value1 : value2 : value3;
condition ? "" : ""

const tenTest = 10 > 30 ? "true Yes it is correct" : "false No it is not correct";
const tenTest2 = 10 > 30 ? "true Yes it is correct" : "false No it is not correct" ? "true Yes it is correct" : "false No it is not correct";

console.log(tenTest); // false No it is not correct
console.log(tenTest2); // true Yes it is correct

// // write a program that tells if a user is legible to vote or not

const age = 18;

const votingEligibility = age >= 18 ? "You are eligible to vote" : "You are not eligible to vote";

console.log(votingEligibility); // You are eligible to vote

const votingEligibility2 = age < 18 ? "You are eligible to vote" : "You are not eligible to vote";
console.log(votingEligibility2); // You are not eligible to vote

// //how about 18 to 100 only can vote
const votingEligibility3 = age >= 18 && age <= 100 ? "You are eligible to vote" : "You are not eligible to vote";

console.log(votingEligibility3);

//how about 18 to 100 only can vote and negative numbers cannot vote
const votingEligibility4 = age >= 18 && age <= 100 && age > 0 ? "You are eligible to vote" : "You are not eligible to vote";

console.log(votingEligibility4);

// // END OF TODAY'S CLASS.