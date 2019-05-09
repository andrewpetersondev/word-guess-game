// ================== GLOBAL ========================================

// words to use
var gameWords = ["Bill Clinton", "John Gotti", "Nelson Mandela", "Kurt Cobain", "Seinfeld", "Friends", "Michal Jordan", "Super Nintendo"];

// check to see length of game words array and length of index 0
// console.log(gameWords.length);
// console.log(gameWords[0].length);

// create a variable to store a random index position from gameWords array
var computerRandomIndex = Math.floor(Math.random() * gameWords.length);

// check to see if it works, refresh the page a couple times
console.log(computerRandomIndex);

// create a variable to select a string from gameWords array
var computerPickWord = gameWords[computerRandomIndex];

// check to see if it works
console.log(computerPickWord);

// set up blank boardGame using underscores
var boardGame = [];
for (var i = 0; i < computerPickWord.length; i++) {
    boardGame[i] = "_";
}

//stores the letter key pressed from the user
// var userInput = "";

// everytime the user picks a wrong letter, it does string concatenation on this variable
// var wrongGuessLetter = []; // or use ""; ?

// everytime the user picks a right letter, it does string concatenation on this variable to formulate the whole word and compare to the computer pick word
// var rightGuessLetter = []; // or use ""; ?

// number of remaining guesses
// var guessCount = 9;

// wins = wins + 1 if user guesses the computer pick word
// var wins = 0;

// losses = losses + 1 if the user equals to zero remaining guesses
// var losses = 0;

// function resetGame() {
//     // copy and paste all the initialize variables from above
// }

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");


// ================================ PLAY GAME ==============================

// this onkeyUp function is an indefinite loop in itself when the user presses the key letter from the keyboard
// document.onkeyup = function (event) {

//     userInput = event.key.toLowerCase();
//     // for example: userInput= “d” after press “d”
//     // document.getElementbyID gets the selector for the div with id = “output” in index.html

//     var displayBoardDiv = document.getElementbyID(“output”);
//     // join(“ ”) function gets rid of comma separator from the array with empty string. Default array has comma separators 
//     // This code below initially displays the boardGame with underscores
//     displayBoardDiv.textContent = boardGame.join(“ ”);

//     // computer picks “coding” as the word and user key pressed “d”, indexOf(userInput)  is at index 2 of “coding”, numberGuesses stay the same
//     // Check if the userInput’s letter is in “coding” word, if not, computerPickWord.indexOf(userInput) will return -1
//     if (computerPickWord.indexOf(userInput) > -1) {

//         // This below code replaces the underscore with the correct guess letter
//         boardGame[computerPickWord.indexOf(userInput)] = userInput;
//         // _ _  d  _  _ _  , only when user picks d

//         // this code below displays the updated board game with div id called “output” in index.html
//         displayBoard.textContent = boardGame.join(“ ”);
//         // _ o d _ _ _  , only when user picks o

//         // this code below does a string concatenation for the rightGuessLetter to form computer pick word
//         rightGuessLetter = rightGuessLetter + userInput
//         // c o d _ _ _  , only when user picks c

//         // c o d i _ _  , only when user picks i
//         // c o d i n _  , only when user picks n
//         // c o d i n g  , only when user picks g

//         // Checks computer pick word equals to the rightGuessLetter that has the final word
//         // if true, increments wins and reset game
//         if (computerPickWord === rightGuessLetter) {
//             wins++;
//             // wins =wins + 1 
//             // 0+1= 1
//             // 1+1=2
//             resetGame();
//             // call  resetGame function  , re-initialize everything from the beginning
//         }


//     }
//     else
//     //false statement only, computerPickWord.indexOf(userInput) returns -1 if not found

//     {
//         numberofGuessCount = numberofGuessCount - 1;
//         // 9-1 = 8  first iteration
//         // 8-1=7 second iteration
//         // letter is not found in my computer pick word, do string concatenation wrongGuessLetter with userInput
//         wrongGuessLetter = wrongGuessLetter + userInput + “, ”;
//         // wrongGuessLetter=”” +”r” first iteration
//         // wrongGuessLetter=”r ” +”, z ” second iteration
//         // wrongGuessLetter=”r , z ” +”, w” third iteration
//         // wrongGuessLetter=”r , z, w  ” +”, p” fourth iteration

//         // This code gets  selector div with id = “wrongGuess” in index.html  
//         var outputWrongDiv = document.getElementbyID(“wrongGuess”);
//         // This code displays the wrong guess letters on the div with id = “wrongGuess” in index.html     
//         outputWrongDiv.textContext = wrongGuessLetter;

//         // number of guess of 0 remaining, increase loss by 1    
//         if (numberofGuessCount === 0) {
//             loss++;
//             // loss=loss+1;   

        // Hide the directions
        directionsText.textContent = "";

        // Display the user and computer guesses, and wins/losses/ties.
        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        tiesText.textContent = "ties: " + ties;


//             resetGame();
//             // call  resetGame function  , re-initialize everything from the beginning
//         }
//     }

// }
