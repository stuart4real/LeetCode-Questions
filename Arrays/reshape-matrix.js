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
