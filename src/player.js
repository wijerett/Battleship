


import { Gameboard } from "./board.js";



export class Player {
    constructor() {
        this.board = new Gameboard(10);
        this.playerBoard = [];
        this.compBoard = [];
        this.compMiss = [];
        this.playerMiss = [];
    }


    realPlayer() {
        const board = this.board;
        this.playerBoard.push(board);
        this.playerBoard.push(this.compMiss);
        this.playerBoard.push(this.playerMiss);
        board.placeShips(3, 1, 0, 'horizontal');
        board.placeShips(4, 0, 0, 'horizontal');
        board.receiveAttack(3, 3);
        return this.playerBoard;

    }

    compPlayer() {
        this.compBoard.push(this.board)
        return this.compBoard;
        
    }
}

let player = new Player;

console.log(player.realPlayer());

