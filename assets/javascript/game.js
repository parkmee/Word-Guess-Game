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
var lettersGuessed = [];
var lettersInWord = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left");
var wordBlank = document.getElementById("word-blank");
var errorMsg = document.getElementById("error-msg");

document.onkeyup = function (event) {
    if (gameStart === true) {
        getWord();
    };

    var userGuess = event.key;
    console.log(userGuess);
    if (userGuess.toLowerCase() >= "a" && userGuess.toLowerCase() <= "z") {
        for (var k = 0; k < lettersGuessed.length; k++) {
            if (userGuess.toLowerCase() === lettersGuessed[i]) {
                return;
            };
        };
        for (var j = 0; j < currentWord.length; j++) {
            if (userGuess.toLowerCase() === currentWord.charAt(j)) {
                lettersInWord[j] = userGuess;
                wordBlank.textContent = lettersInWord.join(" ");
                console.log(lettersInWord);
            }
        }
    } else {
        // error message
    }

    // console.log(lettersInWord.join(""));
    if (currentWord === lettersInWord.join("")) {
        wins++;
        lettersInWord.length = 0;
        gameStart = true;
    }

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeft.textContent = "Guesses Left: " + guesses;
    //guessesLeft.append = userGuess;

}

function getWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    console.log(currentWord);
    for (var i = 0; i < currentWord.length; i++) {
        lettersInWord.push("_");
    };
    wordBlank.textContent = lettersInWord.join(" ");
    gameStart = false;
};