let bingoContainer = document.getElementById("bingo-container");
let cells = document.querySelectorAll(".cells");
let newCard = document.getElementById("new-card");
let newNumber = document.getElementById("new-number");
let list = document.getElementById("list");
console.log(list);

let uniqueRandomNumbers = [];

const numberGenerator = function (arr) {
  if (arr.length >= 76) return;
  let randomNumber = Math.floor(Math.random() * 76 + 1);
  if (arr.indexOf(randomNumber) < 0) {
    arr.push(randomNumber);
  }
  numberGenerator(arr);
};

numberGenerator(uniqueRandomNumbers);

console.log(uniqueRandomNumbers);

const populateCells = function () {
  for (let i = 0; i < cells.length; i++) {
    let numbers = uniqueRandomNumbers[i];
    cells[i].innerText = numbers;
  }
};

populateCells();

const bingo = function () {};

newNumber.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * uniqueRandomNumbers.length);
  let index = uniqueRandomNumbers[randomNumber];
  uniqueRandomNumbers.splice(randomNumber, 1);
  let newP = document.createElement("p");
  let text = (newP.innerText = `${index}`);
  let css = newP.classList.add("p");
  list.appendChild(newP);
  for (i = 0; i < cells.length; i++) {
    let text = cells[i].innerText;
    if (index == text) {
      cells[i].classList.add("selected");
    } else if (uniqueRandomNumbers.length <= 0) {
      newNumber.disabled = true;
    }
  }
  console.log(uniqueRandomNumbers);
});

newCard.addEventListener("click", function () {
  location.reload();
});
