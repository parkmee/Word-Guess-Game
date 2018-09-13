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

var wins = 0;
var losses = 0;
var guesses = 9;
var currentWord = "";
var gameStart = true;
var correctLetter = false;
var lettersGuessed = [];
var lettersInWord = [];
var remainingLetters = 0;
var compareLength = 0;

var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var lettersGuessedText = document.getElementById("letters-guessed-text");
var wordBlankText = document.getElementById("word-blank");
var errorMsg = document.getElementById("error-msg");
var audio = document.getElementById("win-sound");

document.onkeyup = function (event) {
    
    var userGuess = event.key;

    errorMsg.textContent = "";

    if (userGuess.toLowerCase() >= "a" && userGuess.toLowerCase() <= "z") {
        fillInBlanks();
        updateGuesses();
        correctLetter = false;
    } else {
        // error message
        errorMsg.textContent = "Enter a letter, please!"
    }

    if (gameStart === true) {
        getWord();
        directionsText.textContent = "Enter a letter!";
        return;
    };

    // console.log(lettersInWord.join(""));
    if (currentWord === lettersInWord.join("")) {
        wins++;
        audio.play();
        reset();
    }

    if (guesses === 0) {
        losses++;
        errorMsg.textContent = "Sorry! You lose!";
        reset();
    }

    function reset() {
        lettersInWord.length = 0;
        gameStart = true;
        directionsText.textContent = "Press any key to play again";
        remainingLetters = 0;
        compareLength = 0;
    }

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guesses;
    lettersGuessedText.innerHTML = "Letters Guessed: <br>" + lettersGuessed.join(", ");

    function fillInBlanks() {
        for (var j = 0; j < currentWord.length; j++) {
            if (userGuess.toLowerCase() === currentWord.charAt(j)) {
                correctLetter = true;
                if (lettersInWord[j] === userGuess) {
                    errorMsg.textContent = "Enter a new letter!";
                } else {
                    remainingLetters--;
                    lettersInWord[j] = userGuess;
                }
                wordBlankText.textContent = lettersInWord.join(" ");
            }
        }
    }

    function updateGuesses() {
        if (remainingLetters < compareLength) {
            compareLength = remainingLetters;
        } else if (remainingLetters === compareLength && correctLetter === false) {
            for (var i = 0; i < lettersGuessed.length; i++) {
                if (userGuess === lettersGuessed[i]) {
                    errorMsg.textContent = "You already guessed this letter!";
                    return;
                } 
            }
            lettersGuessed.push(userGuess);
            guesses--;
        }
    }

    function getWord() {
        currentWord = words[Math.floor(Math.random() * words.length)];
        console.log(currentWord);
        for (var i = 0; i < currentWord.length; i++) {
            lettersInWord.push("_");
            console.log(lettersInWord);
        };
        wordBlankText.textContent = lettersInWord.join(" ");
        remainingLetters = currentWord.length;
        compareLength = currentWord.length;
        lettersGuessed.length = 0;
        lettersGuessedText.textContent = "Letters Guessed:";
        gameStart = false;
        guesses = 9;
    }
}