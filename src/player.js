


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
    //add (length, row, col, direction) so players can choose
    //location of ships

    attack(row, col) {
        return this.opponentBoard.receiveAttack(row, col);
    }
}

let player = new Player();
player.setup();
// player.attack(0, 0);
// player.attack(0, 1);
// player.attack(0, 2);
// player.attack(0, 3);
// player.attack(4, 0);


console.log(player.board.board);
