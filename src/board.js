
import { Ship } from "./game.js";





const shipTypes = new Map([
    ['carrier', 5],
    ['battleship', 4],
    ['cruiser', 3],
    ['submarine', 3],
    ['patrol', 1]
]);
export class Gameboard {
    constructor(size = 12) {
        this.size = size;
        this.board = this.buildBoard();
        this.ships = [];
    }

    buildBoard() {
        const board = [];

        for (let row = 0; row < this.size; row++) {
            const rowArray = [];
            for (let col = 0; col < this.size; col++) {
                rowArray.push({ ship: null, hit: false });
            }
            board.push(rowArray);
        }
        
        return board;
    }

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
    //i need to add a way to name each ship as its placed to reference later



    receiveAttack (row, col) {
        
        if (this.board.ship !== null) {
            Ship.hit()
        }
    }

    //place ships at specific coordinates by calling ship class
    
    
    //receiveAttack function that takes a pair of coordinates, determines

    //if attack hit a ship then sends hit function to the correct ship or 
    //records coordinates of the missed shot

    //gameboard should be able to keep track of missed shots

    //gameboard should be able to report if all ships are sunk or not

//     printBoard() {
//     let output = '';
//     for (let row = 0; row < this.size; row++) {
//         let rowStr = '';
//         for (let col = 0; col < this.size; col++) {
//             const cell = this.board[row][col];
//             if (cell.hit && cell.ship) rowStr += 'X ';
//             else if (cell.hit) rowStr += 'O ';
//             else if (cell.ship) rowStr += 'S ';
//             else rowStr += '. ';
//         }
//         output += rowStr + '\n';
//     }
//     console.log(output);
// }


}







// let game = new Gameboard();

// game.placeShips(5, 0, 0, 'vertical');
// game.placeShips(4, 0, 2, 'vertical');
// game.placeShips(4, 7, 0, 'horizontal');
// game.placeShips(2, 0, 6, 'vertical');
// game.placeShips(1, 10, 0, 'horizontal');

// game.printBoard();


