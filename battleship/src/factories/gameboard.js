class GameBoard {
  constructor() {
    this.board = [];
    this.horizontalEdges = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];
    this.verticalEdges = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
    this.missedShots = [];
    this.shipsOnBoard = [];
  }

  renderBoard() {
    for (let i = 0; i < 100; i++) {
      this.board[i] = null;
    }
  }

  getBoardAtId(index) {
    return this.board[index];
  }

  placeForwardsHorizontal(ship, posChoice) {
    for (let i = 0; i < 100; i++) {
      if (i >= posChoice && i < posChoice + ship.size) {
        this.board[i] = ship.type;
        ship.positions.push(i);
      }
    }
    this.shipsOnBoard.push(ship);
  }

  placeForwardsVertical(ship, posChoice) {
    const boxesToFill = [];
    let interval = 0;
    const lastBoxFilled = posChoice + (ship.size - 1) * 10;

    for (let i = posChoice; i <= lastBoxFilled; i++) {
      if (interval % 10 === 0) {
        boxesToFill.push(i);
      }
      interval++;
    }

    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < boxesToFill.length; j++) {
        if (i === boxesToFill[j]) {
          this.board[i] = ship.type;
          ship.positions.push(i);
        }
      }
    }
    this.shipsOnBoard.push(ship);
  }

  placeBackwardsHorizontal(ship, posChoice) {
    for (let i = 0; i < 100; i++) {
      if (i > posChoice - ship.size && i <= posChoice) {
        this.board[i] = ship.type;
        ship.positions.push(i);
      }
    }
    this.shipsOnBoard.push(ship);
  }

  placeBackwardsVertical(ship, posChoice) {
    const boxesToFill = [];
    let interval = 0;
    const lastBoxFilled = posChoice - (ship.size - 1) * 10;

    for (let i = lastBoxFilled; i <= posChoice; i++) {
      if (interval % 10 === 0) {
        boxesToFill.push(i);
      }
      interval++;
    }

    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < boxesToFill.length; j++) {
        if (i === boxesToFill[j]) {
          this.board[i] = ship.type;
          ship.positions.push(i);
        }
      }
    }
    this.shipsOnBoard.push(ship);
  }

  placeShip(ship, posChoice, direction) {
    if (direction === 'horizontal') {
      for (let i = 0; i < this.horizontalEdges.length; i++) {
        for (let j = posChoice; j < posChoice + ship.size; j++) {
          if (this.horizontalEdges[i] === j) {
            this.placeBackwardsHorizontal(ship, posChoice);
            return;
          }
        }
      }
      this.placeForwardsHorizontal(ship, posChoice);
    }

    if (direction === 'vertical') {
      const shipSpan = [];
      let interval = 0;
      const lastBoxFilled = posChoice + (ship.size - 1) * 10;

      for (let i = posChoice; i <= lastBoxFilled; i++) {
        if (interval % 10 === 0) {
          shipSpan.push(i);
        }
        interval++;
      }

      for (let i = 0; i < this.verticalEdges.length; i++) {
        for (let j = 0; j < shipSpan.length; j++) {
          if (this.verticalEdges[i] === shipSpan[j]) {
            this.placeBackwardsVertical(ship, posChoice);
            return;
          }
        }
      }

      this.placeForwardsVertical(ship, posChoice);
    }
  }

  receiveAttack(posChosen) {
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < this.shipsOnBoard.length; j++) {
        if (i === posChosen && this.board[i] === this.shipsOnBoard[j].type) {
          this.shipsOnBoard[j].hit(posChosen);
          break;
        } else if (i === posChosen && this.board[i] === null) {
          this.missedShots.push(posChosen);
          break;
        }
      }
    }
  }

  allShipsSunk() {
    for (let i = 0; i < this.shipsOnBoard.length; i++) {
      if (!this.shipsOnBoard[i].isSunk()) {
        return false;
      }
    }

    return true;
  }
}

export default GameBoard;
