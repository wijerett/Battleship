


import { Gameboard } from "./board.js";



export class Player {
    constructor() {
        this.board = new Gameboard();
        this.opponentBoard = null;
    }


    setup() {
        this.board.placeShips(4, 0, 0, 'horizontal');
        this.board.placeShips(3, 1, 0, 'horizontal');
        this.board.placeShips(3, 2, 0, 'horizontal');
        this.board.placeShips(2, 3, 0, 'horizontal');
        this.board.placeShips(1, 4, 0, 'horizontal');
    }

    attack(row, col) {
        return this.board.receiveAttack(row, col);
    }
}

let player = new Player();
player.setup();
player.attack(0, 0);
player.attack(0, 1);
player.attack(0, 2);
player.attack(0, 3);

console.log(player.board.board);

//output looks good but need to update the hit: '' everytime a ship takes a hit
//the isSunk() check on hit() isnt working

