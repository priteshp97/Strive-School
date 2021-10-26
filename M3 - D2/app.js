// fetch("https://randomuser.me/api/").then((resp) => {
//   resp.json();
// });

const h1 = document.querySelector(".one");
const h2 = document.querySelector(".two");
const h3 = document.querySelector(".three");
const btn = document.querySelector(".btn");
const img = document.querySelector(".img-container");
const url = "https://picsum.photos/200/300";

btn.addEventListener("click", () => {
  addColor(1000, h1, "red")
    .then(() => addColor(2000, h2, "blue"))
    .then(() => addColor(3000, h3, "green"))
    .catch((err) => console.log(err));
});

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`there is no such element ${element}`));
    }
  });
}

// btn.addEventListener("click", () => {
//   loadImage(url)
//     .then((data) => img.appendChild(data))
//     .catch((err) => {
//       console.log(err);
//     });
// });

// function loadImage(url) {
//   return new Promise((resolve, reject) => {
//     let img = new Image();
//     img.addEventListener("load", () => {
//       resolve(img);
//     });
//     img.addEventListener("error", () => {
//       reject(new Error("failed to load image from source url"));
//     });
//     img.src = url;
//   });
// }

// const promise = new Promise((resolve, reject) => {
//   let value = true;
//   if (value) {
//     resolve([1, 2, 4]);
//   } else {
//     reject("False");
//   }
// });

// console.log(promise);

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
