// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
	let result = Array.from(Array(r), () => new Array(c));

	let m = mat.length,
		n = mat[0].length,
		row = 0,
		col = 0,
		pos = 0,
		x,
		y;

	// return the original matrix if the dimension doesn't match
	if (m * n !== r * c) return mat;

	for (row = 0; row < r; row++) {
		for (col = 0; col < c; col++) {
			pos = row * c + col;

			// calculate the original coordinates
			x = Math.floor(pos / n);
			y = pos % n;

			// assign values
			result[row][col] = mat[x][y];
		}
	}

	return result;
};

console.log(
	matrixReshape(
		[
			[1, 2],
			[3, 4],
		],
		4,
		1
	)
);
