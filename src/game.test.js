import { Ship } from "./game";
import { Gameboard } from "./board";
import { CHAR_CARRIAGE_RETURN } from "picomatch/lib/constants";


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

test('board creates empty grid', () => {
    const board = new Gameboard(6);
    expect(board.board.length).toBe(6);
    expect(board.board[0].length).toBe(6);
    expect(board.board[0][0]).toEqual({ ship: null, hit: false });
});

test('places ships in the correct cells', () => {
    const board = new Gameboard(6);
    const ship = board.placeShips(4, 0, 0, 'horizontal');

    expect(board.board[0][0].ship).toBe(ship);
    expect(board.board[0][3].ship).toBe(ship);
    expect(board.board[0][4].ship).toBeNull();
});

test('track ships on the board', () => {
    const board = new Gameboard(6);
    const ship = board.placeShips(4, 0, 0, 'horizontal');

    expect(board.ships).toContain(ship);
    expect(ship.length).toBe(4);
});

test('ship accepts hit', () => {
    const board = new Gameboard(6);
    const ship1 = board.placeShips(4, 0, 0, 'horizontal', 'carrier');
    const ship2 = board.placeShips(3, 1, 0, 'horizontal');
    ship1.hit(1);
    ship2.hit(1);
    expect(board.ships).toEqual([{ "hits": 1, "length": 4, "sunk": false },
        { "hits": 1, "length": 3, "sunk": false}
    ]);
});