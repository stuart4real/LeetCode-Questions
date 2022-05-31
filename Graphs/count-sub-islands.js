// You are given two m x n binary matrices grid1 and grid2 containing only 0's (representing water) and 1's (representing land). An island is a group of 1's connected 4-directionally (horizontal or vertical). Any cells outside of the grid are considered water cells.

// An island in grid2 is considered a sub-island if there is an island in grid1 that contains all the cells that make up this island in grid2.

// Return the number of islands in grid2 that are considered sub-islands.

/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
	let m = grid1.length,
		n = grid1[0].length,
		result = 0;

	// dfs
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid2[i][j] === 1) result += dfs(grid1, grid2, i, j);
		}
	}

	return result;
};

var dfs = function (grid1, grid2, row, col) {
	let m = grid1.length,
		n = grid1[0].length,
		result = 1;

	// boundary check
	// return 1 so that it won't affect the result
	if (row < 0 || row >= m || col < 0 || col >= n) return 1;

	// land check
	if (grid2[row][col] === 0) return 1;

	// flood the current cell
	grid2[row][col] = 0;

	// check its neighbours
	result &= dfs(grid1, grid2, row - 1, col);
	result &= dfs(grid1, grid2, row + 1, col);
	result &= dfs(grid1, grid2, row, col - 1);
	result &= dfs(grid1, grid2, row, col + 1);

	// check if grid1 has a land at the same position
	return result & grid1[row][col];
};

console.log(
	countSubIslands(
		(grid1 = [
			[1, 1, 1, 0, 0],
			[0, 1, 1, 1, 1],
			[0, 0, 0, 0, 0],
			[1, 0, 0, 0, 0],
			[1, 1, 0, 1, 1],
		]),
		(grid2 = [
			[1, 1, 1, 0, 0],
			[0, 0, 1, 1, 1],
			[0, 1, 0, 0, 0],
			[1, 0, 1, 1, 0],
			[0, 1, 0, 1, 0],
		])
	)
);

console.log(
	countSubIslands(
		(grid1 = [
			[1, 0, 1, 0, 1],
			[1, 1, 1, 1, 1],
			[0, 0, 0, 0, 0],
			[1, 1, 1, 1, 1],
			[1, 0, 1, 0, 1],
		]),
		(grid2 = [
			[0, 0, 0, 0, 0],
			[1, 1, 1, 1, 1],
			[0, 1, 0, 1, 0],
			[0, 1, 0, 1, 0],
			[1, 0, 0, 0, 1],
		])
	)
);
