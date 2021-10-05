const startBtn = document.getElementById("start-btn");
const startBtnContainer = document.querySelector(".start-btn");
const quizContainer = document.querySelector(".quiz-container");

startBtn.addEventListener("click", function () {
  startBtnContainer.classList.add("start-btn-none");
  quizContainer.classList.add("quiz-container-grid");
});
