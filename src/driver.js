import { Gameboard } from "./board.js";
import { Player } from "./player.js";



export class driveGame {
    constructor() {
        this.player = Player.realPlayer();
        this.compPlayer = Player.compPlayer();
        
    }
}