// ================== GLOBAL VARIABLES =================
// list of words for game
var gameWords = ["friends", "ape", "dog", "cat", "gif", "top", "true", "false", "input", "monkey", "desk", "whale", "dolphin"];

// random word 
var computerWord = gameWords[Math.floor(Math.random() * gameWords.length)];

// print computer word to console
console.log(computerWord);

// only these inputs are valid
var validInputs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// User Inputs and Display

// use string concatenation on this varible to form the whole word and compare to the computer word
var rightGuessLetter = "";

// use string concatenation on this variable to display wrong guesses
var wrongGuessLetter = "";

// store user guesses so that user cant guess the same letter more than one time
// this is not part of phils solution
// remove this for now
// var userGuesses = [];

// stores chosen word in an  array?
var boardGame = [];

// initialize board game with underscores
for (var i = 0; i < computerWord.length; i++) {
    boardGame[i] = "_";
}

// stores the letter key pressed by user // should this variable be stored globally?
var userInput = "";

// Game Counter
var wins = 0;
var losses = 0;
var guessCount = 9;

// ====================== FUNCTIONS ========================
// function initializeGame() {
// document.getElementById("wins").innerHTML = wins;
// document.getElementById("losses").innerHTML = losses;
// document.getElementById("guess-counter").innerHTML = guessCount;
// document.getElementById("wrong-guesses").innerHTML = wrongGuessLetter;

// }

// initializeGame();

// function to reset game 
function resetGame() {
    guessCount = 9;
    computerWord = gameWords[Math.floor(Math.random() * gameWords.length)];
    wrongGuessLetter = ""; // wrongGuessLetter = [];
    rightGuessLetter = "";
    userGuesses = [];
    boardGame = [];
    for (var i = 0; i < computerWord.length; i++) {
        boardGame[i] = "_";
    }
    userInput = "";
    console.log("WinCount: " + wins + " | LossCount: " + losses + " | GuessCounter: " + guessCount);
    console.log("New Word: " + computerWord);
}

// =================== MAIN PROCESS ==============================
document.onkeyup = function (event) {

    // stores key press
    userInput = event.key;

    // create a variable to target html div holding the computer word
    var displayBoardDiv = document.getElementById("computer-word");

    // input correct 
    // join(" ") gets rid of comma seperator from from the array with the empty string 
    // default array has comma separators
    // code on line below initially displays the board game with underscores
    displayBoardDiv.textContent = boardGame.join(" ");

    // make sure user input is a letter
    if (validInputs.indexOf(userInput) !== -1) {

        // make sure the user can only enter the same input once
        // take this out for now
        // if (userGuesses.indexOf(userInput) === -1) {

        // insert userInput into userGuesses array
        // userGuesses.push(userInput);
        // console.log(userGuesses);


        // for (var i = 0; i < computerWord.length; i++) {
        //     if (computerWord[i] == userInput) {
        //         boardGame[i] == userInput;
        //     }
        // }

        // check if userInput is in computer word array
        // indexOf returns -1 if value is not in array
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

            // display wrong guesses on html
            var outputWrongDiv = document.getElementById("wrong-guesses");

            outputWrongDiv.textContent = wrongGuessLetter;

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
    // } // make sure the user can only enter the same input once
    // else {
    //     alert("you already selected that, guess again");
    // }
} // make sure user inputs a valid letter
    else {
    alert("that is not a valid input, guess again");
}
};
