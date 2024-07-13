# Rock Paper Scissors Game

This is a simple Rock Paper Scissors game implemented in HTML, CSS, and JavaScript. The player can choose between "Rock", "Paper", or "Scissors", and the computer will randomly select one of these options. The game will then display the result and update the scores accordingly.

## Features

- Player vs Computer gameplay
- Random choice for computer
- Display of player and computer choices
- Display of result (win, lose, tie)
- Score tracking for both player and computer
- Dynamic styling based on the result (win or lose)

## Files

- `index.html`: The main HTML file that contains the structure of the game.
- `styles.css`: The CSS file that contains styles for the game.
- `script.js`: The JavaScript file that contains the game logic.

## Setup

1. Clone the repository to your local machine.
2. Open `index.html` in your web browser.

## Usage

1. Open the `index.html` file in a web browser.
2. Click on one of the buttons ("Rock", "Paper", "Scissors") to make your choice.
3. The game will display the player's choice, the computer's choice, the result, and update the scores.

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock Paper Scissors</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="gameContainer">
        <div id="playerDisplay">PLAYER: </div>
        <div id="computerDisplay">COMPUTER: </div>
        <div id="resultDisplay">RESULT: </div>
        <div id="playerScoreValue">PLAYER SCORE: 0</div>
        <div id="computerScoreValue">COMPUTER SCORE: 0</div>

        <button onclick="playGame('rock')">Rock</button>
        <button onclick="playGame('paper')">Paper</button>
        <button onclick="playGame('scissors')">Scissors</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
