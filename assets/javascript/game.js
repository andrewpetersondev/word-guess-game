// console.log("beginning of logic");

// GLOBAL VARIABLES 
// ================================================================================

// arrays and variables to hold data
var gameWords = ["blockchain", "ibm", "google", "amazon", "developer", "cryptocurrency", "cloud", "quantum computing", "artificial intelligence", "linux", "kali", "robots", "decentralization"];
var computerWord = "";
var lettersInComputerWord = [];
var numBlanks = 0;
var gameBoard = []; // i _ _
var wrongGuesses = [];

// Counters
var wins = 0;
var losses = 0;
var guessCount = 9;

// FUNCTIONS 
// ================================================================================

function startGame() {
    console.log("startGame() called");

    // set 
    computerWord = gameWords[Math.floor(Math.random() * gameWords.length)];
    lettersInComputerWord = computerWord.split('');
    numBlanks = lettersInComputerWord.length;

    // reset 
    guessCount = 9;
    wrongGuesses = [];
    gameBoard = [];

    // populate game board
    for (var i = 0; i < numBlanks; i++) {
        gameBoard.push("_");
    }

    // display to html
    // .join() joins array elements into a string
    document.getElementById("guess-counter").innerHTML = guessCount;
    document.getElementById("computer-word").innerHTML = gameBoard.join('  ');
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;

    //  test / debug
    console.log(computerWord);
    console.log(lettersInComputerWord);
    console.log(numBlanks);
    console.log(gameBoard);
};

function checkLetters(letter) {
   
    // testing and debugging
    console.log("checkLetters(letter) called");
    console.log(letter);

    // toggle boolean
    var letterInWord = false;

    // check if a letter is in game word
    for (var i = 0; i < numBlanks; i++) {
        if (computerWord[i] === letter) {
            letterInWord = true;
        }
    }

    // check where letters are in the game word then populate array
    if (letterInWord) {
        for (var j = 0; j < numBlanks; j++) {
            if (computerWord[j] === letter) {
                gameBoard[j] = letter;
            }
        }
    }

    // letter was not in word
    else {
        wrongGuesses.push(letter);
        guessCount--;
    }

    // testing and debugging
    console.log(gameBoard);

};

function gameOver() {

    // testing / debugging
    console.log("gameOver() called");
    console.log("Win Count: " + wins + " | Loss Count: " + losses + " | Guesses Left: " + guessCount);

    // update html
    document.getElementById("guess-counter").innerHTML = guessCount;
    document.getElementById("computer-word").innerHTML = gameBoard.join(' ');
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(' ');

    // user wins
    if (lettersInComputerWord.toString() === gameBoard.toString()) {
        wins++;
        // alert("you win");
        document.getElementById("wins").innerHTML = wins;
        startGame();
    }
    // user losses
    else if (guessCount <= 0) {
        losses++;
        alert("you lose");
        document.getElementById("losses").innerHTML = losses;
        startGame();
    }

}

// MAIN PROCESS
// ================================================================================

startGame();

// initiates the function for capturing key clicks
document.onkeyup = function (event) {

    // converts key clicks to lowercase letters and stores them in global variable
    var userInput = String.fromCharCode(event.keyCode).toLowerCase();

    // testing / debugging
    console.log(userInput);

    // runs check letters function with data from letters guessed string
    checkLetters(userInput);

    // runs everything else
    gameOver();

};
