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
     
}

const GameController = (function() {
    

})();

// const player3 = player('p');





