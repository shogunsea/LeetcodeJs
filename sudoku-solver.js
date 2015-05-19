// Write a program to solve a Sudoku puzzle by filling the empty cells.

// Empty cells are indicated by the character '.'.

// You may assume that there will be only one unique solution.


// A sudoku puzzle...


// ...and its solution numbers marked in red.

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    if (board === undefined || board === null) {
    	return;
    }
    var row = board.length;
    var col = board[0].length;

    solve(board, 0);
};

function solve(board, index) {
	if (index === 81) {
		return true;
	}

	var x = Math.floor(index / 9);
	var y = index % 9;

	if (board[x][y] === '.') {
		for (var i = 1; i <= 9; i++) {
			if (isValid(board, x, y, '' + i)) {
				board[x][y] = '' + i;
				if (solve(board, index + 1)) {
					return true;
				}
				board[x][y] = '.';
			}
		}
		return false;
	} else {
		if(solve(board, index + 1)) {
			return true;
		} else {
			return false;
		}
	}
}

function isValid(board, x, y, c) {
	var i, j;
	var startRow, startCol;
	for (i = 0; i < 9; i++) {
		if (board[i][y] === c) {
			return false;
		}
	}
	for (j = 0; j < 9; j++) {
		if (board[x][j] === c) {
			return false;
		}
	}
	
	startRow = Math.floor(x / 3) * 3;
	startCol = Math.floor(y / 3) * 3;
	for (i = startRow; i < startRow + 3; i++) {
		for (j = startCol; j < startCol + 3; j++) {
			if (board[i][j] === c) {
				return false;
			}
		}
	}
	return true;
}












