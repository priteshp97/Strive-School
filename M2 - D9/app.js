const songs = document.querySelectorAll(".song");
const remove = document.querySelectorAll(".remove");

for (i = 0; i < remove.length; i++) {
  remove.addEventListener("click", function () {
    songs.remove();
    console.log("hello");
  });
}
