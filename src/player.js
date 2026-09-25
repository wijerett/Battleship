import { Gameboard } from "./board.js";

export class Player {
    constructor() {
        this.board = new Gameboard();
        this.opponentBoard = null;
    }

    setup() {
        this.board = new Gameboard();
        this.board.placeShips(4, 0, 0, 'horizontal');
        this.board.placeShips(3, 1, 0, 'horizontal');
        this.board.placeShips(3, 2, 0, 'horizontal');
        this.board.placeShips(2, 3, 0, 'horizontal');
        this.board.placeShips(1, 4, 0, 'horizontal');
    }
    //add (length, row, col, direction) so players can choose
    //location of ships

    //i could add a method to do a random coordinate attack when it is
    //the computer players turn and reference it in driver file

    attack(row, col) {
        return this.opponentBoard.receiveAttack(row, col);
    }

    computerAttack() {
        let row, col;
        let alreadyAttacked = true;

        while (alreadyAttacked) {
            row = Math.floor(Math.random() * this.opponentBoard.size);
            col = Math.floor(Math.random() * this.opponentBoard.size);
            alreadyAttacked = this.opponentBoard.board[row][col].attacked;
        }
        this.attack(row, col);
    }
};