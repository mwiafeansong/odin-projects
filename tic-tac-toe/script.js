const GameBoard = (function() {
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
        [2, 4, 6]
    ]

    //populates board array with 'dummy' content
    const renderBoard = () => {
        for (let i = 0; i < 9; i++) {
            board.push(0);
        }
    }

    //empties the board array
    const clearBoard = () => {
        for (let i = 0; i < 9; i++) {
            board.pop();
        }
    }

    //add a player's marker to the board array when they play
    const addToBoard = (cellId, marker) => {
        board[cellId] = marker;
    }

    //the dataid of the cell will be used to add the player's marker to the board array
    const getCellId = (cell) => {
        return cell.getAttribute('data-id');
    }

    return { board, gridCells, winningCombos, renderBoard, addToBoard, getCellId, clearBoard }   
})();


function player(marker) {
     
    return { marker }
}


const GameController = (function() {
    let player1 = player('X');
    let player2 = player('O');
    const gameStatus = document.querySelector('.game-status');

    function playRound(e) {
        //only change the player if they did not play in a wrong spot, or play when the game ended
        if (wrongPlay === false) {
            currentPlayer = changePlayer(currentPlayer);
        }
        
        //player makes their play
        cellClicked(e.target, currentPlayer);
        
        //winnerMarker will be undefined if no one has won yet
        //it will be 'tie' or winning player's marker otherwise
        winnerMarker = checkWinner(GameBoard.winningCombos);
        if (winnerMarker) {
            running = false;   //the game has ended
            displayWinner(winnerMarker);
        }
    }

    //to alternate players
    const changePlayer = (player) => {
        if (player === undefined) return player1;
        else if (player === player1) return player2;
        else if (player === player2) return player1;
    }

    function cellClicked(cell, currentPlayer) {
        //if the cell is empty and the game has not ended ie(no winner yet), then make play
        if (cell.textContent === '' && running) {
            let cellId = GameBoard.getCellId(cell);
            GameBoard.addToBoard(cellId, currentPlayer);
            cell.textContent = currentPlayer.marker; 
            wrongPlay = false;   
        } else {
            //set to true if player tries to play in a spot already taken or plays when the game has ended
            //this will be used to assess whether to change the player or make the same player play again
            wrongPlay = true;
        }
    }

    function checkWinner(winningCombos) {
        for (const combo of winningCombos) {
            let board1 = GameBoard.board[combo[0]];
            let board2 = GameBoard.board[combo[1]];
            let board3 = GameBoard.board[combo[2]];
            
            //if elements match the winning combos, the player's marker is returned
            if (board1 === board2 && board2 === board3 && board1 === board3 && board1 !== 0 && board2 !== 0 && board3 !== 0) {
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
        if (winnerMarker === 'X') gameStatus.textContent = 'Player One Wins!';
        else if (winnerMarker === 'O') gameStatus.textContent = 'Player Two Wins!';
        else gameStatus.textContent = "It's A Tie!";
    }

    
    function restartGame() {
        winnerMarker = undefined;
        running = true;
        
        //empty board array
        GameBoard.clearBoard();
        //repopulate board
        GameBoard.renderBoard();
        //clear all cells on Dom
        for (const cell of GameBoard.gridCells) {
            cell.textContent = '';
        }
        //clear game winner display
        gameStatus.textContent = '';
    }
     

    return { playRound, restartGame }
})();


//--------------------------------------------------------------------
// MAIN

const restart = document.querySelector('.restart');

GameBoard.renderBoard();
let currentPlayer;
let winnerMarker;
let running = true;
let wrongPlay = false;

for (const cell of GameBoard.gridCells) {
    cell.addEventListener('click', (e) => {
        GameController.playRound(e);
    })
}

restart.addEventListener('click', GameController.restartGame);















