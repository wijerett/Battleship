import { Ship } from "./game";
import { Gameboard } from "./board";


const board = new Gameboard();

const ship = new Ship();


ships = new Map([
    ['carrier', new Ship(5)],
    ['battleship', new Ship(4)],
    ['cruiser', new Ship(3)],
    ['submarine', new Ship(3)],
    ['patrol', new Ship(1)]
]);

test('ship exists', () => {
    expect(ship).toEqual({ length: undefined, hits: 0, sunk: false})
});

test('receive a hit', () => {
    ships.get('carrier').hit();
    expect(ships.get('carrier')).toEqual({ length: 5, hits: 1, sunk: false })
});

test('is sunk', () => {
    ships.get('carrier').hit();
    ships.get('carrier').hit();
    ships.get('carrier').hit();
    ships.get('carrier').hit(2);
    expect(ships.get('carrier')).toEqual({ length: 5, hits: 5, sunk: true })
});

test('')

