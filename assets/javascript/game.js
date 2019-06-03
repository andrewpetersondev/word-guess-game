// GLOBAL VARIABLES 
// ================================================================================

var gameWords = ["friends", "ape", "dog", "cat", "gif", "top", "true", "false", "input", "monkey", "desk", "whale", "dolphin"];

var computerWord = gameWords[Math.floor(Math.random() * gameWords.length)];

// console.log("Random Word = " + computerWord);

var validInputs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var lettersGuessed = "";
var userInput = "";
var rightGuessLetter = "";
var wrongGuessLetter = "";
var boardGame = [];

for (var i = 0; i < computerWord.length; i++) {
    boardGame[i] = "_";
}

var wins = 0;
var losses = 0;
var guessCount = 9;

// FUNCTIONS 
// ================================================================================

function initializeGame() {
    guessCount = 9;
    computerWord = gameWords[Math.floor(Math.random() * gameWords.length)];
    console.log("Random Word = " + computerWord);
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guess-counter").innerHTML = guessCount;
    document.getElementById("wrong-guesses").innerHTML = wrongGuessLetter;
}

function resetGame() {
    guessCount = 9;
    computerWord = gameWords[Math.floor(Math.random() * gameWords.length)];
    wrongGuessLetter = "";
    rightGuessLetter = "";
    userGuesses = [];
    boardGame = [];
    for (var i = 0; i < computerWord.length; i++) {
        boardGame[i] = "_";
    }
    userInput = "";
    // console.log("WinCount: " + wins + " | LossCount: " + losses + " | GuessCounter: " + guessCount);
    // console.log("Random Word = " + computerWord);
}

// MAIN PROCESS
// ================================================================================

document.onkeyup = function (event) {
    userInput = event.key;
    var displayBoardDiv = document.getElementById("computer-word");
    displayBoardDiv.textContent = boardGame.join(" ");
    if (validInputs.indexOf(userInput) !== -1) {
        // if (userGuesses.indexOf(userInput) === -1) {
        // insert userInput into userGuesses array
        // userGuesses.push(userInput);
        // for (var i = 0; i < computerWord.length; i++) {
        //     if (computerWord[i] == userInput) {
        //         boardGame[i] == userInput;
        //     }
        // }
        // indexOf returns -1 if value is not in array
        if (computerWord.indexOf(userInput) !== -1) {
            boardGame[computerWord.indexOf(userInput)] = userInput;
            displayBoardDiv.textContent = boardGame.join(" ");
            rightGuessLetter = rightGuessLetter + userInput;
            // player wins
            if (computerWord === rightGuessLetter) {
                wins++;
                document.getElementById("wins").innerHTML = wins;
                resetGame();
            }
        }
        else {
            guessCount--;
            document.getElementById("guess-counter").innerHTML = guessCount;
            // store wrong guess in a string 
            wrongGuessLetter = wrongGuessLetter + userInput + " , ";
            var outputWrongDiv = document.getElementById("wrong-guesses");
            outputWrongDiv.textContent = wrongGuessLetter;
        }
        // player loses 
        if (guessCount <= 0) {
            losses++;
            document.getElementById("losses").innerHTML = losses;
            resetGame();
        }
        // } 
        // else {
        //     alert("you already selected that, guess again");
        // }
    }
    else {
        alert("that is not a valid input, guess again");
    }
};
