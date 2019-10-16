// game object
var wordGuessGame = {

    // word objects
    gameWords = {
        blockchain: {
            picture: "genesis.jpg",
            song: "Illegal Alien",
            preview: "https://p.scdn.co/mp3-preview/b29a2b925b9654e0efaaff37504fd234307e0ad8"
        },
        ibm: {
            picture: "genesis.jpg",
            song: "Illegal Alien",
            preview: "https://p.scdn.co/mp3-preview/b29a2b925b9654e0efaaff37504fd234307e0ad8"
        },
        google: {
            picture: "genesis.jpg",
            song: "Illegal Alien",
            preview: "https://p.scdn.co/mp3-preview/b29a2b925b9654e0efaaff37504fd234307e0ad8"
        },
        amazon: {
            picture: "genesis.jpg",
            song: "Illegal Alien",
            preview: "https://p.scdn.co/mp3-preview/b29a2b925b9654e0efaaff37504fd234307e0ad8"
        },
        developer: {
            picture: "genesis.jpg",
            song: "Illegal Alien",
            preview: "https://p.scdn.co/mp3-preview/b29a2b925b9654e0efaaff37504fd234307e0ad8"
        },
        cryptocurrency: {
            picture: "genesis.jpg",
            song: "Illegal Alien",
            preview: "https://p.scdn.co/mp3-preview/b29a2b925b9654e0efaaff37504fd234307e0ad8"
        },
        nasa: {
            picture: "genesis.jpg",
            song: "Illegal Alien",
            preview: "https://p.scdn.co/mp3-preview/b29a2b925b9654e0efaaff37504fd234307e0ad8"
        },
        robots: {
            picture: "genesis.jpg",
            song: "Illegal Alien",
            preview: "https://p.scdn.co/mp3-preview/b29a2b925b9654e0efaaff37504fd234307e0ad8"
        },
        cloud: {
            picture: "genesis.jpg",
            song: "Illegal Alien",
            preview: "https://p.scdn.co/mp3-preview/b29a2b925b9654e0efaaff37504fd234307e0ad8"
        }
    },

    // variables
    // ==========================================================================
    computerWord = "",
    lettersInComputerWord =[],
    numBlanks = 0,
    gameBoard =[],
    wrongGuesses =[],
    wins = 0,
    losses = 0,
    guessCount = 9,

    // methods
    // ==========================================================================
    startGame = function () {
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
        document.getElementById("guess-counter").innerHTML = guessCount;
        document.getElementById("computer-word").innerHTML = gameBoard.join('  ');
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
    },

    checkLetters = function (letter) {

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

    },

    gameOver = function () {
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

};

// MAIN PROCESS
// ==========================================================================

wordGuessGame.startGame();

document.onkeyup = function (event) {
    wordGuessGame.userInput = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(userInput);
    gameOver();
};
