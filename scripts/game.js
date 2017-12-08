var origBoard;
const humPlayer = 'O';
const aiPlayer = 'X';
const windowCombos = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //Diagonal
    [0, 4, 8],
    [6, 4, 2]
]

const cells = document.querySelectorAll(".cell");

startGame();

function startGame() {
    
}