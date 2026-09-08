

import { Ship } from "./game.js";
import { Gameboard } from "./board.js";



export class Player {
    constructor() {
        this.board = new Gameboard(10);
        this.ship = new Ship();
    }


    realPlayer() {
        
        let playerBoard = this.board;
        
        const ship = this.board.placeShips(4, 0, 0, 'horizontal');
        
        //need to call a new gameboard
        //populate ships and provide coordinates
        //use hit function on board
        //track misses and hits on ships
        return ship;
    }

    compPlayer() {
        let compBoard = this.board;
        
    }
}

let player = new Player;

console.log(player.realPlayer());