// NON-PRIMITIVE DATA TYPES
// Objects - a collection of key-value pairs

const student = {
    name: "Kezayaa",
    age: 34,
    isStudent: true
}

console.log(typeof student);

//Arrays - a collection of values

const myArray = [1, 2, 3, 4, 5]
const myArray2 = ["Kezaya", 34, true, null, undefined]

console.log(typeof myArray);
console.log(typeof myArray2);

const myArray3 = ["Amaka", "James", 354, {name: "Tommy", age: 34}, [2, 4, 6]]

console.log(myArray3);
console.log(myArray3[0]); //Amaka
console.log(myArray[3]);
console.log(myArray3[3].name); //Tommy


// // Functions - a block of code that performs a specific task
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Kezaya"));
console.log(greet("Amaka"));

OPERATORS
Arithmetic Operators - used to perform arithmetic operations
subtraction (-), addition (+), multiplication (*), division (/), modulus (%), exponentiation (**), increment (++) and decrement (--)

let a = 10;
let b = 5;

const sum = a + b; // addition
const difference = a - b; // subtraction
const product = a * b; // multiplication
const quotient = a / b; // division
const remainder = a % b; // modulus


const exponent = a ** b; // exponentiation
const increment = a++; // increment
const decrement = a--; // decrement

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(remainder);


console.log(exponent);
console.log(increment);
console.log(decrement);

// // Assignments Operators - used to assign values to variables
// +=
// -=

let c = 39;



// Comparison Operators - used to compare values and return a boolean value

// == means equal to,
//  === means strictly equal to, 
// != means not equal to, 
// !== means strictly not equal to, 
// > means greater than, 
// < means less than, 
// >= means greater than or equal to, 
// <= means less than or equal to

const a = "tomola";
const b = "tomola";

console.log(a == b); // true because "tomola" is equal to "tomola"
console.log(a === b); // true because "tomola" is strictly equal to "tomola"
console.log(a != b); // false because "tomola" is not equal to "tomola"
console.log(a !== b); // false because "tomola" is not strictly equal to "tomola"

const d = 10;
const e = 5;

console.log(d == e); // false because 10 is not equal to 5
console.log(d === e); // false because 10 is not equal to 5
console.log(d != e); // true because 10 is not equal to 5
console.log(d !== e); // true because 10 is not equal to 5
console.log(d > e); // true because 10 is greater than 5
console.log(d < e); // false because 10 is not less than 5
console.log(d >= e); // true because 10 is greater than or equal to 5
console.log(d <= e); // false because 10 is not less than or equal to 5

// // END OF TODAY'S CLASS.