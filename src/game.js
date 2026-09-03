



export class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
        // this.name = this.name;
    }

    //name ships as they are created

    hit(row, col) {

        this.hits += 1;
        this.isSunk();
        //needs to accept coordinates to call ship.hit()
    }

    isSunk() {
        if (this.hits === this.length) {
            return this.sunk = true;
        };
    };

};


export class Player {

    //real player vs computer player

    //each player object contain its own gameboard

}


//import classes/factories into another file, drive the game using event
//listeners to interact with the objects. create a module that helps 
//manage action that should happen in the DOM

//Do all of the above before crafting user interface
