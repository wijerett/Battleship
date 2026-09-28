import { Gameboard } from "./board.js";

export class Player {
    constructor() {
        this.board = new Gameboard();
        this.opponentBoard = null;
        this.targetQueue = [];
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

    queueNeighbors(row, col) {
        const candidates = [
            [row - 1, col],
            [row + 1, col],
            [row, col - 1],
            [row, col + 1],
        ];

        for (const [r, c] of candidates) {
            const inBounds = r >= 0 && r < this.opponentBoard.size &&
                            c >= 0 && c < this.opponentBoard.size;
            if (!inBounds) continue;

            const alreadyQueued = this.targetQueue.some(([qr, qc]) => qr === r && qc === c);
            const alreadyAttacked = this.opponentBoard.board[r][c].attacked;

            if (!alreadyAttacked && !alreadyQueued) {
            this.targetQueue.push([r, c]);
            }
        }
    }

    huntAttack() {
        //needs to hunt after getting a hit
        //needs to check if cell has already been attacked
        //needs to add neighbors to queue
        //needs to stop the hunt after getting a sink
        let row, col;

        if (this.targetQueue.length > 0) {
            [row, col] = this.targetQueue.shift();
        } else {
            row = Math.floor(Math.random() * this.opponentBoard.size);
            col = Math.floor(Math.random() * this.opponentBoard.size);
            while (this.opponentBoard.board[row][col].attacked) {
                row = Math.floor(Math.random() * this.opponentBoard.size);
                col = Math.floor(Math.random() * this.opponentBoard.size);
            }
        }

        const result = this.attack(row, col);
        if (result.hit) {
            this.queueNeighbors(row, col);
        }
        return result;
    }
};