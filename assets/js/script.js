var introContainer = document.querySelector(".quiz-intro");
var questionScreen = document.querySelector(".question-screens");
var quizFinish = document.querySelector(".quiz-finish");
var highScores = document.querySelector(".high-score");

var  startButton = introContainer.querySelector("button");
startButton.addEventListener("click", startQuiz);

function startQuiz () {
    introContainer.style.display = "none";
    questionScreen.style.display = "block";
};