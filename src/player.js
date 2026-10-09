import { Gameboard } from "./board.js";

export class Player {
    constructor() {
        this.board = new Gameboard();
        this.opponentBoard = null;
        this.targetQueue = [];
        this.shipIndex = 0;
        this.shipLengths = [5, 4, 3, 3, 2];
    }

    

    setup() {
        //i need to add a way to let computer choose random ship placement
        
        this.board = new Gameboard();
        this.board.placeShips(5, 0, 0, 'horizontal');
        this.board.placeShips(4, 1, 0, 'horizontal');
        this.board.placeShips(3, 2, 0, 'horizontal');
        this.board.placeShips(3, 3, 0, 'horizontal');
        this.board.placeShips(2, 4, 0, 'horizontal');
    }



    randomSetup() {
        this.board = new Gameboard();

        for (const length of this.shipLengths) {
            let placed = false;

            while (!placed) {
                const row = Math.floor(Math.random() * this.board.size);
                const col = Math.floor(Math.random() * this.board.size);
                const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';

                if (this.board.canPlace(length, row, col, direction)) {
                    this.board.placeShips(length, row, col, direction);
                    placed = true;
                }
            }
        }
    }

    playerPlacements() {
        if (this.shipIndex >= this.shipLengths.length) return true;

        const rowBox = document.querySelector('#rowBox');
        const colBox = document.querySelector('#colBox');
        const directionBox = document.querySelector('#directionBox');

        const playerRow = Number(rowBox.value);
        const playerCol = Number(colBox.value);
        const playerDir = directionBox.value;

        if (rowBox.value !== "" & colBox.value !== "" && directionBox !== "") {
            const placed = this.board.placeShips(
                this.shipLengths[this.shipIndex],
                playerRow,
                playerCol,
                playerDir
            );

            if (placed) {
                this.shipIndex++;
                rowBox.value = "";
                colBox.value = "";
                directionBox.value = "";
            }
        }
        return this.shipIndex >= this.shipLengths.length;
    }

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

