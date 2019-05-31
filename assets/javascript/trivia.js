// create multiple divs to display and not display
// upon click show next div and start timer
var startTimer;
var number = 30;
var intervalId;
var correctAnswers = 0;
var wrongAnswers = 0;
var timeRemaining = false;
var questionIndex = 0;


var questions = [
    {   q: "Is this a question?",
        a: "Yes",
        a: "yes",
        a: "yes",
        a: "yes",
    },
    {   q: "Is this a question?",
        a: "Yes",
        a: "yes",
        a: "yes",
        a: "yes",
    },
    {   q: "Is this a question?",
        a: "Yes",
        a: "yes",
        a: "yes",
        a: "yes",
    },

];

// We start the game with a score of 0.
var score = 0;
// Variable to hold the index of current question.
var questionIndex = 0;

// FUNCTIONS
// ==============================================================================

// Function to render questions.
function renderQuestion() {
  // If there are still more questions, render the next one.
  if (questionIndex <= (questions.length - 1)) {
    $("#main-div").html(questions[questionIndex].q);
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



// function displayDiv() {
//     $("#main-div").html(q1);
// }

$("#start").on("click", run)

// append question 1 to html
function run() {      
// console.log("click");
  intervalId = setInterval(decrement, 1000);
  renderQuestion();
  updateScore();
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

//   function updateDisplay() {
//     q1 = $(".main-div").attr("value", q1.toString());
//   }
}

$("#stop").on("click", stop);
function stop() {
  clearInterval(intervalId);
}


 