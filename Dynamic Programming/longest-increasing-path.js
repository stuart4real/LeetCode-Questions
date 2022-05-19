// Given an m x n integers matrix, return the length of the longest increasing path in matrix.

// From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
	let m = matrix.length,
		n = matrix[0].length,
		dp = Array.from(Array(m), () => new Array(n).fill(0)),
		longest = 1;

	// run dfs on every cell
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			let temp = dfs(matrix, i, j, m, n, dp);
			longest = Math.max(temp, longest);
		}
	}

	return longest;
};

var dfs = function (matrix, i, j, m, n, dp) {
	// return the distance if it's been visited before
	if (dp[i][j] !== 0) return dp[i][j];

	let longest = 1;

	for (let dir of [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0],
	]) {
		let x = i + dir[0],
			y = j + dir[1];

		// boundary check
		if (x < 0 || x >= m || y < 0 || y >= n) continue;

		// value check
		if (matrix[x][y] <= matrix[i][j]) continue;

		// call dfs again
		let temp = 1 + dfs(matrix, x, y, m, n, dp);

		// update the longest
		longest = Math.max(temp, longest);
	}

	// update the dp
	dp[i][j] = longest;
	return longest;
};

console.log(
	longestIncreasingPath([
		[9, 9, 4],
		[6, 6, 8],
		[2, 1, 1],
	])
);
