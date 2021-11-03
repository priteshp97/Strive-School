const bodyData = {
  name: "Nokia 3550",
  description: "some description",
  brand: "nokia",
  imageUrl:
    "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80",
  price: 500,
};

let json = JSON.stringify(bodyData);

let array = ["6182a701aacaa2001552a59e", "6182a70faacaa2001552a59f"];

const obj = {
  method: "POST",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOTRjYWFhY2FhMjAwMTU1MmExOWMiLCJpYXQiOjE2MzU5NDc3MjIsImV4cCI6MTYzNzE1NzMyMn0.iADXUoghFqm1Ar9In_6vTvfSvSVRBnJUL0Qr7XOFva8",
    "Content-Type": "application/json",
  },
  body: json,
};

let api = async () => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/product/",
      obj
    );
    if (response.ok) {
      let body = await response.json();
      let container = document.querySelector(".container");
      container.innerHTML += `
        <article class="card">
        <div class="img-container">
          <img
            src="${body.imageUrl}"
            alt=""
          />
        </div>
        <div class="body">
        <p>${body.name}</p>
        <p>${body.description}</p>
          <p>${body.brand}</p>
          <p>${"£" + body.price}</p>
        </div>
      </article>`;
    } else {
      throw new Error("Something went wrong");
    }
  } catch (err) {
    console.log(err);
  }
};

const get = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOTRjYWFhY2FhMjAwMTU1MmExOWMiLCJpYXQiOjE2MzU5NDc3MjIsImV4cCI6MTYzNzE1NzMyMn0.iADXUoghFqm1Ar9In_6vTvfSvSVRBnJUL0Qr7XOFva8",
  },
};

array.forEach((element) => {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${element}`, get)
    .then((response) => response.json())
    .then((dat) => {
      let container = document.querySelector(".container");
      container.innerHTML += `
        <article class="card">
        <div class="img-container">
          <img
            src="${dat.imageUrl}"
            alt=""
          />
        </div>
        <div class="body">
        <p>${dat.name}</p>
        <p>${dat.description}</p>
          <p>${dat.brand}</p>
          <p>${"£" + dat.price}</p>
        </div>
      </article>`;
    });
});

// fetch("https://striveschool-api.herokuapp.com/api/product/", {
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOTRjYWFhY2FhMjAwMTU1MmExOWMiLCJpYXQiOjE2MzU5NDc3MjIsImV4cCI6MTYzNzE1NzMyMn0.iADXUoghFqm1Ar9In_6vTvfSvSVRBnJUL0Qr7XOFva8",
//   },
// })
//   .then((response) => response.json())
//   .then((body) => {
//     console.log(body);
//   });

// api();
