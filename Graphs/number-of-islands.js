// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	let m = grid.length,
		n = grid[0].length,
		count = 0;

	// iterate through all cells by dfs
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === "1") {
				flood(grid, i, j);
				++count;
			}
		}
	}

	return count;
};

var flood = function (grid, i, j) {
	let m = grid.length,
		n = grid[0].length;
	// boundary check
	if (i < 0 || i >= m || j < 0 || j >= n) return;

	// island check
	if (grid[i][j] !== "1") return;

	// flodd the cell
	grid[i][j] = "0";

	// check its neighbours
	flood(grid, i - 1, j);
	flood(grid, i + 1, j);
	flood(grid, i, j - 1);
	flood(grid, i, j + 1);
};

console.log(
	numIslands([
		["1", "1", "1", "1", "0"],
		["1", "1", "0", "1", "0"],
		["1", "1", "0", "0", "0"],
		["0", "0", "0", "0", "0"],
	])
);
