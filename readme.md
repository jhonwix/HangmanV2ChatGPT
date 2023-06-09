# Hangman Game

This is a simple implementation of the classic Hangman game using HTML, CSS, and JavaScript, styled with Bootstrap.

## Game Rules

Hangman is a guessing game for two or more players. One player thinks of a word, and the others try to guess it by suggesting letters. 

In this digital version, the computer selects a random word from a list, and the player tries to guess it by choosing letters. The game continues until the player has guessed the word or the hangman drawing is complete.

## How to Play

1. The game starts automatically when the page is loaded.
2. The word to guess is represented by a row of dashes on the screen.
3. Click on a letter to make a guess.
4. If the letter is in the word, it replaces the dash(es) in the correct position(s).
5. If the letter is not in the word, a part of the hangman is drawn.
6. The game ends when the word is fully guessed or the hangman is fully drawn.
7. You can start a new game at any time by clicking the "Start New Game" button.
8. You can add your own words to the game by entering them in the input field and clicking the "Add Word" button.

## Scoring

You start with a score of 0. Each time you guess a letter correctly, you earn 1 point. If you guess the word correctly, you earn an additional 10 points. If you guess a letter incorrectly, you lose 1 point.

## Features
The game selects a random word from a list of words.
The player can guess a letter by clicking on a button.
The game keeps track of the player's score.
The game shows a modal with the outcome of the game (win or lose) when the game is over.
The game restarts when the modal close button is clicked.

## Future Enhancements
Add more words to the list or allow the player to add their own words.
Improve the design and make it responsive for mobile devices.
Add a high score feature to keep track of the player's best score.

## Setup and Run Locally

To set up and run the game locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Open the `index.html` file in your web browser.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License.
