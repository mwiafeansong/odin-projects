const GameBoard = (function() {
    let board = ['', '', '', '', '', '', '', '', ''];
    // let board = [];
    const cells = document.querySelectorAll('.cell');

    const winningCombos = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ]

    const renderBoard = () => {
        for (let i = 0; i < board.length; i++) {
            cells[i].textContent = board[i];
        }
    }

    const markBoard = (e, marker) => {
        let cellId = parseInt(e.target.getAttribute('data-id'));
        if (board[cellId] === '') {
            board[cellId] = marker;
            renderBoard();
        }
    }

    return {board, cells, renderBoard, markBoard};

})();

function player(marker) {

    const cellClicked = () => {
        GameBoard.cells.forEach((cell) => {
            cell.addEventListener('click', (e) => {
                GameBoard.markBoard(e, marker);
            })
        })
    }

    const getMarker = () => marker;

    return {cellClicked, getMarker}

}




const controlFlow = (function() {
    
    const player1 = player('X');
    const player2 = player('O');

    let currentPlayer = player1;
    
    const changePlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }

    const game = () => {
        currentPlayer.cellClicked();
        changePlayer();
    }

    return {changePlayer, game};
    
})();

controlFlow.game();

