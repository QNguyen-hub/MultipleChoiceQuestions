var startBtn = document.querySelector("#start");
var quizBox = document.querySelector("#container-quiz");
var quiz = document.querySelector("#quiz");
var choices = document.querySelector("#choice");
var button = document.querySelector("button");
var list = document.querySelector("#answer-list");
var randomQuestion;
var curQuestionIndex = 0;
var answersChoice = document.querySelector("#choice");
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
];

startBtn.addEventListener("click", start);

function start() {
  startBtn.setAttribute("class", "hide");
  randomQuestions = questions.sort(() => Math.random() - 0.5);
  quizBox.removeAttribute("class", "hide");
  nextquiz();
}
function displayQuestion(questions) {
  quiz.textContent = questions.question;
  questions.answer.forEach(function (answer) {
    var button = document.createElement("button");
    button.innerText = answer.text;
    if (answer.correct) {
      nextquiz;
    }
    button.addEventListener("click", selectAnswer);
    list.appendChild(button);
  });
}
function nextquiz() {
  displayQuestion(questions[curQuestionIndex]);
}

function answer() {}
