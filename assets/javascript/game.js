// ================== GLOBAL VARIABLES =================
var gameWords = ["friends", "ape", "dog", "cat", "gif", "top", "true", "false", "input", "monkey", "desk", "whale", "dolphin"];
var validInputs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessCount = 9;
var computerWord = gameWords[Math.floor(Math.random() * gameWords.length)];
var rightGuessLetter = "";
var wrongGuessLetter = "";
var userGuesses = [];
var boardGame = [];
for (var i = 0; i < computerWord.length; i++) {
    boardGame[i] = "_";
}

console.log(computerWord);

// ================ FUNCTIONS ===================================
function initializeGame() {
    document.getElementById("directions-text").innerHTML = "Press any key to start playing!";
    document.getElementById("wins").innerHTML = "wins : " + wins;
    document.getElementById("losses").innerHTML = "losses : " + losses;
    document.getElementById("wrong-guesses").innerHTML = "wrong guesses : " + wrongGuessLetter;
    document.getElementById("user-guesses").innerHTML = "<b>You already guessed :</b>  " + userGuesses + " ";
}

initializeGame();

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
    console.log(computerWord);
}

// ======================== MAIN PROCESS ==============================
document.onkeyup = function (event) {

    var userInput = event.key.toLowerCase();

    // why do i need this? and why is it here?
    var displayBoardDiv = document.getElementById("computer-word");

    // when i commented this code out there was no difference in apperance
    displayBoardDiv.textContent = boardGame.join(" ");

    // make sure user input is valid
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

            // indexOf only returns the first occurrence of a letter, what alternatives are there to return all occurences? maybe a for-loop?
            if (computerWord.indexOf(userInput) !== -1) {

                // replaces the underscore with the correct guess letter
                boardGame[computerWord.indexOf(userInput)] = userInput;

                displayBoardDiv.textContent = boardGame.join(" ");

                // string concatenation to form computer pick word
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

                wrongGuessLetter = wrongGuessLetter + userInput + " , ";

                var outputWrongDiv = document.getElementById("wrong-guesses");

                outputWrongDiv.textContext = wrongGuessLetter;

            }
            // player loses 
            if (guessCount <= 0) {
                losses++;
                document.getElementById("losses").innerHTML = losses;
                resetGame();
            }
        } // make sure the user can only enter the same input once
        else {
            alert("you already selected that, guess again");
        }
    }
    else {
        alert("that is not a valid input, guess again");
    }
};
