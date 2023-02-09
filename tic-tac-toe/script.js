// UTILITIES MODULE
const utils = (function () {
  function capitalize(str) {
    return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
  }

  return { capitalize };
})();

// GAMEBOARD MODULE
const GameBoard = (function () {
  let board = [];
  const gridCells = document.querySelectorAll('.cell');

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //populates board array with 'dummy' content
  const renderBoard = () => {
    for (let i = 0; i < 9; i++) {
      board.push(0);
    }
  };

  //empties the board array
  const clearBoard = () => {
    for (let i = 0; i < 9; i++) {
      board.pop();
    }
  };

  //add a player's marker to the board array when they play
  const addToBoard = (cellId, marker) => {
    board[cellId] = marker;
  };

  //the dataid of the cell will be used to add the player's marker to the board array
  const getCellId = (cell) => {
    return cell.getAttribute('data-id');
  };

  return {
    board,
    gridCells,
    winningCombos,
    renderBoard,
    addToBoard,
    getCellId,
    clearBoard,
  };
})();

// PLAYER FACTORY
function player(marker) {
  let name = '';
  return { marker, name };
}

// GAMECONTROLLER MODULE
const GameController = (function () {
  const gameStatus = document.querySelector('.game-status');
  const playerNames = document.querySelectorAll('.player-name');
  const oneScore = document.querySelector('.player1-score');
  const twoScore = document.querySelector('.player2-score');
  let winnerMarker;
  let running = true;
  let wrongPlay = false;

  let player1 = player('X');
  let player2 = player('O');
  let currentPlayer;

  let player1Score = 0;
  let player2Score = 0;

  // document.addEventListener('keypress', (e) => {
  //   if (e.keyCode === 13 || e.which === 13) {
  //     e.preventDefault();
  //   }
  // });

  function getNamesAndStart() {
    for (const name of playerNames) {
      name.addEventListener('click', () => {
        name.setAttribute('contenteditable', true);
        if (name.innerText === 'Name') name.textContent = '';
      });

      name.addEventListener('keypress', (e) => {
        if (e.keyCode === 13) {
          //e.preventDefault();
          //document.querySelector('.enter').click();
          name.setAttribute('contenteditable', false);
          if (name.classList.contains('player1-name')) {
            name.style.color = '#005254';
            player1.name = utils.capitalize(name.innerText);
          } else {
            name.style.color = '#cc2';
            player2.name = utils.capitalize(name.innerText);
          }
        }
        start();
      });
    }
  }

  function startGame() {
    GameBoard.renderBoard();

    setTimeout(function () {
      gameStatus.textContent = 'Players, Enter Your Names';
    }, 3000);

    getNamesAndStart();
  }

  function start() {
    if (player1.name !== '' && player2.name !== '') {
      for (const cell of GameBoard.gridCells) {
        cell.addEventListener('click', (e) => {
          GameController.playRound(e);
        });
      }
      gameStatus.textContent = `${player1.name}'s turn`;
    }
  }

  function playRound(e) {
    if (wrongPlay === false) {
      currentPlayer = changePlayer(currentPlayer);
    }

    gameStatus.textContent = `${changePlayer(currentPlayer).name}'s turn`;

    cellClicked(e.target, currentPlayer);

    //winnerMarker will be undefined if no one has won yet
    //it will be 'tie' or winning player's marker otherwise
    winnerMarker = checkWinner(GameBoard.winningCombos);
    if (winnerMarker) {
      running = false; //the game has ended
      displayWinner(winnerMarker);
      hightlightWinCells(GameBoard.winningCombos);

      if (player1Score < 5 && player2Score < 5) {
        setTimeout(clear, 2000);
      }

      if (player1Score === 5 || player2Score === 5) {
        displayOverallWinner();
      }
    }
  }

  //to alternate players
  const changePlayer = (player) => {
    if (player === undefined) return player1;
    else if (player === player1) return player2;
    else if (player === player2) return player1;
  };

  function cellClicked(cell, currentPlayer) {
    //if the cell is empty and the game has not ended ie(no winner yet), then make play
    if (cell.textContent === '' && running) {
      let cellId = GameBoard.getCellId(cell);
      GameBoard.addToBoard(cellId, currentPlayer);

      cell.textContent = currentPlayer.marker;
      if (currentPlayer.marker === 'X') {
        cell.classList.add('mark1');
      } else {
        cell.classList.add('mark2');
      }

      wrongPlay = false;
    } else {
      //set to true if player tries to play in a spot already taken or plays when the game has ended
      //this will be used to assess whether to change the player or make the same player play again
      wrongPlay = true;
      gameStatus.textContent = `${currentPlayer.name}'s turn`;
    }
  }

  function checkWinner(winningCombos) {
    for (const combo of winningCombos) {
      let board1 = GameBoard.board[combo[0]];
      let board2 = GameBoard.board[combo[1]];
      let board3 = GameBoard.board[combo[2]];

      //if elements match the winning combos, the player's marker is returned
      if (
        board1 === board2 &&
        board2 === board3 &&
        board1 === board3 &&
        board1 !== 0 &&
        board2 !== 0 &&
        board3 !== 0
      ) {
        return board1.marker;
      }
    }

    //if we get here, then there's no definitive winner yet
    for (const element of GameBoard.board) {
      //if there's an element that's 0, then all cells haven't been filled
      if (element === 0) return;
    }

    //if we get here, then all cells have been filled, with no definitive winner
    return 'tie';
  }

  function displayWinner(winnerMarker) {
    if (winnerMarker === 'X') {
      player1Score++;
      oneScore.textContent = player1Score;
      if (player1Score === 5) gameStatus.textContent = `${player1.name} Wins!`;
      else gameStatus.textContent = `Point, ${player1.name}!`;
    } else if (winnerMarker === 'O') {
      player2Score++;
      twoScore.textContent = player2Score;
      if (player1Score === 5) gameStatus.textContent = `${player2.name} Wins!`;
      else gameStatus.textContent = `Point, ${player2.name}!`;
    } else {
      gameStatus.textContent = 'Tie!';
      player1Score++;
      player2Score++;
      oneScore.textContent = player1Score;
      twoScore.textContent = player2Score;
    }
  }

  function displayOverallWinner() {
    gameStatus.classList.add('overall-victory');
  }

  function hightlightWinCells(winningCombos) {
    for (const combo of winningCombos) {
      let cell1 = GameBoard.gridCells[combo[0]];
      let cell2 = GameBoard.gridCells[combo[1]];
      let cell3 = GameBoard.gridCells[combo[2]];

      if (
        cell1.textContent === cell2.textContent &&
        cell2.textContent === cell3.textContent &&
        cell3.textContent === cell1.textContent &&
        cell1.textContent !== '' &&
        cell2.textContent !== '' &&
        cell3.textContent !== ''
      ) {
        cell1.classList.add('cell-victory');
        cell2.classList.add('cell-victory');
        cell3.classList.add('cell-victory');
      }
    }
  }

  function restartGame() {
    clear();

    player1Score = 0;
    player2Score = 0;
    oneScore.textContent = '0';
    twoScore.textContent = '0';
    gameStatus.classList.remove('overall-victory');
  }

  function clear() {
    winnerMarker = undefined;
    running = true;
    playCount = 0;

    //empty board array
    GameBoard.clearBoard();

    //repopulate board
    GameBoard.renderBoard();

    //clear all cells on Dom
    for (const cell of GameBoard.gridCells) {
      cell.textContent = '';
      cell.classList.remove('cell-victory');
      if (cell.classList.contains('mark1')) {
        cell.classList.remove('mark1');
      } else if (cell.classList.contains('mark2')) {
        cell.classList.remove('mark2');
      }
    }

    if (player1.name === '' && player2.name === '') {
      gameStatus.textContent = 'Players, Enter Your Names';
    } else if (player1.name === '') {
      gameStatus.textContent = 'Player One, Enter Your Name';
    } else if (player2.name === '') {
      gameStatus.textContent = 'Player Two, Enter Your Name';
    } else {
      gameStatus.textContent = `${changePlayer(currentPlayer).name}'s turn`;
    }
  }

  return { startGame, playRound, restartGame };
})();

//--------------------------------------------------------------------
// MAIN

//GameController.getPlayerNames();
GameController.startGame();

const restart = document.querySelector('.restart');

restart.addEventListener('click', GameController.restartGame);
