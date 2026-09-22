
import "./styles.css";
import { Gameboard } from "./board.js";
import { Player } from "./player.js";
import { Ship } from "./game.js";


const startBtn = document.querySelector('#startBtn');


startBtn.addEventListener('click', event => {
    event.preventDefault();
    const player = new Player();
    player.setup();
    const opponent = new Player();
    opponent.setup();
    player.opponentBoard = opponent.board;
    opponent.opponentBoard = player.board;
    const board1 = document.createElement("div");
    board1.innerHTML = player.board.board;
    const boardBox1 = document.getElementById('board1');
    boardBox1.appendChild(board1);
    const board2 = document.createElement("div");
    board2.innerHTML = opponent.board.board;
    const boardBox2 = document.getElementById('board2');
    boardBox2.appendChild(board2);
    console.log(player.board.board);
    console.log(opponent.board.board);
});



export class driveGame {
    constructor() {
        this.player = new Player();
        this.opponent = new Player();
    }

    round() {
        
    }
}
