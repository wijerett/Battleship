


const shipLengths = new Map([
    ['carrier', 5],
    ['battleship', 4],
    ['cruiser', 3],
    ['submarine', 2],
    ['patrol', 1]
]);


export class Ship {
    constructor(length, hits) {
        this.length = length;
        this.hits = hits;
        this.sunk = null;
    }


    //need to make this look like my hits array up top


    
    hit() {
        //if hit is detected this.hits +1
        this.shipLengths.hits++;//change because of hash map
    }

    isSunk() {
        //calculates whether a ship is considered sunk based on its length
        if (this.hits == shipLength) {
            alert("Hit and sink");
            this.sunk === 'sunk';
        }
        //and the number of hits it has received
    }

}


const ship = new Ship();
const lengths = shipLengths;
const hit = lengths.set('carrier', 1);
// hit;
// hit;
console.log(lengths);
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
