// create multiple divs to display and not display
// upon click show next div and start timer

// pseudo code:
//front end

//div for title id="TopTitle"

//div start btn  id="start"

//div store all question and ans and timer

//div for timer id="timer"

//div for question id="question"

//div for answer id="answer"



//backend
//timer .. class

//stopTimer fx

//restart timer fx

//timer fx that decrements the time

// display div 


//nextQuestion() function
//display timer
//display one question at a time 
//display answers
 



//if users clicks
//check to see if it not the end of the game (array length) 
	//if correct
	//new screen says congrats
	//then go to next question nextQuestion()
	//else
	//stop timer
	//reset timer
	//this means users is incorrect
	//tell user wrong
	//display correct ans
	//stop timer
	//reset timer
	//go to next question nextQuestion()

//else
//you are at the end of the game
//display final screen show correct ans.
// incorr ans
//option to restart game



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
  q1: {   
        q: "What year did Alcatraz open as a federal prison?",
        choices: ["1955", "1934", "1941", "1928"],
        answers: 1
    },
  q2: 
    {   q: "What is the nickname for the color of the Golden Gate Bridge?",
        choices: ["International Orange", "Sunset Red", "Gold Goddess", "Golden State Orange"],
        answers: 0
    },
  q3:
    {   q: "Which pier in San Francisco is known as the Fishing Pier?",
        choices: ["39", "5", "29", "7"],
        answers: 3
    },
  q4: 
  {   q: "How long is the Golden Gate Bridge?",
      choices: ["2.1 Miles", "1.7 Miles", "2.5 Miles", "1.5 Miles"],
      answers: 1
  },
  q5: 
  {   q: "At Fisherman's Wharf, there is a pier that is popular with both tourists and sea lions. Which pier is it?",
      choices: ["Pier 31", "Pier 35", "Pier 39", "Pier 37"],
      answers: 2
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
