



export class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit(key) {
        this.hits += 1;
        this.isSunk();
    }

    isSunk() {
        if (this.hits === this.length) {
            alert("hit and sink");
            return this.sunk = true;
        };
    };    
};



// ships.get('carrier').hit();
// ships.get('carrier').hit();
// ships.get('carrier').hit();
// ships.get('carrier').hit();
// ships.get('carrier').hit();
// console.log(ships);
// console.log(hit);




export class Player {

    //real player vs computer player

    //each player object contain its own gameboard

}


//import classes/factories into another file, drive the game using event
//listeners to interact with the objects. create a module that helps 
//manage action that should happen in the DOM

//Do all of the above before crafting user interface
