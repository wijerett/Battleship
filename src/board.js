import { Ship } from "./game.js";

export class Gameboard {
    constructor(size = 10) {
        this.size = size;
        this.board = this.buildBoard();
        this.ships = [];
        this.missedAttacks = [];
    }

    buildBoard() {
        const board = [];

        for (let row = 0; row < this.size; row++) {
            const rowArray = [];
            for (let col = 0; col < this.size; col++) {
                rowArray.push({
                    ship: null,
                    hit: false,
                });
            }
            board.push(rowArray);
        }
        return board;
    }


    //place ships at specific coordinates by calling ship class
    
    
    //receiveAttack function that takes a pair of coordinates, determines
    //if attack hit a ship then sends hit function to the correct ship or 
    //records coordinates of the missed shot

    //gameboard should be able to keep track of missed shots

    //gameboard should be able to report if all ships are sunk or not

}


let game = new Gameboard();

console.log(game);