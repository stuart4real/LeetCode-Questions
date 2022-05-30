// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
	let seen = new Set();

	for (let row = 0; row < 9; row++) {
		for (let col = 0; col < 9; col++) {
			let curr = board[row][col];

			// skip non-digit
			if (curr === ".") continue;

			let inRow = curr + " in row " + row,
				inCol = curr + " in col " + col,
				inSubBox =
					curr + " in block " + Math.floor(row / 3) + "-" + Math.floor(col / 3);

			if (seen.has(inRow) || seen.has(inCol) || seen.has(inSubBox))
				return false;

			// add the encoded string to the set
			seen.add(inRow);
			seen.add(inCol);
			seen.add(inSubBox);
		}
	}

	return true;
};

console.log(
	isValidSudoku([
		["8", "3", ".", ".", "7", ".", ".", ".", "."],
		["6", ".", ".", "1", "9", "5", ".", ".", "."],
		[".", "9", "8", ".", ".", ".", ".", "6", "."],
		["8", ".", ".", ".", "6", ".", ".", ".", "3"],
		["4", ".", ".", "8", ".", "3", ".", ".", "1"],
		["7", ".", ".", ".", "2", ".", ".", ".", "6"],
		[".", "6", ".", ".", ".", ".", "2", "8", "."],
		[".", ".", ".", "4", "1", "9", ".", ".", "5"],
		[".", ".", ".", ".", "8", ".", ".", "7", "9"],
	])
);
