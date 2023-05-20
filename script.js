/*
var words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
var word = words[Math.floor(Math.random() * words.length)];
var guessedLetters = [];
var attempts = 6;

function displayWord() {
    var display = '';
    for (var i = 0; i < word.length; i++) {
        if (guessedLetters.indexOf(word[i]) > -1) {
            display += word[i];
        } else {
            display += '_';
        }
    }
    // document.getElementById('word').textContent = display;
    document.getElementById('wordList').textContent = 'Words: ' + words.join(', ');
}
function addWord() {
    var newWord = document.getElementById('newWordInput').value.toLowerCase();
    if (newWord && !words.includes(newWord)) {
        words.push(newWord);
        document.getElementById('newWordInput').value = '';
        displayWords();
        alert('Word added successfully!');
    } else {
        alert('Please enter a valid word that is not already in the game.');
    }
}


function displayHangman() {
    // You can replace this with an actual drawing or image if you want
    document.getElementById('hangman').textContent = 'Attempts left: ' + attempts;
}

function displayAlphabet() {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var display = '';
    for (var i = 0; i < alphabet.length; i++) {
        display += '<span class="letter" onclick="guess(\'' + alphabet[i] + '\')">' + alphabet[i] + '</span>';
    }
    document.getElementById('alphabet').innerHTML = display;
}

function guess(letter) {
    if (word.indexOf(letter) > -1) {
        guessedLetters.push(letter);
    } else {
        attempts--;
    }
    displayWord();
    displayHangman();
    if (attempts <= 0) {
        alert('You lost! The word was ' + word);
    } else if (document.getElementById('word').textContent.indexOf('_') === -1) {
        alert('Youwon! The word was ' + word);
    }
}
document.getElementById('newGameButton').addEventListener('click', startNewGame);

var score = 0;

function displayScore() {
    document.getElementById('score').textContent = 'Score: ' + score;
}

function guess(letter) {
    if (word.indexOf(letter) > -1) {
        guessedLetters.push(letter);
        score++; // Increase score for correct guess
    } else {
        attempts--;
        if (score > 0) {
            score--; // Decrease score for incorrect guess
        }
    }
    displayWord();
    displayHangman();
    displayScore();
    if (attempts <= 0) {
        alert('You lost! The word was ' + word);
    } else if (document.getElementById('word').textContent.indexOf('_') === -1) {
        score += 10; // Increase score for guessing the word
        displayScore();
        alert('You won! The word was ' + word);
    }
}
document.getElementById('addWordButton').addEventListener('click', addWord);

function addWord() {
    var newWord = document.getElementById('newWordInput').value.toLowerCase();
    if (newWord && !words.includes(newWord)) {
        words.push(newWord);
        document.getElementById('newWordInput').value = '';
        alert('Word added successfully!');
    } else {
        alert('Please enter a valid word that is not already in the game.');
    }
}
function startNewGame() {
    // Reset game state
    word = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    attempts = 6;
    score = 0; // Reset score

    displayWord();
    displayHangman();
    displayScore();
    displayAlphabet();
}
// Initialize game
startNewGame();
displayWords();
*/
var words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
var word = words[Math.floor(Math.random() * words.length)];
var guessedLetters = [];
var attempts = 6;
var score = 0;

function displayWord() {
    var display = '';
    for (var i = 0; i < word.length; i++) {
        if (guessedLetters.indexOf(word[i]) > -1) {
            display += word[i];
        } else {
            display += '_';
        }
    }
    document.getElementById('word').textContent = display;
}

function displayHangman() {
    document.getElementById('hangman').textContent = 'Attempts left: ' + attempts;
}

function displayAlphabet() {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var display = '';
    for (var i = 0; i < alphabet.length; i++) {
        //display += '<span class="letter" onclick="guess(\'' + alphabet[i] + '\')">' + alphabet[i] + '</span>';
        display += '<button class="btn btn-outline-primary m-1" onclick="guess(\'' + alphabet[i] + '\')">' + alphabet[i] + '</button>';
    }
    document.getElementById('alphabet').innerHTML = display;
}

function displayScore() {
    document.getElementById('score').textContent = 'Score: ' + score;
}

function displayWords() {
    document.getElementById('wordList').textContent = 'Words: ' + words.join(', ');
}

function guess(letter) {
    if (word.indexOf(letter) > -1) {
        guessedLetters.push(letter);
        score++;
    } else {
        attempts--;
        if (score > 0) {
            score--;
        }
    }
    displayWord();
    displayHangman();
    displayScore();
    if (attempts <= 0) {
        alert('You lost! The word was ' + word);
    } else if (document.getElementById('word').textContent.indexOf('_') === -1) {
        score += 10;
        displayScore();
        alert('You won! The word was ' + word);
    }
}

function addWord() {
    var newWord = document.getElementById('newWordInput').value.toLowerCase();
    if (newWord && !words.includes(newWord)) {
        words.push(newWord);
        document.getElementById('newWordInput').value = '';
        displayWords();
        alert('Word added successfully!');
    } else {
        alert('Please enter a valid word that is not already in the game.');
    }
}

function startNewGame() {
    word = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    attempts = 6;
    score = 0;
    displayWord();
    displayHangman();
    displayScore();
    displayAlphabet();
}

document.getElementById('newGameButton').addEventListener('click', startNewGame);
document.getElementById('addWordButton').addEventListener('click', addWord);

// Initialize game
startNewGame();
displayWords();
