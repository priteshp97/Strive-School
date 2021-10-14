const songs = document.querySelectorAll(".song");
const remove = document.querySelectorAll(".remove");

for (i = 0; i < remove.length; i++) {
  let temp = i;
  remove[i].addEventListener("click", function () {
    songs[temp].remove();
    console.log("test");
  });
}
