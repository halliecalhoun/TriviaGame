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

// declare golbal variables:
var startTimer;
var hidContent;
var number = 31;
var intervalId;
var correctAnswers = 0;
var wrongAnswers = 0;
var unanswerCount = 0;
var timeRemaining = false;
var score = 0;
var timeRunning = false;
// Variable to hold the index of current question.
var questionIndex = 0;
// var choices = [];
var answers;
var holdArray = [];
var newArray = [];
var pick;
var index;
var userGuess = "";
// var userChoice = questions[0].choices;
// var resumeGame = true;
// var choicesBtn = "";
var qCount = questions.length;


$(document).ready(function() {
var questions = [
    {   
        q: "What year did Alcatraz open as a federal prison?",
        choices: ["1955", "1934", "1941", "1928"],
        answers: 1,
        photo: "assets/images/alcatraz-1630477_640.jpg"
    },
   
    {   q: "What is the nickname for the color of the Golden Gate Bridge?",
        choices: ["International Orange", "Sunset Red", "Gold Goddess", "Golden State Orange"],
        answers: 0,
        photo: "assets/images/ggb_1.jpg"
    },
  
    {   q: "Which pier in San Francisco is known as the Fishing Pier?",
        choices: ["Pier 39", "Pier 5", "Pier 29", "Pier 7"],
        answers: 3,
        photo: "assets/images/pier7.jpg"
    },
   
  {   q: "How long is the Golden Gate Bridge?",
      choices: ["2.1 Miles", "1.7 Miles", "2.5 Miles", "1.5 Miles"],
      answers: 1,
      photo: "assets/images/ggb_2.jpg"
  },
  
  {   q: "At Fisherman's Wharf, there is a pier that is popular with both tourists and sea lions. Which pier is it?",
      choices: ["Pier 31", "Pier 35", "Pier 39", "Pier 37"],
      answers: 2,
      photo: "assets/images/pier39.jpg"
  }];

// console.log(questions[0].q);
// We start the game with a score of 0.
// FUNCTIONS
// ==============================================================================
// function for making sure document is ready
// $(document).ready(function(){
  $("#reset").hide();
  
  $("#start").on("click", function(){
    $("#start").hide();
    run();
    nextQuestion();
    for (var i = 0; i < questions.length; i++) {
      holdArray.push(questions[i]);
    }
    })

    function run() {
      if (!timeRunning) {   
      intervalId = setInterval(decrement, 1000);
      timeRunning = true;
      }
}

function decrement() {
  number--;
  // decremends that variable and appends it to html
  $("#show-number").html("<h3>" + "Time Remaining: " + number + "</h3>");
  if (number === 0) {
    unanswerCount++;
    stop();
    $("#answer").html("<p>" + "Incorrect! The correct answer is: " + pick.choices[pick.answers] + "</p>");
    userGuess = "";
    // nextQuestion();
    clearContent();
  }
}

$("#stop").on("click", stop);
function stop() {
  timeRunning = false;
  clearInterval(intervalId);
}



function nextQuestion() {
index = Math.floor(Math.random() * questions.length);
pick = questions[index];

// if (pick.shown) {
//   nextQuestion();
// } else {
//   console.log(pick.q);
// if (i <= (pick.choices.length - 1)) {
  // $("#questions").html("<h2>" + questions[questionIndex].q + "</h2>");
  for (var i = 0; i < pick.choices.length; i++) {
  $("#questions").html("<h2>" + pick.q + "</h2>");
  // var userChoice = $("<div>"); v
  var choicesBtn = $("<button>")
  choicesBtn.addClass("choices-button");
  choicesBtn.html(pick.choices[i]);
  choicesBtn.attr("data-guessvalue", i);
  // choicesBtn.attr("data-guessvalue", i);
  $("#answer").append(choicesBtn);
// } else {
//   clearContent();
// }
  }

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
// 



$(".choices-button").on("click", function() {
  userGuess = parseInt($(this).attr("data-guessvalue"));
  // var buttonsValue = $(this).attr("data-choices"); {
  if (userGuess === pick.answers) {
    stop();
    correctAnswers++;
    userGuess = "";
    $("#answer").html("<p>" + "You are correct!" + "</p>");
    // nextQuestion();
    clearContent();
  } else {
    stop();
    wrongAnswers++;
    userGuess = "";
    $("#answer").html("<p>" + "Incorrect! The correct answer is: " + pick.choices[pick.answers] + "</p>");
    // nextQuestion();
    clearContent();
  }
})
}

  //   var userChoice = questions[questionIndex].choices[i]
  // if (userChoice === questions[questionIndex].answers) {
  //     alert("you are right");
  //   } else {
  //     alert("you are wrong");
  //   }



// Function to render questions.
    // function renderQuestion() {
    //   // If there are still more questions, render the next one.
    //   if (questionIndex <= (questions.length - 1)) {
    //     nextQuestion();
    //     // function nextQuestion() {
    //     // $("#main-div").html("<h2>" + questions[questionIndex].q + "</h2>");
    //   }
    //   // If there aren't, render the end game screen.
    //   else {
    //     clearContent();
    //     // $("#main-div").html("Game Over!");
    //     // $("#score").html("Final Score: " + score + " out of " + questions.length);
    //   }
    // }

function clearContent () {
  
  $("#answer").append("<img src=" + pick.photo + ">");
	newArray.push(pick);
  questions.splice(index, 1);
  
  var hidontent = setTimeout(function() {
    $("#answer").empty();
    number = 31;
 
    // if (pick) {
    
    if ((correctAnswers + wrongAnswers + unanswerCount) === 5) {
      $("#questions").empty();
      $("#answer").empty();
      $("#questions").html("<h3>" + "Game over! Here is how you did: " + "</h3>");
      $("#answer").append("<h4>" + "Correct: " + correctAnswers + "</h4>");
      $("#answer").append("<h4>" + "Incorrect: " + wrongAnswers + "</h4>");
      $("#answer").append("<h4>" + "Unanswered " + unanswerCount + "</h4>");
      $("#reset").show();
      correctCount = 0;
      wrongCount = 0;
      unanswerCount = 0;
    } else {
      run();
      nextQuestion();
    }
  
  }, 3000);
  }


$("#reset").on("click", function() {
  $("#reset").hide();
  $("#answer").empty();
  $("#questions").empty();
  for (var i = 0; i < holdArray.length; i++) {
    questions.push(holdArray[i]);
  }
  run();
  nextQuestion();
})

})





// Function that updates the score...

  // function updateScore() {
  //   $("#score").html("Score: " + score);
  // }


  // function renderAnswer() {
  //   for (var i = 0; i < questions[0].choices.length; i++) {
  //     console.log(questions[0].choices[i]);
  //     $("#main-div").html("<p>" + questions[questionIndex].choices[i] + "</p>");
  //   }
  // }  


  // function checkAnswer() {
  //   if (userChoice === questions[questionIndex].choices.answers) {
  //       $("result").text("Your Answer: " + userChoice + " is correct!")
  //       nextQuestion();
  //     }
  //   }


//     $("#main-div").html(questions[questionIndex].a);
// }
// function displayDiv() {
//     $("#main-div").html(q1);
// }
