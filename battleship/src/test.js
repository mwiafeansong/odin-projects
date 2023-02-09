import './style.css';

import Ship from './factories/ship';
import GameBoard from './factories/gameboard';

const ship = new Ship('carrier');
const ship2 = new Ship('patrol boat');
const ship3 = new Ship('destroyer');
const ship4 = new Ship('submarine');
const gameboard = new GameBoard();
gameboard.renderBoard();
// gameboard.placeShip(ship, 7, 'vertical');
gameboard.placeShip(ship2, 0, 'horizontal');
gameboard.placeShip(ship3, 99, 'vertical');
// gameboard.placeShip(ship4, 8, 'horizontal');

// for (let i = 0; i < 100; i++) {
//   console.log(`${i}. ${gameboard.board[i]}`);
// }
// console.log(ship.positions);
console.log(ship2.positions);
console.log(ship3.positions);
// console.log(ship4.positions);

// gameboard.receiveAttack(2);
// console.log(gameboard.missedShots);

gameboard.receiveAttack(0);
gameboard.receiveAttack(1);
gameboard.receiveAttack(57);
gameboard.receiveAttack(79);
gameboard.receiveAttack(89);
gameboard.receiveAttack(99);
// console.log(gameboard.missedShots);
console.log(gameboard.allShipsSunk());
// gameboard.allShipsSunk();
// console.log(ship2.isSunk());
// console.log(ship3.isSunk());
// console.log(ship2.numHits);
// console.log(ship3.numHits);
// console.log(gameboard.shipsOnBoard);
