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
    document.getElementById('word').textContent = display;
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

displayWord();
displayHangman();
displayAlphabet();
