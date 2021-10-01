// DOM EXERCISES

// 31 - Get the element with an id of "container" from the page
// 32 - Get every <td> element from the page
// 33 - Use a loop for printing the text inside of every <td> element in the page
// 34 - Write a function to change the heading of the page
// 35 - Write a function to add an extra row to the table
// 36 - Write a function to add a class of "test" to each row in the table
// 37 - Write a function to add a red background to every link in the page
// 38 - Console log "Page loaded" when the page is correctly loaded
// 39 - Write a function to add new items to a unordered list
// 40 - Write a function to empty a list

// ex 31

const container = document.getElementById("container");

// ex 32

const tdAll = document.querySelectorAll("td");

// ex 33

const tdLoop = function (text) {
  for (let td of tdAll) {
    td.innerText = `${text}`;
  }
};

// tdLoop("text");

// ex 34

const headingChange = function (heading) {
  const h1 = document.querySelector("h1");
  h1.innerText = `${heading}`;
};

// headingChange("changed heading");

// ex 35

const extraRow = function () {
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const content = (newRow.innerHTML = `<td>New Row</td>
  <td>New Row</td>
  <td>New Row</td>
  <td>New Row</td>
  <td>New Row</td>`);
  table.appendChild(newRow);
};

// extraRow();

// ex 36

const addClass = function () {
  const getRows = document.querySelectorAll("td");
  for (let css of getRows) {
    css.classList.add("test");
  }
};

// addClass();

// ex 37

const redBackground = function () {
  const a = document.querySelectorAll("a");
  for (let background of a) {
    background.style.backgroundColor = "red";
  }
};

// redBackground();

// ex 38

window.onload = function () {
  console.log("Page loaded");
};

// ex 39

const newLi = function () {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const contentOfLi = (li.innerText = "New list");
  ul.appendChild(li);
};

// newLi();

// ex 40

const empty = function () {
  const liEmpty = document.querySelectorAll("ol li");
  for (let empty of liEmpty) {
    empty.innerText = "";
  }
};

// empty();

// EXTRA EXERCISES

// 41 - Add an eventListener to show an alert when the cursor hovers a link, displaying its href property
// 42 - Create a button that will hide every image on the page when clicked
// 43 - Create a button that will hide or show the table on the page when clicked
// 44 - Write a function for calculating the sum of every number inside all the table cells (if their content is numeric -
// 45 - Delete the last letter from the heading each time the user clicks on it
// 46 - Change the background color of a <td> if the user clicks on it
// 47 - Add a delete button at the bottom of the table, when clicked it should delete a random <td>
// 48 - Add automatically a pink border to a cell when the mouse hovers it
// 49 - Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page
// 50 - Write a function to remove the last table from the page

// ex 41

const a = document.querySelectorAll("a");

const aHover = function () {
  for (let links of a) {
    links.addEventListener("mouseover", function () {
      alert(links.getAttribute("href"));
    });
  }
};

// aHover();

// ex 42
const buttonImages = function () {
  const button = document.createElement("button");
  const btnContent = (button.innerText = "Hide Images");
  const parentDiv = document.getElementById("buttons");
  parentDiv.appendChild(button);

  button.addEventListener("click", function () {
    const imgs = document.querySelectorAll("img");
    for (let img of imgs) {
      img.style.display = "none";
    }
  });
};

buttonImages();

// ex 43

const buttonTable = function () {
  const button = document.createElement("button");
  const btnContent = (button.innerText = "Hide/Show Table");
  const parentDiv = document.getElementById("buttons");
  parentDiv.appendChild(button);

  button.addEventListener("click", function () {
    const table = document.querySelector("table");
    table.classList.toggle("tableHide");
  });
};

buttonTable();

//ex 44

const sumTable = function () {
  let table = document.querySelector("table");
  let items = table.getElementsByTagName("td");
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum += parseInt(items[i].innerText);
  }
  return sum;
};

// console.log(sumTable());

// ex 45

const deleteLast = function () {
  const h1 = document.querySelector("h1");
  h1.addEventListener("click", function () {
    const h1Text = h1.innerText;
    let edit = h1Text.substring(0, h1Text.length - 1);
    h1.innerText = edit;
  });
};

// deleteLast();

// ex 46

const td = document.querySelectorAll("td");

const backgroundTd = function () {
  for (let t of td) {
    t.addEventListener("click", function () {
      t.style.backgroundColor = "red";
    });
  }
};

// backgroundTd();

// 48 - Add automatically a pink border to a cell when the mouse hovers it
// 49 - Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page
// 50 - Write a function to remove the last table from the page

// ex 47

const buttonDeleteTd = function () {
  const button = document.createElement("button");
  const btnContent = (button.innerText = "Delete random TD");
  const table = document.querySelector("table");
  table.appendChild(button);

  button.addEventListener("click", function () {
    const tds = document.querySelectorAll("td");
    let random = Math.floor(Math.random() * tds.length);
    tds[random].remove();
  });
};

buttonDeleteTd();

// ex 48

const tds = function () {
  const td = document.querySelectorAll("td");
  for (let t of td) {
    t.addEventListener("mouseover", function () {
      t.style.border = "2px solid pink";
    });
  }
};

// tds();
