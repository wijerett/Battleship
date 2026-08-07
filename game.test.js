import { Ship } from "./game";




const ship = new Ship();



test('ship exists', () => {
    expect(ship).toEqual({ "length": undefined, "hits": 0, "sunk": false})
});

test('populates length and hits', () => {
    var pop = ship.populateShip();
    ship.populateShip('carrier', 2);
    ship.populateShip('battleship', 3);
    expect(ship.pop).toBe(('carrier', 2), ('battleship', 3))
});