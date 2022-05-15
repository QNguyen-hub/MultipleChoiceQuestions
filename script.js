var startBtn = document.querySelector("#start");
var quizBox = document.querySelector("#container-quiz");
var quiz = document.querySelector("#quiz");
var choices = document.querySelector("#choice");
var list = document.querySelector("#answer-list");
var curQuestionIndex = 0;
var answersChoice = document.querySelector("#choice");
var scoreTracking = document.querySelector("#score");
var score = 0;
var count = 90;
var timer = document.querySelector("#timer");
var questions = [
  {
    question: "What is HTML",
    answer: [
      { text: "Hypertext Markup Language", correct: true },
      { text: "Hydrotext Maker Launch", correct: false },
      { text: "Horseteeth Making Log", correct: false },
      { text: "Hey There Ma La", correct: false },
    ],
  },
  {
    question: "What is CSS",
    answer: [
      { text: "Case Shop Style", correct: false },
      { text: "Cash Store Safe", correct: false },
      { text: "Cascading Sheet Style", correct: false },
      { text: "Cascading Style Sheets", correct: true },
    ],
  },
  {
    question: "What is JS",
    answer: [
      { text: "Javascript", correct: true },
      { text: "Java", correct: false },
      { text: "Javestyle", correct: false },
      { text: "Javasheets", correct: false },
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
        // list.setAttribute("class", "hide");
        curQuestionIndex++;
        score++;
        nextquiz();
      } else {
        count -= 2;
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
scoreTracking.textContent = score;
