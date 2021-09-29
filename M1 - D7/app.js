// Exercise 7

let h1TitleChange = function () {
  let h1Title = document.getElementById("title");

  h1Title.innerText = "New title";
};

h1TitleChange();

// Exercise 8

let backgroundChange = function () {
  document.body.style.backgroundColor = "#f9bc60";
};

backgroundChange();

// Exercise 9

let footerAddressChange = function () {
  let address = document.querySelector("footer p");
  address.innerHTML = "Fake Address";
};

footerAddressChange();

// Exercise 10

let amazonClass = function () {
  let amazon = document.getElementsByTagName("a");

  for (let a of amazon) {
    a.classList.add("amazon");
  }
};

amazonClass();

// Exercise 11

let imgClass = function () {
  let img = document.getElementsByTagName("img");

  for (let imgs of img) {
    imgs.classList.toggle("imgs");
  }
};

imgClass();

// Exercise 12

let priceColor = function () {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let price = document.querySelectorAll(".price");

  for (let i = 0; i < price.length; i++) {
    price[i].style.color = `#${randomColor}`;
  }

  //   for (let random of price) {
  //     random.style.color = `#${randomColor}`;
  //   }
};

priceColor();
