const primary = document.querySelector(".primary");
const secondary = document.querySelector(".secondary");
const img = document.querySelectorAll(".img img");
const p = document.querySelectorAll(".card-body p");

let url = "";

const obj = {
  method: "GET",
  headers: {
    Authorization: "563492ad6f917000010000010a56d88430f04a09933755c791fcb59b",
  },
};

fetch("https://api.pexels.com/v1/search?query=nature&per_page=10", obj)
  .then((response) => response.json())
  .then((body) => {
    primary.addEventListener("click", () => {
      for (let i = 0; i < img.length; i++) {
        let url = body.photos[i].src.large;
        img[i].src = url;
        // let image = document.createElement("img");
        // image.src = url;
        // img[i].replaceWith(image);
      }
    });
  });

fetch("https://api.pexels.com/v1/search?query=city&per_page=10", obj)
  .then((response) => response.json())
  .then((body) => {
    secondary.addEventListener("click", () => {
      for (let i = 0; i < img.length; i++) {
        let url = body.photos[i].src.large;
        img[i].src = url;
        // let image = document.createElement("img");
        // image.src = url;
        // img[i].replaceWith(image);
      }
    });
  });

for (let i = 0; i < p.length; i++) {
  p[i].textContent = "Text has been replaced";
}
