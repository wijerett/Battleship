
import { Ship } from "./game.js";


export class Gameboard {
    constructor(size = 12) {
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
                rowArray.push({ ship: null, hit: "" });
            }
            board.push(rowArray);
        }
        return board;
    };

    placeShips(length, row, col, direction) {
        const ship = new Ship(length);
        const coordinates = [];

        for (let i = 0; i < ship.length; i++) {
            const r = direction === 'vertical' ? row + i : row;
            const c = direction === 'horizontal' ? col + i : col;

            if (r >= this.size || c >= this.size) {
                throw new Error('Ship out of bounds');
            }
            if (this.board[r][c].ship !== null) {
                throw new Error('Cell already occupied');
            }
            coordinates.push([r, c]);
        }
        coordinates.forEach(([r, c]) => {
            this.board[r][c].ship = ship;
        });
        this.ships.push(ship);
        return ship;
    }


    receiveAttack(row, col) {
        const cell = this.board[row][col];

        if (cell.attacked) {
            throw new Error('Cell already attacked');
        }

        if (cell.ship) {
            cell.ship.hit();
        } else {
            this.missedAttacks.push([row, col]);
        };
        cell.attacked = true;
        return cell.attacked;
    }

    allShipsSunk() {
        return this.ships.every(ship => ship.isSunk());
    }
};
