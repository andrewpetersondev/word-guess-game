# word-guess-game

## psuedo code

### visual presentation

1. On screen load present game.

2. Show "press any key to get started"

3. current word _ _ _ _ _ _ _ _ _ 

4. Number of Guesses Remaining

5. Letters already guessed


### How it works

1. Create an array of 10+ words with 90s theme. 

2. computer randomly selects 1 of the words to play a game

3. user guesses a letter

    * add letter to letters guessed array if it has not already been used

4. compare userGuess to current array with .indexOf

    * if .indexOf does not equal -1, this means the userGuess was true,  display letter on screen

    * if .indexOf = -1 then reduce guesses remaining by 1

    * repeat until guesses remaining equals 0

### variables

var wordsNineties = [word1, word2, word3, ...];

var currentWord?

var userGuess

var guessesRemaining

var lettersGuessed = []

var wins

var losses

### functions


### office hours

#### initialize game

1. list of words - var listofWords = ["word1", "word2", ...];

2. computer picks the word - var computerRandomIndex = math.floor(math.random() * listofWords.length;

computerPickedWord = listofWords[computerRandomIndex];

3. var numberofGuessCount = 9, if statement

4. var wins = 0; document.getElementById();

5. var losses = 0;

6. var wrongLettersGuessed = ""; everytime the user picks a wrong letter it does string concatenation on this variable

7. var rightLettersGuessed = ""; everytime the user picks a right letter, it does string concatenation on this variable to formulate the whole word and compare to the computerPickedWord

8. var boardGame = []; boardGame has to equal the length of computerPickedWord, we need a for loop to end at the length of computerPickedWord and initalize with underscores

for(var i=0; i < computerPickedkWord; i++){
                boardGame[i]= “_”;
}
9.	var userInput= “”;  //stores the letter key pressed from the user


9.	var userInput= “”;  //stores the letter key pressed from the user
function resetGame(){
   //copy and paste all the initialize variables from above
}
play game:
//this onkeyUp function is an indefinite loop in itself when the user presses the key letter from the keyboard
document.onkeyup = function(event) {
      userInput = event.key.toLowerCase();  //for example: userInput= “d” after press “d”
     //document.getElementbyID gets the selector for the div with id = “output” in index.html
     var displayBoardDiv  = document.getElementbyID(“output”);
     //join(“ ”) function gets rid of comma separator from the array with empty string. Default array has comma separators 
    //This code below initially displays the boardGame with underscores
     displayBoardDiv.textContent = boardGame.join(“ ”); 

  //computer picks “coding” as the word and user key pressed “d”, indexOf(userInput)  is at index 2 of “coding”, numberGuesses stay //the same
//Check if the userInput’s letter is in “coding” word, if not, computerPickWord.indexOf(userInput) will return -1
    if(computerPickWord.indexOf(userInput)> -1 ) {
//This below code replaces the underscore with the correct guess letter
boardGame[computerPickWord.indexOf(userInput)]=userInput; // _ _  d  _  _ _  , only when user picks d
//this code below displays the updated board game with div id called “output” in index.html
displayBoard.textContent= boardGame.join(“ ”);  // _ o d _ _ _  , only when user picks o
              //this code below does a string concatenation for the rightGuessletter to form computer pick word
              rightGuessLetter = rightGuessLetter + userInput // c o d _ _ _  , only when user picks c
// c o d i _ _  , only when user picks i
// c o d i n _  , only when user picks n
// c o d i n g  , only when user picks g

        //Checks computer pick word equals to the rightGuessLetter that has the final word
       //if true, increments wins and reset game
       	 If(computerPickWord=== rightGuessLetter){
       		 wins++; // wins =wins + 1 // 0+1= 1
                                                                          //1+1=2
resetGame(); //call  resetGame function  , re-initialize everything from the beginning
}

      
 }
else   //false statement only, computerPickWord.indexOf(userInput) returns -1 if not found
{
         numberofGuessCount = numberofGuessCount-1; //9-1 = 8  first iteration
                                                                                             //8-1=7 second iteration
         //letter is not found in my computer pick word, do string concatenation wrongGuessLetter with userInput
          wrongGuessLetter=wrongGuessLetter+ userInput + “, ”;  // wrongGuessLetter=”” +”r” first iteration
                                                                                                     // wrongGuessLetter=”r ” +”, z ” second iteration
                                                                                                       // wrongGuessLetter=”r , z ” +”, w” third iteration
                                                                                                       // wrongGuessLetter=”r , z, w  ” +”, p” fourth iteration

        //This code gets  selector div with id = “wrongGuess” in index.html  
        var outputWrongDiv= document.getElementbyID(“wrongGuess”);
               //This code displays the wrong guess letters on the div with id = “wrongGuess” in index.html     
        outputWrongDiv.textContext= wrongGuessLetter;

          //number of guess of 0 remaining, increase loss by 1    
         If( numberofGuessCount ===0 ){
                loss++;// loss=loss+1;   
                resetGame(); // call  resetGame function  , re-initialize everything from the beginning
            }
}
 
}
