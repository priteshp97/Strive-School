/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

let area = function (l1, l2) {
  let areaOfTriangle = (l1 * l2) / 2;
  console.log(areaOfTriangle);
};

area(5, 8);

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

let crazySum = function (v1, v2) {
  if (v1 === v2) {
    let sumThree = (v1 + v2) * 3;
    console.log(sumThree);
  } else {
    let sum = v1 + v2;
    console.log(sum);
  }
};

crazySum(4, 5);

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

let crazyDiff = function (n1) {
  if (n1 > 19) {
    let diffThree = (n1 - 19) * 3;
    console.log(diffThree);
  } else {
    let diff = 19 - n1;
    console.log(diff);
  }
};

crazyDiff(20);

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

let boundary = function (num) {
  if (num >= 20 && num <= 100) {
    console.log("True");
  } else if (num === 400) {
    console.log("Equal to 400");
  } else {
    console.log("false");
  }
};

boundary(101);

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

let strivify = function (string) {
  if (string.includes("Strive", 0)) {
    console.log(string);
  } else {
    console.log("Strive " + string);
  }
};

strivify("hello");

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

let check3and7 = function (num1) {
  if (num1 % 3 === 0 || num1 % 7 === 0) {
    console.log(`${num1} is a multiple of 3 or 7`);
  } else {
    console.log("not a multiple of 3 or 7");
  }
};

check3and7(3);

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

let reverseString = function (string1) {
  let reverse = string1.split("").reverse().join("");
  console.log(reverse);
};

reverseString("Hello Strive");

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

let upperFirst = function (str) {
  let split = str.split(" ");

  for (i = 0; i < split.length; i++) {
    split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
  }
  let str1 = split.join(" ");
  console.log(str1);
};

upperFirst("hello capitalize me");

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

let cutString = function (str1) {
  let string = str1.slice(1, -1);
  console.log(string);
};

cutString("!Hello!");

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

let giveMeRandom = function (n) {
  let array = [];

  for (i = 0; i < n; i++) {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    array.push(randomNumber);
  }
  console.log(array);
};

giveMeRandom(5);

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
