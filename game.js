

//ship class or factory


export class Ship {
    constructor() {
        this.length = length;
        this.hits = null;
        this.sunk = null;
    }

    hitCap = this.sunk;
    

    hit() {
        //if hit is detected this.hits +1
        if (hit()) this.hits = ++1;
    }

    isSunk() {
        //calculates whether a ship is considered sunk based on its length
        //and the number of hits it has received
    }
}






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
