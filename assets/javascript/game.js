// define array of words for hangman game
var words = [
    "lion", 
    "leopard", 
    "rhinoceros", 
    "elephant", 
    "buffalo", 
    "hippopotamus", 
    "cheetah",
    "wildebeest",
    "zebra",
    "gorilla",
    "giraffe",
    "crocodile",
    "ostrich",
    "gazelle",
    "warthog",
    "topis",
    "baboon",
    "waterbuck",
    "antelope",
    "vulture",
];

// define variables to track score, remaining guesses, and word-in-play
var win = 0;
var loss = 0;
var guess = 9;
var wordtoGuess;

// define variables to hold references to html where text will be printed
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left");
var lettersGuessed = document.getElementById("letters-guessed");
var wordBlank = document.getElementById("word-blank");

// define function: on key up, computer randomly selects word from array
function getWord() {
    wordtoGuess = words[Math.floor(Math.random() * words.length)];
    console.log(wordtoGuess);

    // parse letters into divs
    // concatenate divs on screen (letters not visible)
    
    for (var i = 0; i < wordtoGuess.length; i++) {
        var wordBlank = document.createElement("div");
        wordBlank.textContent = wordtoGuess[i];
        wordBlank.append(wordBlank);        
    }

}

// on key up, user guesses letter

    // define variable to record guess

    // reject if guess is not a letter or is a repeated letter

    // otherwise, check if guess equals one or more letters of the word

        // if yes, fill in letter(s)

            // if all letters filled in, increment win count

            // play corresponding sound/picture

            // reset game

        // if no, decrement number of guesses remaining

            // print letters guessed

            // if guesses total 0, increment number of losses and reset game

    // print current score and guesses remaining



