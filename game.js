


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


    


    hit() {
        //if hit is detected this.hits +1
        // this.shipLengths.hits++;//change because of hash map
        const ship = new Ship();
        const hit = lengthsMap.set('carrier', 1);
        if(length > 0) {
            ship.hits = lengthsMap;
        }
    }

    isSunk() {
        //calculates whether a ship is considered sunk based on its length
        // if (hits == shipLength) {
        //     alert("Hit and sink"
    }



}


    console.log(lengthsMap);
    console.log(ship);

// // const ship = new Ship();
// // const lengthsMap = shipLengths;
// const hit = lengthsMap.set('carrier', 1);
// hit;
// hit;


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


const ship = new Ship();
console.log(ship);

//import classes/factories into another file, drive the game using event
//listeners to interact with the objects. create a module that helps 
//manage action that should happen in the DOM

//Do all of the above before crafting user interface
