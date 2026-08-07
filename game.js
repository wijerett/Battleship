


const shipLengths = new Map([
    ['carrier', 5],
    ['battleship', 4],
    ['cruiser', 3],
    ['submarine', 2],
    ['patrol', 1]
]);

const shipHits = new Map([
    ['carrier', 0],
    ['battleship', 0],
    ['cruiser', 0],
    ['submarine', 0],
    ['patrol', 0]
]);


export class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    populateShip() {
        const shipSize = shipLengths;
        const shipHitsPopulated = shipHits;
        this.length = shipSize.value;
        this.hits = shipHitsPopulated.value;
    }

    hit(key) {
        
        //if i update with each hit to shipHits i can do a 
        //comparison statement to say if shipHits === shipLengths, then sunk

        if (key == 'carrier') {
            shipHits.set('carrier', shipHits.get('carrier') + 1);
            this.isSunk();
        } else if (key == 'battleship') {
            shipHits.set('battleship', shipHits.get('battleship') + 1);
            this.isSunk();
        } else if (key == 'cruiser') {
            shipHits.set('cruiser', shipHits.get('cruiser') + 1);
            this.isSunk();
        } else if (key == 'submarine') {
            shipHits.set('submarine', shipHits.get('submarine') + 1);
            this.isSunk();
        } else if (key == 'patrol') {
            shipHits.set('patrol', shipHits.get('patrol') + 1);
            this.isSunk();
        }

    }

    isSunk() {
        //calculates whether a ship is considered sunk based on its length
        // if (shipHits == shipLength) {
        //     alert("Hit and sink")

        for (const [ship, hits] of shipHits) {
            if (hits === shipLengths.get(ship)) {
                console.log(`${ship} is sunk!`);
            }
        }
    }


}




let ship = new Ship();
ship.populateShip();
let hit = ship.hit('patrol');
// console.log(hit);
console.log(ship);
// console.log(shipLengths);
// console.log(shipHits);


// const ship = new Ship();
// const lengthsMap = shipLengths;
// const hit = lengthsMap.set('carrier', 1);



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
