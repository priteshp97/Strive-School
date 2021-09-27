// Additional assignments for Day 3

/* EXTRA 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/
let isMale = true;
let gender = isMale ? "male" : "female";

console.log(gender);

/* EXTRA 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let num1 = 4;
let num2 = 12;

console.log(
  num1,
  num2 === 8 || num1 - num2 === 8 || num2 - num1 === 8 || num1 + num2 === 8
);

/* EXTRA 3
 Create a variable and assign to it the concatenation of two strings.
*/

let string = "John" + "Doe";

/* EXTRA 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let num1 = 8;
let num2 = 4;
let num3 = 9;

if (num1 <= num2 && num2 <= num3) {
  console.log(num1, num2, num3);
} else if (num1 <= num3 && num3 <= num2) {
  console.log(num1, num3, num2);
} else if (num2 <= num1 && num1 <= num3) {
  console.log(num2, num1, num3);
}

/* EXTRA 5
 Write a piece of code for finding the average of two given integers.
*/

let num1 = 8;
let num2 = 9;

let avg = (num1 + num2) / 2;

console.log(avg);

/* EXTRA 6
 Write a piece of code for finding the longest of two given strings.
*/

let string1 = "I am String1";
let string2 = "I'm string2";

if (string1.length > string2.length) {
  console.log("string1 is the longer string");
} else {
  console.log("string2 is the longer string");
}

/* EXTRA 7
 Write a piece of code for checking if a given value is a integer or not.
*/

let x = "8";

let dataType = typeof x;

if (dataType === "number") {
  console.log("x is an integer");
} else {
  console.log("x is not an integer");
}

/* EXTRA 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let num = 500;
let percentage = 20;

let sum = (num / 100) * percentage;

console.log(sum);

/* EXTRA 9
 Write a piece of code for checking if a given number is even or odd.
*/

let num = 9;

if (num % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
