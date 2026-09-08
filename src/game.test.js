import { Ship } from "./game.js";
import { Gameboard } from "./board.js";
import { Player } from "./player.js";


const board = new Gameboard();

const ship = new Ship();


const ships = new Map([
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
    expect(board.board[0][0]).toEqual({ ship: null, hit: "" });
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
    const ship1 = board.placeShips(4, 0, 0, 'horizontal');
    const ship2 = board.placeShips(3, 1, 0, 'horizontal');
    ship1.hit(0, 0);
    ship2.hit(1, 1);
    expect(board.ships).toEqual([{ "hits": 1, "length": 4, "sunk": false },
        { "hits": 1, "length": 3, "sunk": false}
    ]);
});

test('missed shot', () => {
    const board = new Gameboard(6);
    board.receiveAttack(3, 3);
    expect(board.missedAttacks.length).toBe(1);
});

test('hit registers on ship', () => {
    const board = new Gameboard(6);
    board.placeShips(2, 0, 0, 'horizontal');
    board.receiveAttack(0, 0);
    expect(board.board[0][0].ship.hits).toBe(1);
});

test('ship sinks', () => {
    const board = new Gameboard(6);
    const ship = board.placeShips(1, 0, 0, 'horizontal');
    board.receiveAttack(0, 0);
    expect(ship.isSunk()).toBe(true);
});

test('attacking a ship cell calls hit on the correct ship', () => {
    const board = new Gameboard(6);
    const ship = board.placeShips(2, 0, 0, 'horizontal');
    const ship2 = board.placeShips(4, 2, 4, 'vertical');
    board.receiveAttack(2, 4);
    board.receiveAttack(0, 0);
    expect(ship2.hits).toBe(1);
    expect(ship.hits).toBe(1);
});

test('cell not attacked', () => {
    const board = new Gameboard(6);
    expect(board.board[2][2].attacked).toBeFalsy();
});

test('cell is marked after miss', () => {
    const board = new Gameboard(6);
    board.receiveAttack(2, 2);
    expect(board.board[2][2].attacked).toBe(true);
});

test('unable to attack a cell twice', () => {
    const board = new Gameboard(6);
    board.receiveAttack(2, 2);
    expect(() => {
        board.receiveAttack(2, 2);
    }).toThrow('Cell already attacked');
});

test('check if all ships are sunk', () => {
    const board = new Gameboard(6);
    const ship = board.placeShips(4, 0, 0, 'vertical');
    const ship2 = board.placeShips(1, 2, 2, 'vertical');
    board.receiveAttack(2, 2);
    expect(board.allShipsSunk()).toBe(false);
});

test('player tracks ships inside', () => {
    const player1 = new Player();
    expect(player1).toBeTruthy();
});