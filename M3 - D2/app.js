// fetch("https://randomuser.me/api/").then((resp) => {
//   resp.json();
// });

const btn = document.querySelector(".btn");
const img = document.querySelector(".img-container");
const url = "https://picsum.photos/200/300";

btn.addEventListener("click", () => {
  loadImage(url).then((data) => console.log(data));
});

function loadImage(url) {
  const prom = new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener("load", () => {
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error("failed to load image from source url"));
    });
    img.src = url;
  });
  return prom;
}

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
