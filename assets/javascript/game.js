// ================== GLOBAL VARIABLES =================
// list of words for game
var gameWords = ["friends", "ape", "dog", "cat", "gif", "top", "true", "false", "input", "monkey", "desk", "whale", "dolphin"];

// random word 
var computerWord = gameWords[Math.floor(Math.random() * gameWords.length)];

console.log(computerWord);

// only these inputs are valid
var validInputs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Game Counter
var wins = 0;
var losses = 0;
var guessCount = 9;

// user inputs and display
// use string concatenation on this varible to form the whole word and compare to the gameWord
var rightGuessLetter = "";
// use string concatenation on this variable to display wrong guesses
var wrongGuessLetter = ""; 
var userGuesses = [];
var boardGame = [];
for (var i = 0; i < computerWord.length; i++) {
    boardGame[i] = "_";
}

var userInput = "";

// ================ FUNCTIONS ===================================
function initializeGame() {
    document.getElementById("directions-text").innerHTML = "Press any key to start playing!";
    document.getElementById("wins").innerHTML = "wins : " + wins;
    document.getElementById("losses").innerHTML = "losses : " + losses;
    document.getElementById("wrong-guesses").innerHTML = "wrong guesses : " + wrongGuessLetter;
    document.getElementById("user-guesses").innerHTML = "<b>You already guessed :</b>  " + userGuesses + " ";
    document.getElementById("guess-counter").innerHTML = guessCount;
}

initializeGame();

function resetGame() {
    guessCount = 9;
    computerWord = gameWords[Math.floor(Math.random() * gameWords.length)];
    wrongGuessLetter = "";
    // wrongGuessLetter = [];
    rightGuessLetter = "";
    userGuesses = [];
    boardGame = [];
    for (var i = 0; i < computerWord.length; i++) {
        boardGame[i] = "_";
    }
    console.log(computerWord);
}

// ======================== MAIN PROCESS ==============================
document.onkeyup = function (event) {

    var userInput = event.key.toLowerCase();

    // create a variable to target html div holding the computer word
    var displayBoardDiv = document.getElementById("computer-word");

    // input correct 
    displayBoardDiv.textContent = boardGame.join(" ");

    // make sure user input is a letter
    if (validInputs.indexOf(userInput) !== -1) {

        // make sure the user can only enter the same input once
        // this statment doesnt work yet
        if (userGuesses.indexOf(userInput) === -1) {

            // insert userInput into userGuesses array
            userGuesses.push(userInput);
            console.log(userGuesses);


            // for (i = 0; i < computerWord.length; i++) {
            //     if (computerWord[i] == userInput) {
            //         boardGame[i] == userInput;
            //     }
            // }

            // check if userInput is in computer word array
            if (computerWord.indexOf(userInput) !== -1) {

                // replaces the underscore with the correct guess letter
                boardGame[computerWord.indexOf(userInput)] = userInput;

                displayBoardDiv.textContent = boardGame.join(" ");

                // string concatenation to form computer pick word
                rightGuessLetter = rightGuessLetter + userInput;

                // player wins
                if (computerWord === rightGuessLetter) {
                    // increment wins by 1
                    wins++;
                    // update wins counter on html page
                    document.getElementById("wins").innerHTML = wins;
                    // reset the game
                    resetGame();
                }

            }
            else {
                // decrement guess count by 1
                guessCount--;

                // update guess counter in html
                document.getElementById("guess-counter").innerHTML = guessCount;

                // store wrong guess in a string 
                wrongGuessLetter = wrongGuessLetter + userInput + " , ";
                console.log(wrongGuessLetter);

                // 
                var outputWrongDiv = document.getElementById("wrong-guesses");

                outputWrongDiv.textContext = wrongGuessLetter;

            }
            // player loses 
            if (guessCount <= 0) {
                // increment losses by 1
                losses++;
                // update losses in html
                document.getElementById("losses").innerHTML = losses;
                // restart the game
                resetGame();
            }
        } // make sure the user can only enter the same input once
        else {
            alert("you already selected that, guess again");
        }
    } // make sure user inputs a valid letter
    else {
        alert("that is not a valid input, guess again");
    }
};
