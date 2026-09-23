
import "./styles.css";
import { Gameboard } from "./board.js";
import { Player } from "./player.js";
import { renderBoard, boardListener } from "./render.js";


const boardBox1 = document.getElementById('board1');
const boardBox2 = document.getElementById('board2');
const player = new Player();
const opponent = new Player();


export function driveGame() {

    boardBox1.innerHTML = "";
    boardBox2.innerHTML = "";

    player.setup();
    opponent.setup();

    player.opponentBoard = opponent.board;
    opponent.opponentBoard = player.board;

    renderBoard(player.board, board1);
    renderBoard(player.board, board2);

    console.log(player.board.board);
    console.log(opponent.board.board);
};

const startBtn = document.querySelector('#startBtn');
startBtn.addEventListener('click', event => {
    if (player.board.board || opponent.board.board)
        driveGame();
});

boardListener(boardBox2, () => opponent.board, (row, col) => {
    player.attack(row, col);
    renderBoard(opponent.board, boardBox2);
});

boardListener(boardBox1, () => player.board, (row, col) => {
    opponent.attack(row, col);
    renderBoard(player.board, boardBox1);
});