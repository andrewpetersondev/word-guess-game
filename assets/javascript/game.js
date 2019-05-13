// ================== VARIABLES =================
var gameWords = ["billclinton", "johngotti", "nelsonmandela", "kurtcobain", "seinfeld", "friends", "michaeljordan", "supernintendo"];
var validInputs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessCount = 9;
var computerWord = gameWords[Math.floor(Math.random() * gameWords.length)];
var rightGuessLetter = "";
var wrongGuessLetter = "";

console.log(computerWord);

var boardGame = [];
for (var i = 0; i < computerWord.length; i++) {
    boardGame[i] = "_";
}

// ================ FUNCTIONS ===================================
function initializeGame() {
    document.getElementById("directions-text").innerHTML = "Press any key to start playing!";
    document.getElementById("wins").innerHTML = "wins : " + wins;
    document.getElementById("losses").innerHTML = "losses : " + losses;
    document.getElementById("wrong-guesses").innerHTML = "wrong guesses : " + wrongGuessLetter;
}

initializeGame();

function resetGame() {
    guessCount = 9;
    computerWord = gameWordsgameWords[Math.floor(Math.random() * gameWords.length)];
    wrongGuessLetter = "";
    rightGuessLetter = "";
    console.log(computerWord);
}

// ======================== MAIN PROCESS ==============================
document.onkeyup = function (event) {

    var userInput = event.key.toLowerCase();

    // why do i need this? and why is it here?
    var displayBoardDiv = document.getElementById("output");

    // when i commented this code out there was no difference in apperance
    displayBoardDiv.textContent = boardGame.join(" ");

    // make sure user input is valid
    if (validInputs.indexOf(userInput) != -1) {

        // indexOf only returns the first occurrence of a letter, what alternatives are there to return all occurences?
        if (computerWord.indexOf(userInput) != -1) {

            // replaces the underscore with the correct guess letter
            boardGame[computerWord.indexOf(userInput)] = userInput;

            // displays the updated board game with div id called “output” in index.html
            displayBoardDiv.textContent = boardGame.join(" ");

            // does a string concatenation for the rightGuessLetter to form computer pick word
            rightGuessLetter = rightGuessLetter + userInput;

            // player wins
            if (computerWord === rightGuessLetter) {
                wins++;
                resetGame();
            }

        }
        else {
            guessCount = guessCount - 1;

            wrongGuessLetter = wrongGuessLetter + userInput + ", ";

            var outputWrongDiv = document.getElementById("wrong-guess");

            outputWrongDiv.textContext = wrongGuessLetter;

            // player loses 
            if (guessCount === 0) {
                loss++;
                resetGame();
            }
        }
    }
    else {
        alert("that is not a valid input, guess again");
    }
}
