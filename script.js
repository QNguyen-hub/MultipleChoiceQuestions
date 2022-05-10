var containerEl = document.getElementById("container");
var startBtn = document.getElementById("btn");
var questions = [
  {
    ask: "What does HTML stands for?",
    1: "Hypertext Markup Language",
    2: "Hightext Maker Language",
    3: "Height Trail Manuel Launch",
    answer: "Hypertext Markup Language",
  },
  {
    ask: "What does CSS stands for?",
    1: "Catching Style Shadows",
    2: "Cascading Style Sheets",
    3: "Crowd Styling Sheets",
    answer: "Cascading Style Sheets",
  },
];

startBtn.addEventListener("click", function () {
  var quizs = "";
  for (let i = 0; i < questions.length; i++) {
    quizs = questions[i].ask;
    containerEl.textContent = quizs;
  }
});
