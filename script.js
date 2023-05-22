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
    var hangmanParts = ['head', 'body', 'left-arm', 'right-arm', 'left-leg', 'right-leg'];
    var visibleParts = 6 - attempts;
    for (var i = 0; i < hangmanParts.length; i++) {
        if (i < visibleParts) {
            document.getElementById(hangmanParts[i]).style.visibility = 'visible';
        } else {
            document.getElementById(hangmanParts[i]).style.visibility = 'hidden';
        }
    }
}

function displayAlphabet() {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var display = '';
    for (var i = 0; i < alphabet.length; i++) {
        display += '<button id="' + alphabet[i] + '" class="btn btn-outline-primary m-1" onclick="guess(\'' + alphabet[i] + '\')">' + alphabet[i] + '</button>';
    }
    document.getElementById('alphabet').innerHTML = display;
}

function displayScore() {
    document.getElementById('score').textContent = 'Score: ' + score;
}

function displayWords() {
    document.getElementById('wordList').textContent = 'Words: ' + words.join(', ');
}

function showModal(message) {
    document.getElementById('modalMessage').textContent = message;
    $('#myModal').modal('show');
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
    document.getElementById(letter).style.display = 'none'; // Hide the clicked letter
    if (attempts <= 0) {
        showModal('You lost! The word was ' + word);
    } else if (document.getElementById('word').textContent.indexOf('_') === -1) {
        score += 10;
        displayScore();
        showModal('You won! The word was ' + word);
    }
}

function addWord() {
    var newWord = document.getElementById('newWordInput').value.toLowerCase();
    if (newWord && !words.includes(newWord)) {
        words.push(newWord);
        document.getElementById('newWordInput').value = '';
        displayWords();
        showModal('Word added successfully!');
    } else {
        showModal('Please enter a valid word that is not already in the game.');
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
    // Hide all parts of the hangman
    document.getElementById('head').style.visibility = 'hidden';
    document.getElementById('body').style.visibility = 'hidden';
    document.getElementById('left-arm').style.visibility = 'hidden';
    document.getElementById('right-arm').style.visibility = 'hidden';
    document.getElementById('left-leg').style.visibility = 'hidden';
    document.getElementById('right-leg').style.visibility = 'hidden';
}

document.getElementById('newGameButton').addEventListener('click', startNewGame);
document.getElementById('addWordButton').addEventListener('click', addWord);
/*
// Show the head
document.getElementById('head').style.visibility = 'visible';
document.getElementById('head').classList.add('animate');

// Hide the head
document.getElementById('head').style.visibility = 'hidden';
document.getElementById('head').classList.remove('animate');
*/
function animateBodyPart(id, action) {
    var element = document.getElementById(id);
    if(action === 'show') {
        element.style.visibility = 'visible';
        element.classList.add('animate');
    } else if(action === 'hide') {
        element.style.visibility = 'hidden';
        element.classList.remove('animate');
    }
}

// Initialize game
startNewGame();
displayWords();
