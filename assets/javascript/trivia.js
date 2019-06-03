// create multiple divs to display and not display
// upon click show next div and start timer
var startTimer;
var number = 30;
var intervalId;
var correctAnswers = 0;
var wrongAnswers = 0;
var timeRemaining = false;
var questionIndex = 0;
var score = 0;
// Variable to hold the index of current question.
var questionIndex = 0;
var choices = [];
var answers;
// var userChoice = questions[0].choices;
var resumeGame = true;
var userChoice;



var questions = {
  set1: {   
        q: "Is this a question?",
        choices: ["yes", "no", "maybe"],
        answers: 0
    },
  set2: 
    {   q: "Is this a question?",
        choices: ["yes", "no", "maybe"],
        answers: 2
    },
  set3:
    {   q: "Is this a question?",
        choices: ["yes", "no", "maybe"],
        answers: 1
    },
  }
// console.log(questions[0].q);
// We start the game with a score of 0.
// FUNCTIONS
// ==============================================================================
// function nextQuestion() {
for (var i = 0; i < questions[questionIndex].choices.length; i++) {
  // var questions = $("<div>")
  $("#questions").html("<h2>" + questions[questionIndex].q + "</h2>");
  var choicesBtn = $("<button>")
  choicesBtn.addClass("choices-button");
  choicesBtn.attr("data-choices", questions[questionIndex].choices[i]);
  choicesBtn.text(questions[questionIndex].choices[i]);
  $("#buttons").append(choicesBtn);
// { 
//   $("#btnA").append("<p>" + questions[questionIndex].choices[0] + "</p>");
//   $("#btnB").append("<p>" + questions[questionIndex].choices[1] + "</p>");
//   $("#btnC").append("<p>" + questions[questionIndex].choices[2] + "</p>");
//   $("#btnD").append("<p>" + questions[questionIndex].choices[3] + "</p>");
//   var choicesIndex = (questions[questionIndex].choices[i]);
//   $("#btnA").attr("value", choicesIndex.toString());
//   $("#btnB").attr("value", choicesIndex.toString());
//   $("#btnC").attr("value", choicesIndex.toString());
//   $("#btnD").attr("value", choicesIndex.toString());
// }

}

$(".choices-button").on("click", function() {
  var buttonsValue = $(this).attr("data-choices"); {
  if (buttonsValue === questions[questionIndex].answers) {
    alert("you are right");
  } else {
    alert("you are wrong");
  }
}
  //   var userChoice = questions[questionIndex].choices[i]
  // if (userChoice === questions[questionIndex].answers) {
  //     alert("you are right");
  //   } else {
  //     alert("you are wrong");
  //   }

  })






// Function to render questions.
function renderQuestion() {
  // If there are still more questions, render the next one.
  if (questionIndex <= (questions.length - 1)) {
    nextQuestion();
    // function nextQuestion() {
    // $("#main-div").html("<h2>" + questions[questionIndex].q + "</h2>");
  }
  // If there aren't, render the end game screen.
  else {
    $("#main-div").html("Game Over!");
    $("#score").html("Final Score: " + score + " out of " + questions.length);
  }
}
// Function that updates the score...
function updateScore() {
  $("#score").html("Score: " + score);
}
function renderAnswer() {
  for (var i = 0; i < questions[0].choices.length; i++) {
    console.log(questions[0].choices[i]);
    $("#main-div").html("<p>" + questions[questionIndex].choices[i] + "</p>");
  }
}  
function checkAnswer() {
  if (userChoice === questions[questionIndex].choices.answers) {
      $("result").html("Your Answer: " + userChoice + " is correct!")
      nextQuestion();
    }
  }
//     $("#main-div").html(questions[questionIndex].a);
// }
// function displayDiv() {
//     $("#main-div").html(q1);
// }
$("#start").on("click", run);
// append question 1 to html
function run() {      
// console.log("click");
  intervalId = setInterval(decrement, 1000);
//   $("#main-div").html(quizArray[questionIndex]);
}
function decrement() {
  number--;
  // decremends that variable and appends it to html
  $("#show-number").html(number);
  if (number === 0) {
    stop();
    alert("Time Up!");
  }

$("#stop").on("click", stop);
function stop() {
  clearInterval(intervalId);
}

// function for making sure document is ready
// $(document).ready(function(){
  $("#start").on("click", function(){
    run();
    renderQuestion();
    renderAnswer();
    checkAnswer();
    updateScore();
  })
}

$(".buttons")
  // renderQuestion();
  // renderAnswer();
