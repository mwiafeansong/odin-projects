import Ship from '../factories/ship';

describe('ship functions', () => {
  let ship;
  beforeEach(() => {
    ship = new Ship('submarine');
  });

  test('returs number of hits', () => {
    ship.hit(0);
    ship.hit(3);
    expect(ship.numHits).toBe(2);
  });

  test('returns true if a ship is sunk', () => {
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    expect(ship.isSunk()).toBe(true);
  });

  test('returns false if a ship is not sunk', () => {
    ship.hit(0);
    expect(ship.isSunk()).toBe(false);
  });

  test('returns false if one place received more than one hit', () => {
    ship.hit(0);
    ship.hit(0);
    ship.hit(2);
    expect(ship.isSunk()).toBe(false);
  });
});
