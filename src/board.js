
import { Ship } from "./game.js";



const ships = new Map([
    ['carrier', new Ship(5)],
    ['battleship', new Ship(4)],
    ['cruiser', new Ship(3)],
    ['submarine', new Ship(3)],
    ['patrol', new Ship(1)]
]);
export class Gameboard {
    constructor(size = 6) {
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
        //board.push(ships);
        return board;
    }

    placeShips() {
        if (this.ships !== []) {
            //let number in length determine how many arrays the ship encompasses
            let length = ships.get(length);
            //somehow get length with gameboard.ships.length and tell program to
            //split ship object into multiple pieces to fill in how many array objects
            //equal to the length of that object
        }
    }

    coordinates() {   
    }

    //place ships at specific coordinates by calling ship class
    
    
    //receiveAttack function that takes a pair of coordinates, determines

    //if attack hit a ship then sends hit function to the correct ship or 
    //records coordinates of the missed shot

    //gameboard should be able to keep track of missed shots

    //gameboard should be able to report if all ships are sunk or not

}




let game = new Gameboard();
game.ships = ships;

console.log(game);

