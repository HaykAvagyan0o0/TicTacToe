var origBoard;
const humPlayer = 'X';
const aiPlayer = 'O';
const winCombos = [
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

var checkInput = true;
const cells = document.querySelectorAll('.cell');
var hasOX = [9];
var cellId = [9];

for (let i = 0; i < cells.length; i++) {
    cellId[i] = cells[i].id;
}

startGame();

function startGame() {
    checkInput = true;
    for (let i = 0; i < hasOX.length; i++) {
        hasOX[i] = false;
    }

    document.querySelector('.end-game').style.display = "none";
    origBoard = Array.from(Array(9).keys()); // 0 -> 8

    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick.bind(this, i), false);
    }
}

function turnClick(index) {
    if (!hasOX[index] && checkInput) {
        turn(index, humPlayer);
    }

    hasOX[index] = true;
}

function turn(index, player) {
    // console.log(index);
    // console.log(cellId[index]);
    origBoard[index] = player;
    document.getElementById(cellId[index]).innerHTML = player;
    let gameWon = checkWin(origBoard, player);
    if (gameWon) gameOver(gameWon);
}

function checkWin(board, player) {
    let plays = board.reduce((a, e, i) => (e === player) ? a.concat(i) : a, []);
    // console.log(plays);
    let gameWon = null;

    for (let [index, win] of winCombos.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            gameWon = {
                index: index,
                player: player
            };
            break;
        }
    }

    return gameWon;
}

function gameOver(gameWon) {
    checkInput = false;
    for (let index of winCombos[gameWon.index]) {
        document.getElementById(cellId[index]).style.backgroundColor = gameWon.player == humPlayer ? "blue" : "red";
    }
}