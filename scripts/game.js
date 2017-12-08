var origBoard;
const humPlayer = 'X';
const aiPlayer = 'O';
const windowCombos = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [0, 4, 8],
    [6, 4, 2]
]

const cells = document.querySelectorAll('.cell');

startGame();

function startGame() {
    document.querySelector('.end-game').style.display = "none";
    origBoard = Array.from(Array(9).keys()); // 0 -> 8

    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
        cells[i].addEventListener('click', turnClick.bind(this, i, cells[i].id), false);
    }
}

function turnClick(index, cellId) {
    // console.log(index);
    // console.log(cellId);
    turn(index, cellId, humPlayer);
}

function turn(index, cellId, player) {
    origBoard[index] = player;
    document.getElementById(cellId).innerHTML = player;
}
