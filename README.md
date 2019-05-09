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