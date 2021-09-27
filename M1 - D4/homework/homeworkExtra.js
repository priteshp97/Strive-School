// Additional assignments for Day 4

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

let array = [5, 6, 7, 8];

array.reverse();

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

let array = [5, 6, 7, 8];

console.log(Math.max(...array));

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

console.log(Math.min(...array));

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

let array = [5, 6, 7, 8];

for (var i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
    // console.log(`Odd: ${array[i]}`);
  } else console.log(`Even: ${array[i]}`);
}

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

?

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

?

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

let array1 = [4, 6, 8];

array1 = array1.map(function (addOne) {
  return addOne + 1;
});

console.log(array1);


/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

let arrayString = ["Hello", "Hi", "Hey"];

arrayString = arrayString.map(function (stringLength) {
  return stringLength.length;
});

console.log(arrayString);

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
