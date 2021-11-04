const name = document.getElementById("name");
const description = document.getElementById("description");
const brand = document.getElementById("brand");
const imageUrl = document.getElementById("imageUrl");
const price = document.getElementById("price");
const form = document.getElementById("form");
const submit = document.getElementById("submit");

// populate page

const get = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOTRjYWFhY2FhMjAwMTU1MmExOWMiLCJpYXQiOjE2MzU5NDc3MjIsImV4cCI6MTYzNzE1NzMyMn0.iADXUoghFqm1Ar9In_6vTvfSvSVRBnJUL0Qr7XOFva8",
  },
};

let getObjects = async () => {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/product`,
      get
    );
    if (response.ok) {
      let body = await response.json();
      console.log(body);
      body.forEach((products) => {
        let container = document.querySelector(".container");
        container.innerHTML += `
        <article class="card">
        <div class="img-container">
          <img
            src="${products.imageUrl}"
            alt=""
          />
        </div>
        <div class="body">
        <p>${products.name}</p>
        <p>${products.description}</p>
          <p>${products.brand}</p>
          <p>${"£" + products.price}</p>
          <a href="details.html?id=${
            products._id
          }" target="_blank">View Details</a>
        </div>
      </article>`;
      });
      let container = document.querySelector(".container");
    } else {
      throw new Error("Some sort of error");
    }
  } catch (error) {
    console.log(error);
  }
};

getObjects();

// view details

let urlId = window.location.search;
let params = new URLSearchParams(urlId);
let id = params.get("id");
console.log(id);

let viewDetails = async () => {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/product/${id}`,
      get
    );

    if (response.ok) {
      let body = await response.json();
      console.log(body);
      let details = (document.querySelector(".details").innerHTML = `
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
    </article>`);
    } else {
      throw Error("Fetch didn't work");
    }
  } catch (error) {
    console.log(error);
  }
};

viewDetails();

// POST

function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

submit.addEventListener("click", () => {
  const bodyData = {};
  bodyData.name = name.value;
  bodyData.description = description.value;
  bodyData.brand = brand.value;
  bodyData.imageUrl = imageUrl.value;
  bodyData.price = price.value;
  console.log(bodyData);
  let json = JSON.stringify(bodyData);
  let post = {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOTRjYWFhY2FhMjAwMTU1MmExOWMiLCJpYXQiOjE2MzU5NDc3MjIsImV4cCI6MTYzNzE1NzMyMn0.iADXUoghFqm1Ar9In_6vTvfSvSVRBnJUL0Qr7XOFva8",
      "Content-Type": "application/json",
    },
    body: json,
  };

  let postObject = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/product/",
        post
      );
      if (response.ok) {
        let body = await response.json();
        console.log(body);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };

  postObject();
});

// fetch(`https://striveschool-api.herokuapp.com/api/product`, get)
//   .then((response) => response.json())
//   .then((products) => {
//     products.forEach((product) => {
//       let container = document.querySelector(".container");
//       container.innerHTML += `
//         <article class="card">
//         <div class="img-container">
//           <img
//             src="${product.imageUrl}"
//             alt=""
//           />
//         </div>
//         <div class="body">
//         <p>${product.name}</p>
//         <p>${product.description}</p>
//           <p>${product.brand}</p>
//           <p>${"£" + product.price}</p>
//         </div>
//       </article>`;
//     });
//   });
