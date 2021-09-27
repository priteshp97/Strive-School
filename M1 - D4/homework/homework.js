/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

let numbers = [1, 2, 3, 4, 5];

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

let personalDetails = {
  firstName: "Pritesh",
  lastName: "Patel",
  email: "prit@gmail.com",
  age: 24,
};

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

personalDetails.drivingLicence = true;

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete personalDetails.age;

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

let personalDetails2 = {
  firstName: "Prit",
  lastName: "Pat",
  email: "pritesh@gmail.com",
  age: 22,
};

console.log(personalDetails.email === personalDetails2.email);

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 40;
let shipping = 10;

if (totalShoppingCart > 50) {
  console.log(
    `Total Cart Value: ${totalShoppingCart}\n
        Your total cart value is over 50, you have earned FREE shipping!\n
        Total Cart Value: ${totalShoppingCart}`
  );
} else {
  console.log(
    `Cart Value: ${totalShoppingCart}\n
     Shipping Cost: ${shipping}\n
     Total Cart Value: ${totalShoppingCart + shipping}`
  );
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

totalShoppingCart = 70;
shipping = 10;
let promotion = 20;
let totalWithPromotion =
  totalShoppingCart - (totalShoppingCart / 100) * promotion;

if (totalWithPromotion > 50) {
  console.log(
    `Total Cart Value: ${totalWithPromotion}\n
        Your total cart value is over 50, you have earned FREE shipping!\n
        Total Cart Value: ${totalWithPromotion}`
  );
} else {
  console.log(
    `Cart Value: ${totalWithPromotion}\n
     Shipping Cost: ${shipping}\n
     Total Cart Value: ${totalWithPromotion + shipping}`
  );
}

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

let car1 = {
  brand: "BMW",
  model: "M4",
  licensePlate: "EY19 YGW",
};

let car2 = {};
Object.assign(car2, car1);
car2.licensePlate = "EY20 YGW";

let car3 = {};
Object.assign(car3, car1);
car3.licensePlate = "EY21 YGW";

let car4 = {};
Object.assign(car4, car1);
car4.licensePlate = "EY22 YGW";

let car5 = {};
Object.assign(car5, car1);
car5.licensePlate = "EY23 YGW";

let car6 = {};
Object.assign(car6, car1);
car6.licensePlate = "EY24 YGW";

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

let carsForRent = [car1, car2, car3, car4, car5, car6];

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

carsForRent.pop();
carsForRent.shift();
console.log(carsForRent);

/* EXERCISE 11 
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log(
  `${typeof car1} + ${typeof car1.licensePlate} + ${typeof car1.brand}`
);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForSale arrays.
*/

let carsForSale = [];
carsForSale.push("BMW", "Fiat", "Audi");

console.log(carsForSale);

let totalCars = carsForSale.length;

console.log(totalCars);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

for (i = 0; i < totalCars; i++) {
  console.log(carsForSale[i]);
}

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
