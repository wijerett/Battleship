

import { Ship } from "./game.js";
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
        
        
        const ship = this.board.placeShips(4, 0, 0, 'horizontal');
        const ship2 = this.board.placeShips(3, 1, 0, 'horizontal');
        const ship3 = this.board.placeShips(3, 2, 0, 'horizontal');
        const ship4 = this.board.placeShips(2, 3, 0, 'horizontal');
        const ship5 = this.board.placeShips(1, 4, 0, 'horizontal');
        const miss = this.board.missedAttacks;

        
        
        //need to call a new gameboard
        //populate ships and provide coordinates
        //use hit function on board
        //track misses and hits on ships

        
        
        this.playerBoard.push(ship);
        this.playerBoard.push(ship2);
        this.playerBoard.push(ship3);
        this.playerBoard.push(ship4);
        this.playerBoard.push(ship5);
        this.board.receiveAttack(4, 0);
        this.board.receiveAttack(4, 4);
        this.board.receiveAttack(9, 9);
        this.playerBoard.push(miss);
        return this.playerBoard;

    }

    compPlayer() {
        
    }
}

