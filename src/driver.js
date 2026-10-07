
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

let gamePhase = 'placement';


export function driveGame() {

    

    boardBox1.innerHTML = "";
    boardBox2.innerHTML = "";

    boardBox1.classList.remove('game-over');
    boardBox2.classList.remove('game-over');

    player.setup();
    opponent.setup();

    player.opponentBoard = opponent.board;
    opponent.opponentBoard = player.board;

    renderBoard(player.board, board1, true);
    renderBoard(player.board, board2, false);
    //need game state tracking from placement to attack phases
    //"play game" should come up as a div once all 5 ships are placed
    // as well as populate computer players board
    
};

const startBtn = document.querySelector('#startBtn');
startBtn.addEventListener('click', event => {
    
    if (player.board.board || opponent.board.board)
        driveGame();
        gameOverModal.classList.add('hidden');
});

const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', event => {
    // player.playerPlacements();
    const allPlaced = player.playerPlacements();

    renderBoard(player.board, boardBox1);

    if(allPlaced) {
        gamePhase = 'attack';
        opponent.setup();
        renderBoard(opponent.board, boardBox2);
    }
});

boardListener(boardBox2, () => opponent.board, (row, col) => {

    if (gamePhase !== 'attack') return;
    
    player.attack(row, col);
    renderBoard(player.board, boardBox2);
    if (opponent.board.allShipsSunk()) {
        boardBox2.classList.add('game-over');
        boardBox1.classList.add('game-over');
        showGameOver('Game Over: You win!')
        return;
    }
    
    opponent.huntAttack();
    renderBoard(player.board, boardBox1);
    if (player.board.allShipsSunk()) {
        boardBox2.classList.add('game-over');
        boardBox1.classList.add('game-over');
        showGameOver('Game Over: Computer wins')
        return;
    }
});

//second board listener, in case i want pvp

// boardListener(boardBox1, () => player.board, (row, col) => {

//     opponent.attack(row, col);
//     renderBoard(player.board, boardBox1);
//     if (player.board.allShipsSunk()) {
//         boardBox2.classList.add('game-over');
//         boardBox1.classList.add('game-over');
//         showGameOver('Game Over: You win!')
//         return;
//     }
    
//     player.huntAttack(row, col);
//     renderBoard(opponent.board, boardBox2);
//     if (opponent.board.allShipsSunk()) {
//         boardBox2.classList.add('game-over');
//         boardBox1.classList.add('game-over');
//         showGameOver('Game Over: Computer wins')
//         return;
//     }
// });

function showGameOver(text) {
    gameOverMessage.textContent = text;
    gameOverModal.classList.remove('hidden');
};