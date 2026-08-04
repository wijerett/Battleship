



export class Ship {
    constructor(length) {
        this.length = length;
        this.hits = [
            {name: 'carrier', length:5, hits:0},
            {name: 'battleship', length: 4, hits: 0},
            {name: 'cruiser', length: 3, hits: 0},
            {name: 'submarine', length: 2, hits: 0},
            {name: 'patrol', length: 1, hits: 0}
        ];
        this.sunk = null;
    }


    //need to make this look like my hits array up top
    shipLengths = [
    {carrier: 5},
    {battleship: 4},
    {cruiser: 3},
    {submarine: 3},
    {destroyer: 2}
    ]

    
    hit() {
        //if hit is detected this.hits +1
        this.hits++;
    }

    isSunk() {
        //calculates whether a ship is considered sunk based on its length
        if (this.hits == this.length) {
            alert("Hit and sink");
        }
        //and the number of hits it has received
    }

}


const ship = new Ship();
const hit = ship.hit(['carrier']);
// hit;
// hit;
console.log(ship);


export class Gameboard {

    //place ships at specific coordinates by calling ship class
    
    
    //receiveAttack function that takes a pair of coordinates, determines


    //if attack hit a ship then sends hit function to the correct ship or 
    //records coordinates of the missed shot

    //gameboard should be able to keep track of missed shots

    //gameboard should be able to report if all ships are sunk or not

}



export class Player {

    //real player vs computer player

    //each player object contain its own gameboard

}




//import classes/factories into another file, drive the game using event
//listeners to interact with the objects. create a module that helps 
//manage action that should happen in the DOM

//Do all of the above before crafting user interface
