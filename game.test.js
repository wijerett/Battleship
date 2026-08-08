import { describe } from "yargs";
import { Ship } from "./game";
import { beforeEach } from "jest-circus";



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




const ship = new Ship();

describe('shipsValues', () => {})

test('ship exists', () => {
    expect(ship).toEqual({ "length": undefined, "hits": 0, "sunk": false})
});

