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

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left");
var wordBlank = document.getElementById("word-blank");
var errorMsg = document.getElementById("error-msg");

var lettersInWord = [];
function getWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    console.log(currentWord);
    console.log(currentWord.length);
    for (var i = 0; i < currentWord.length; i ++) {
        lettersInWord.push("_");
    };
};

document.onkeyup = function(event) {

    var userGuess = event.key;
    console.log(userGuess);
    for (var j = 0; j < currentWord.length; j++) {
        if (userGuess === currentWord.charAt[j]) {
            lettersInWord[j] = userGuess;
            wordBlank.textContent = lettersInWord.join(" ");
            console.log(lettersInWord);
        }
    }

if (gameStart === true) {
        lettersInWord.length = 0;
        getWord();
        wordBlank.textContent = lettersInWord.join(" ","_");
        gameStart = false;
    };

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeft.textContent = "Guesses Left: " + guesses;
    //guessesLeft.append = userGuess;
    
}

