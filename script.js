var startBtn = document.querySelector("#start");
var quizBox = document.querySelector("#container-quiz");
var quiz = document.querySelector("#quiz");
var choices = document.querySelector("#choice");
var list = document.querySelector("#answer-list");
var curQuestionIndex = 0;
var answersChoice = document.querySelector("#choice");
var score = 0;
var count = 60;
var timer = document.querySelector("#timer");
var questions = [
  {
    question: "What is HTML",
    answer: [
      { text: "HTML", correct: true },
      { text: "HTMA", correct: false },
      { text: "HTMB", correct: false },
      { text: "HTMC", correct: false },
    ],
  },
  {
    question: "What is CSS",
    answer: [
      { text: "CSA", correct: false },
      { text: "CST", correct: false },
      { text: "CSS", correct: false },
      { text: "CSR", correct: true },
    ],
  },
];

startBtn.addEventListener("click", start);

function start() {
  countDown();
  startBtn.setAttribute("class", "hide");
  nextquiz();
}
function displayQuestion(questions) {
  quiz.textContent = questions.question;
  questions.answer.forEach(function (answer) {
    var button = document.createElement("button");
    button.textContent = answer.text;
    list.appendChild(button);
    button.addEventListener("click", function () {
      if (answer.correct) {
        list.setAttribute("class", "hide");
        curQuestionIndex++;
        score++;
        nextquiz();
      } else {
        countDown - 2;
      }
    });
  });
}
function nextquiz() {
  displayQuestion(questions[curQuestionIndex]);
}

function countDown() {
  var countDnTim = setInterval(function () {
    count--;
    timer.textContent = "Time: " + count;
    if (count === 0) {
      clearInterval(countDnTim);
    }
  }, 1000);
}
