// //ASSIGNMENTS
// write a program that calculates the body max index (BMI) and categorizes it. The formular for BMI is:
// weight / (height * height) where weight is in kg and height is in meters. The categories are as follows:
// underweight (BMI < 18.5), normal weight (BMI 18.5 - 24.9), overweight (BMI 25 - 29.9), and obesity (BMI >= 30).

let weight = parseInt(prompt("Enter your weight in kg"));
let height = parseInt(prompt("Enter your height in meters"));

let BMI = weight / (height * height);

if (BMI < 18.5) {
    alert(`Your BMI is ${BMI} and you are underweight`);
} else if (BMI >= 18.5 && BMI <= 24.9) {
    alert(`Your BMI is ${BMI} and you are normal weight`);
} else if (BMI >= 25 && BMI <= 29.9) {
    alert(`Your BMI is ${BMI} and you are overweight`);
} else if (BMI >= 30) {
    alert(`Your BMI is ${BMI} and you are obese`);
}