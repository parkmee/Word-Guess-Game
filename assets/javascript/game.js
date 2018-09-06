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

document.onkeyup = function (event) {

    var userGuess = event.key;
    console.log(userGuess);

    errorMsg.textContent = "";

    if (userGuess.toLowerCase() >= "a" && userGuess.toLowerCase() <= "z") {
        fillInBlanks();
        console.log("after fill in rl: " + remainingLetters);
        console.log("after fill in cl: " + compareLength);
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
        reset();
    }

    if (guesses === 0) {
        losses--;
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
                console.log("during fill in re: " + remainingLetters);
                console.log("during fill in cl: " + compareLength);
                console.log("correct letter 2: " + correctLetter);
            }
        }
    }

    function updateGuesses() {
        if (remainingLetters < compareLength) {
            compareLength = remainingLetters;
            console.log("match re: " + remainingLetters);
            console.log("match cl: " + compareLength);
            console.log("correct letter: " + correctLetter);
            console.log("rl<cl");
        } else if (remainingLetters === compareLength && correctLetter === false) {
            console.log("rl===cl")
            for (var i = 0; i < lettersGuessed.length; i++) {
                if (userGuess === lettersGuessed[i]) {
                    errorMsg.textContent = "You already guessed this letter!";
                    return;
                } 
            }
            lettersGuessed.push(userGuess);
            console.log("letters guessed: " + lettersGuessed);
            console.log("correct letter: " + correctLetter);
            console.log("no match re: " + remainingLetters);
            console.log("no match cl: " + compareLength);            
            guesses--;
        }
    }

    function getWord() {
        currentWord = words[Math.floor(Math.random() * words.length)];
        console.log(currentWord);
        for (var i = 0; i < currentWord.length; i++) {
            lettersInWord.push("_");
        };
        wordBlankText.textContent = lettersInWord.join(" ");
        remainingLetters = currentWord.length;
        compareLength = currentWord.length;
        console.log("bottom rl: " + remainingLetters);
        console.log("bottom cl: " + compareLength);
        lettersGuessed.length = 0;
        lettersGuessedText.textContent = "Letters Guessed:";
        gameStart = false;
        guesses = 9;
    }
    console.log(correctLetter);
    console.log(currentWord);
}