const GameBoard = (function() {
    let board = [];
    const gridCells = document.querySelectorAll('.grid-item');

    const renderBoard = () => {
        for (let i = 0; i < board.length; i++) {
            gridCells[i].textContent = board[i];
        }
    }
    
    const addToBoard = (cellId, marker) => {
        board[cellId] = marker;
    }

    const getBoardId = (cellIndex) => {
        return board[cellIndex];
    }

    const resetBoard = () => {
        board = [];
    }

    return { board, gridCells, renderBoard, addToBoard, getBoardId }

    

})();

function player(marker) {
    this.hasPlayed = false;
    
    const cellClicked = () => {
        for (const cell of GameBoard.gridCells){
            cell.addEventListener('click', (e) => {
                let cellId = e.target.getAttribute('data-id');
                
                if (GameBoard.board[cellId] === undefined ) {
                    GameBoard.addToBoard(cellId, marker);
                    cell.textContent = marker;
                    console.log(GameBoard.board)
                }
            })
        }
    }

    const resetHasPlayed = () => {
        this.hasPlayed = false;
    }

    return {cellClicked, resetHasPlayed}
    
}

const controlFlow = (function() {
    const player1 = player('X');
    const player2 = player('O');

    

    const game = () => {
       currentPlayer.cellClicked();
    }
    
    return {game};

})();

// const player3 = player('p');
// player3.cellClicked();





