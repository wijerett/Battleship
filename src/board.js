import { Ship } from "./game.js";

export class Gameboard {
    constructor() {
        this.rows = 5;
        this.colums = 5;
    }



    //place ships at specific coordinates by calling ship class
    
    
    //receiveAttack function that takes a pair of coordinates, determines

    //if attack hit a ship then sends hit function to the correct ship or 
    //records coordinates of the missed shot

    //gameboard should be able to keep track of missed shots

    //gameboard should be able to report if all ships are sunk or not

}

const boardSize = 10;

const board = [];


  
for (let i = 0; i != boardSize; i++) {
   board.push([]);
    for (let j = 0; j != boardSize; j++) {
       board[i].push(0);
    }
}
console.log(board);





