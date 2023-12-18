var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameStarted = false;

$(document).keydown(function() {
  if (gameStarted === false) {
    nextSequence();
  }
});

function nextSequence() {

  gameStarted = true;

  $(".btn").off("click");

  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  $("." + randomChosenColor).fadeOut(200);
  $("." + randomChosenColor).fadeIn(200);

  playSound(randomChosenColor)

  $(".btn").click(function(event) {
    var userChosenColor = event.target.getAttribute("id");
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
  });
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern [currentLevel]) {
    console.log("success");
  }
  else {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").toggleClass("game-over");
    setTimeout(() => {
      $("body").toggleClass("game-over");
    }, "200");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
    console.log("wrong");
  }

  if  (currentLevel === (gamePattern.length - 1)) {
    setTimeout(() => {
      nextSequence();
    }, "1000");
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  gameStarted = false;
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("." + currentColor).toggleClass("pressed");
  setTimeout(() => {
    $("." + currentColor).toggleClass("pressed");
  }, "100");
}
