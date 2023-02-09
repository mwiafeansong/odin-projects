class Ship {
  constructor(type) {
    this.type = type;

    switch (this.type) {
      case 'carrier':
        this.size = 5;
        break;
      case 'battleship':
        this.size = 4;
        break;
      case 'destroyer':
        this.size = 3;
        break;
      case 'submarine':
        this.size = 3;
        break;
      case 'patrol boat':
        this.size = 2;
        break;
      default:
        this.size = 0;
    }

    this.numHits = 0;
    this.sunk = false;
    this.positions = [];
    this.allHits = [];
  }

  hit(posChoice) {
    for (let i = 0; i < this.allHits.length; i++) {
      if (posChoice === this.allHits[i]) {
        return;
      }
    }
    this.allHits.push(posChoice);
    this.numHits++;
  }

  isSunk() {
    if (this.numHits === this.size) {
      this.sunk = true;
    }
    return this.sunk;
  }
}

export default Ship;
