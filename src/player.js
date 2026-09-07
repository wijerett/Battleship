

import { Ship } from "./game";
import { Gameboard } from "./board";

export class Player {
    constructor() {
        this.board = Gameboard(10);
        this.ship = Ship();
    }

    realPlayer() {
        let playerBoard = this.board;
        //need to call a new gameboard
        //populate ships and provide coordinates
        //use hit function on board
        //track misses and hits on ships
    }

    compPlayer() {
        let compBoard = this.board;
        
    }
}