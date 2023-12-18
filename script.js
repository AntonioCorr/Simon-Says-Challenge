// pressing A key starts game
$(document).keydown(function(event) {
  if (event.key == "a") {
    var keysToPlay = [];
    startGame(1, keysToPlay);
  }
});



function startGame(levelNumber, keysToPlay) {
  // change header text to "level" + corresponding level number
  $("#level-title").text("Level " + levelNumber);
  //add key to list to be played
  addRandomKey(keysToPlay);
  //play all keys from list
  setTimeout(previewPingAll, 500, keysToPlay, 0);
  // enter loop to iterate through all keysToPlay
  var isCorrect = true;
  for (var i = 0; i < keysToPlay.length && isCorrect === true; i++) {
    console.log("Loop entered");
    var buttonToClick = keysToPlay[i];
    $(".btn").click(function(event) {
      buttonClicked = event.target.getAttribute("id");
      $(".btn").off("click");
      //debugger;
      var finalButtonIndex = keysToPlay.length - 1;
      if (i >= finalButtonIndex && buttonClicked === buttonToClick) {
        ping(buttonClicked);
        //$(".btn").off("click");
        startGame(levelNumber + 1, keysToPlay);
        console.log("next level");

      } else if (buttonClicked === buttonToClick) {
        ping(buttonClicked);
      }
      // if user hits wrong key, change header text to "Game Over, Press Any Key to Restart" & end loop
      else {
        isCorrect = false;
      }
      //$(".btn").off("click");
    });
  } // end loop
}

function ping(color) {
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
  $("." + color).toggleClass("pressed");
  setTimeout(() => {
    $("." + color).toggleClass("pressed");
  }, "200");
}

function previewPing(color) {
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
  $("." + color).fadeOut(200);
  $("." + color).fadeIn(200);
}


function addRandomKey(keyList) {
  var keyToAdd = Math.floor(Math.random() * 4);
  switch (keyToAdd) {
    case 0:
      keyList.push("green");
      break;
    case 1:
      keyList.push("red");
      break;
    case 2:
      keyList.push("yellow");
      break;
    case 3:
      keyList.push("blue");
      break;
    default:
      console.log(keyToAdd);
  }
}

function addEventListeners() {
  $(".btn").click(function(event) {

  });
}

function removeEventListeners() {}

function previewPingAll(array, index) {
  if (index < array.length) {
    previewPing(array[index]);
    setTimeout(previewPingAll, 500, array, index + 1);
  }
}









/*
var greenAudio = new Audio("sounds/green.mp3");
var redAudio = new Audio("sounds/red.mp3");
var yellowAudio = new Audio("sounds/yellow.mp3");
var blueAudio = new Audio("sounds/blue.mp3");
var wrongAudio = new Audio("sounds/wrong.mp3");

$(document).keydown(function(event) {

  if (event.key == "a") {

  const simonPattern = [];
  const userInputs = [];

  var levelNumber = 0;

    while (lastNumber(simonPattern) == lastNumber(userInputs)) {

      levelNumber++;
      $("#level-title").text("Level " + levelNumber);

      addNextButton(simonPattern);
      playAllNoises(simonPattern);

      const userInputs = [];

      $("#green").click(function() {
        userInputs.push(0);
      });
      $("#red").click(function() {
        userInputs.push(1);
      });
      $("#yellow").click(function() {
        userInputs.push(2);
      });
      $("#blue").click(function() {
        userInputs.push(3);
      });
    }
  }
})

function lastNumber(array) {
    return (array[array.length - 1]);
}

function addNextButton(array) {
  // appends a whole number from 0-3 to the arrat (4 options)
  var nextButton = Math.floor(Math.random() * 4);22
  array.push(nextButton);
}

function playLastButtonNoise(array) {
  switch (lastnumber(array)) {
    case 0:
      greenAudio.play();
      break;
    case 1:
      redAudio.play();
      break;
    case 2:
      yellowAudio.play();
      break;
    case 3:
      blueAudio.play();
      break;
    default:
      console.log(lastnumber(array));
  }
}

function playAllNoises(array) {
  for (var i; i < array.length; i++) {
      switch (array[i]) {
        case 0:
          greenAudio.play();
          break;
        case 1:
          redAudio.play();
          break;
        case 2:
          yellowAudio.play();
          break;
        case 3:
          blueAudio.play();
          break;
        default:
          console.log(array[i]);
      }
  }
}
*/
