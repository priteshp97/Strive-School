/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */

const sum = function (int1, int2) {
  if (int1 === int2) {
    console.log((int1 + int2) * 3);
  } else {
    console.log(int1 + int2);
  }
};

sum(3, 3);

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */

const check = function (int1, int2) {
  if (int1 === 50 || int2 === 50) {
    console.log("true");
  } else if (int1 + int2 === 50) {
    console.log("true");
  } else {
    console.log("false");
  }
};

check(30, 10);

/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */

const string = function (number, str) {
  let cut = str.slice(0, number) + str.slice(number + 1);
  console.log(cut);
};

string(3, "hello");

/* 4. Create a function to find and return the largest of three given integers. */

const large = function (int1, int2, int3) {
  console.log(Math.max(int1, int2, int3));
};

large(9, 5, 6);

/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */

let true1;

const checkRange = function (int1, int2) {
  return (int1 >= 40 && int1 <= 60) || (int1 >= 70 && int1 <= 100);

  if ((int1 >= 40 && int1 <= 60) || (int1 >= 70 && int1 <= 100)) {
    let true1 = true;
  } else if (
    (true1 === true && int2 >= 40 && int2 <= 60) ||
    (int2 >= 70 && int2 <= 100)
  ) {
    console.log("true");
  } else {
    console.log("false");
  }
};

checkRange(70, 65);

/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */

const copy = function (number, str) {
  console.log(str.repeat(number));
};

copy(3, "hello");

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */

const city = function (city) {
  if (city.startsWith("Los") || city.startsWith("New")) {
    console.log(city);
  } else {
    console.log("false");
  }
};

city("Nw York");

/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */

const array = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
};

array([4, 5, 6]);

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */

const arrayCheck = function (arr) {
  if (arr[0] === 1 || arr[0] === 3 || arr[1] === 1 || arr[1] === 3) {
    console.log("true");
  } else {
    console.log("false");
  }
};

arrayCheck([1, 3]);

/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */

const arrayCheckNot = function (arr) {
  if (arr[0] !== 1 || arr[0] !== 3 || arr[1] !== 1 || arr[1] !== 3) {
    console.log("true");
  } else {
    console.log("false");
  }
};

arrayCheckNot([1, 2]);

/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */

const ArrayLength = function (arr) {
  let longest = arr.reduce(function (a, b) {
    return a.length > b.length ? a : b;
  });
  console.log(longest);
};

ArrayLength(["hello", "longest"]);

/* 12. Create a function to find the types of a given angle:
  1. Acute angle â‡’ between 0 and 90 degrees. Return `acute`.
    2. Right angle â‡’ 90 degree. Return `right`
    3. Obtuse angle â‡’ between 90 and 180. Return `obtuse`
    4. Straight angle â‡’ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/

/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */

/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */

/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */

/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */

/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */

/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor â‡’ return `Diego`
    The number has 5 as a factor â‡’ return `Riccardo`
    The number has 7 as a factor â‡’ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    âš ï¸ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */

/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */
