const nameInput = document.getElementById("names");
const btnTeam = document.getElementById("btn-team");
const checkNamesBtn = document.getElementById("check-names");
const list = document.querySelector(".list");
const teamDiv = document.querySelector(".team-section");
const assignBtn = document.getElementById("assign");

let array = [];

checkNamesBtn.addEventListener("click", function () {
  let names = document.getElementById("names").value;
  let list = document.querySelector(".list");
  let listItems = document.createElement("li");
  let message = `${names}`;
  listItems.innerHTML = message;
  list.appendChild(listItems);
  array.push(names);
  nameInput.value = "";
  console.log(array);
});

btnTeam.addEventListener("click", function () {
  const teamSection = document.querySelector(".team-section");
  let teamsValue = document.getElementById("teams").value;
  for (i = 1; i <= teamsValue; i++) {
    let list1 = document.createElement("div");
    let html = `
    <h2> Team ${i} </h2>
    <ol id="teams-ol-${i}"> </ol>
    
    `;
    list1.innerHTML = html;
    teamSection.appendChild(list1);
  }
});

assignBtn.addEventListener("click", function () {
  let amountOfNames = document.querySelectorAll(".list li");
  let random = Math.floor(Math.random() * array.length);
  array.splice(random, 1);
  amountOfNames[random].remove();
  console.log(array);
  console.log(random);
});
