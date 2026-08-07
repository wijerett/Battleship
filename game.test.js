import { Ship } from "./game";




const ship = new Ship();


test('ship exists', () => {
    expect(ship).toBe({ "length": undefined, "hits": 0, "sunk": false})
});
