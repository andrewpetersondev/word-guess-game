// ================== VARIABLES =================
var gameWords = ["billclinton", "johngotti", "nelsonmandela", "kurtcobain", "seinfeld", "friends", "michaeljordan", "supernintendo"];
var wins = 0;
var losses = 0;
var guessCount = 9;
var computerWord = gameWords[Math.floor(Math.random() * gameWords.length)];
var rightGuessLetter = "";
var wrongGuessLetter = "";

console.log(computerWord);

// set up blank boardGame using underscores
var boardGame = [];
for (var i = 0; i < computerWord.length; i++) {
    boardGame[i] = "_";
}

// ================ FUNCTIONS ===================================
function initializeGame() {
    document.getElementById("wins").innerHTML = "wins : " + wins;
    document.getElementById("losses").innerHTML = "losses : " + losses;
    document.getElementById("wrong-guesses").innerHTML = "wrong-guesses : " + wrongGuessLetter;
}

initializeGame();

function resetGame() {
    // copy and paste all the initialize variables from above
    guessCount = 9;
    computerWord = gameWordsgameWords[Math.floor(Math.random() * gameWords.length)];
    wrongGuessLetter = "";
    rightGuessLetter = "";
    console.log(computerWord);
}

// ======================== MAIN PROCESS ==============================

// this onkeyUp function is an indefinite loop in itself when the user presses the key letter from the keyboard
document.onkeyup = function (event) {

    // capture userInput and store it in lowercase
    var userInput = event.key.toLowerCase();

    // document.getElementById gets the selector for the div with id = “output” in index.html
    var displayBoardDiv = document.getElementById("output");

    // join(" ") function gets rid of comma separator from the array with empty string. Default array has comma separators 
    // This code below initially displays the boardGame with underscores
    displayBoardDiv.textContent = boardGame.join(" ");

    // Check if the userInput’s letter is in computer word
    if (computerWord.indexOf(userInput) > -1) {

        // This below code replaces the underscore with the correct guess letter
        boardGame[computerWord.indexOf(userInput)] = userInput;

        // this code below displays the updated board game with div id called “output” in index.html
        displayBoardDiv.textContent = boardGame.join(" ");

        // this code below does a string concatenation for the rightGuessLetter to form computer pick word
        rightGuessLetter = rightGuessLetter + userInput;

        // Checks computer pick word equals to the rightGuessLetter that has the final word
        if (computerWord === rightGuessLetter) {
            wins++;
            resetGame();
        }

    }
    else {
        guessCount = guessCount - 1;

        // letter is not found in my computer pick word, do string concatenation wrongGuessLetter with userInput
        wrongGuessLetter = wrongGuessLetter + userInput + ", ";
        // wrongGuessLetter=”” +”r” first iteration
        // wrongGuessLetter=”r ” +”, z ” second iteration
        // wrongGuessLetter=”r , z ” +”, w” third iteration

        // This code gets  selector div with id = “wrongGuess” in index.html  
        var outputWrongDiv = document.getElementById("wrong-guess");
        // This code displays the wrong guess letters on the div with id = “wrongGuess” in index.html     
        outputWrongDiv.textContext = wrongGuessLetter;

        // number of guess of 0 remaining, increase loss by 1    
        if (guessCount === 0) {
            loss++;
            resetGame();
            // call  resetGame function  , re-initialize everything from the beginning
        }
    }

}
