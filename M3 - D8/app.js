const bodyData = {
  name: "app test 1",
  description: "somthing longer",
  brand: "nokia",
  imageUrl:
    "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
  price: 100,
};

let json = JSON.stringify(bodyData);

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
    let body = await response.json();
    console.log(body);
  } catch (err) {
    console.log(err);
  }
};

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

api();
