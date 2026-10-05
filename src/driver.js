
import "./styles.css";
import { Gameboard } from "./board.js";
import { Player } from "./player.js";
import { renderBoard, boardListener } from "./render.js";


const boardBox1 = document.getElementById('board1');
const boardBox2 = document.getElementById('board2');

const player = new Player();
const opponent = new Player();

const gameOverModal = document.getElementById('gameOverModal');
const gameOverMessage = document.getElementById('gameOverPopup');


export function driveGame() {

    boardBox1.innerHTML = "";
    boardBox2.innerHTML = "";

    boardBox1.classList.remove('game-over');
    boardBox2.classList.remove('game-over');

    player.setup();
    opponent.setup();

    player.opponentBoard = opponent.board;
    opponent.opponentBoard = player.board;

    renderBoard(player.board, board1);
    renderBoard(player.board, board2);
};

const startBtn = document.querySelector('#startBtn');
startBtn.addEventListener('click', event => {
    
    if (player.board.board || opponent.board.board)
        driveGame();
        gameOverModal.classList.add('hidden');
});

const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', event => {
    player.playerPlacements();

});

// boardListener(boardBox2, () => opponent.board, (row, col) => {
//     player.attack(row, col);
//     renderBoard(opponent.board, boardBox2);
// });

//second board listener, in case i want pvp

boardListener(boardBox1, () => player.board, (row, col) => {

    opponent.attack(row, col);
    renderBoard(player.board, boardBox1);
    if (player.board.allShipsSunk()) {
        boardBox2.classList.add('game-over');
        boardBox1.classList.add('game-over');
        showGameOver('Game Over: You win!')
        return;
    }
    
    player.huntAttack(row, col);
    renderBoard(opponent.board, boardBox2);
    if (opponent.board.allShipsSunk()) {
        boardBox2.classList.add('game-over');
        boardBox1.classList.add('game-over');
        showGameOver('Game Over: Computer wins')
        return;
    }
});

function showGameOver(text) {
    gameOverMessage.textContent = text;
    gameOverModal.classList.remove('hidden');
};