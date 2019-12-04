// global variables
// ===========================================================================================================================================

var words = ["mario", "luigi", "peach", "bowser", "yoshi"];

var randomWord = "";

var blanksQuantity = 0;

var blanksAndCorrectGuesses = [];

var wrongGuesses = [];

var wins = 0;

var losses = 0;

var numGuesses = 7;

// functions
// ===========================================================================================================================================

function setPlayerName(name) {
  const playerName = document.getElementById("name").value;
  console.log(playerName);
}

function startGame() {
  // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.
  // console.log("WinCount: " + wins + " | LossCount: " + losses + " | NumGuesses: " + numGuesses);

  // reset variables
  numGuesses = 7;
  blanksAndCorrectGuesses = [];
  wrongGuesses = [];

  // choose word
  randomWord = words[Math.floor(Math.random() * words.length)];
  // console.log(randomWord);

  // split the word into individual letters
  lettersInRandomWord = randomWord.split("");
  console.log(lettersInRandomWord);

  // store the length of the word so we know how many blanks to generate
  blanksQuantity = lettersInRandomWord.length;
  // console.log(blanksQuantity);

  // create blanks display
  for (var i = 0; i < blanksQuantity; i++) {
    blanksAndCorrectGuesses.push("_");
  }

  // display at the start of the round
  document.getElementById("guess-counter").innerHTML = numGuesses;
  document.getElementById(
    "computer-word"
  ).innerHTML = blanksAndCorrectGuesses.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

function checkLetter(letter) {
  // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.
  // console.log("WinCount: " + wins + " | LossCount: " + losses + " | NumGuesses: " + numGuesses);

  // creating a boolean variable is an effective way to toggle a function on and off
  var letterInWordToggle = false;

  // check if the letter guessed is in the random word
  for (var i = 0; i < blanksQuantity; i++) {
    if (randomWord[i] === letter) {
      letterInWordToggle = true;
    }
  }

  if (letterInWordToggle) {
    for (var j = 0; j < blanksQuantity; j++) {
      if (randomWord[j] === letter) {
        blanksAndCorrectGuesses[j] = letter;
      }
    }
    console.log(blanksAndCorrectGuesses);
  } else {
    wrongGuesses.push(letter);
    numGuesses--;
  }
}

function roundComplete() {
  // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.
  console.log(
    "WinCount: " +
      wins +
      " | LossCount: " +
      losses +
      " | NumGuesses: " +
      numGuesses
  );

  // update html
  document.getElementById("guess-counter").innerHTML = numGuesses;
  document.getElementById(
    "computer-word"
  ).innerHTML = blanksAndCorrectGuesses.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  // check if you guessed all the letters
  if (lettersInRandomWord.toString() === blanksAndCorrectGuesses.toString()) {
    wins++;
    alert("you won!");
    document.getElementById("wins").innerHTML = wins;
    startGame();
  } else if (numGuesses === 0) {
    losses++;
    alert("you lost");
    document.getElementById("losses").innerHTML = losses;
    startGame();
  }
}

// main processes
// ===========================================================================================================================================

// when page loads start game
startGame();

// when key clicked do something
document.onkeyup = function(event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    var letterGuessed = event.key.toLowerCase();
    checkLetter(letterGuessed);
    roundComplete();
  }
};
