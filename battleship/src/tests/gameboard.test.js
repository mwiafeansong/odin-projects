import GameBoard from '../factories/gameboard';
import Ship from '../factories/ship';

let ship;
let ship2;
let gameboard;
beforeAll(() => {
  ship = new Ship('carrier');
  ship2 = new Ship('patrol boat');
  gameboard = new GameBoard();
  gameboard.renderBoard();
});

describe('places a ship', () => {
  describe('places a ship horizontally forwards', () => {
    beforeEach(() => {
      gameboard.placeShip(ship, 4, 'horizontal');
    });
    test('position 4 filled', () => {
      expect(gameboard.getBoardAtId(4)).toBe('carrier');
    });
    test('position 8 filled', () => {
      expect(gameboard.getBoardAtId(8)).toBe('carrier');
    });
    test('position 9 not filled', () => {
      expect(gameboard.getBoardAtId(9)).toBeNull();
    });
  });

  describe('places a ship vertically forwards', () => {
    beforeEach(() => {
      gameboard.placeShip(ship, 0, 'vertical');
    });
    test('position 0 filled', () => {
      expect(gameboard.getBoardAtId(0)).toBe('carrier');
    });
    test('position 10 filled', () => {
      expect(gameboard.getBoardAtId(10)).toBe('carrier');
    });
    test('position 20 not filled', () => {
      expect(gameboard.getBoardAtId(20)).toBe('carrier');
    });
    test('position 6 not filled', () => {
      expect(gameboard.getBoardAtId(60)).toBeNull();
    });
  });

  describe('places a ship horizontally backwards if edge is met', () => {
    beforeEach(() => {
      gameboard.placeShip(ship, 7, 'horizontal');
    });
    test('position 7 filled', () => {
      expect(gameboard.getBoardAtId(7)).toBe('carrier');
    });
    test('position 5 filled', () => {
      expect(gameboard.getBoardAtId(5)).toBe('carrier');
    });
    test('position 3 filled', () => {
      expect(gameboard.getBoardAtId(3)).toBe('carrier');
    });
    test('position 2 is null', () => {
      expect(gameboard.getBoardAtId(2)).toBeNull();
    });
  });

  describe('places a ship vertically backwards if edge is met', () => {
    beforeEach(() => {
      gameboard.placeShip(ship, 99, 'vertical');
    });
    test('position 99 filled', () => {
      expect(gameboard.getBoardAtId(99)).toBe('carrier');
    });
    test('position 89 filled', () => {
      expect(gameboard.getBoardAtId(89)).toBe('carrier');
    });
    test('position 59 filled', () => {
      expect(gameboard.getBoardAtId(59)).toBe('carrier');
    });
    test('position 94 is null', () => {
      expect(gameboard.getBoardAtId(96)).toBeNull();
    });
  });
});

describe('receives an attack on ship', () => {
  beforeEach(() => {
    gameboard.placeShip(ship, 51, 'horizontal');
  });
  test('ship gets hit', () => {
    expect(ship.numHits).toBe(0);
    expect(ship.isSunk()).toBe(false);
  });
  test('ship gets hits and sinks', () => {
    gameboard.receiveAttack(51);
    gameboard.receiveAttack(52);
    gameboard.receiveAttack(53);
    gameboard.receiveAttack(54);
    gameboard.receiveAttack(55);
    expect(ship.numHits).toBe(5);
    expect(ship.isSunk()).toBe(true);
  });
  test('missed shot', () => {
    gameboard.receiveAttack(51);
    gameboard.receiveAttack(61);
    expect(gameboard.missedShots).toEqual([61]);
  });
});

describe('determines if all ships have sunk', () => {
  beforeEach(() => {
    gameboard.placeShip(ship, 51, 'horizontal');
    gameboard.placeShip(ship2, 99, 'vertical');
  });
  test('not all ships sunk', () => {
    gameboard.receiveAttack(53);
    gameboard.receiveAttack(54);
    gameboard.receiveAttack(55);
    gameboard.receiveAttack(99);
    gameboard.receiveAttack(98);
    expect(gameboard.allShipsSunk()).toBe(false);
  });
  test('all ships sunk', () => {
    gameboard.receiveAttack(51);
    gameboard.receiveAttack(52);
    gameboard.receiveAttack(53);
    gameboard.receiveAttack(54);
    gameboard.receiveAttack(55);
    gameboard.receiveAttack(99);
    gameboard.receiveAttack(89);
    expect(gameboard.allShipsSunk()).toBe(true);
  });
});
