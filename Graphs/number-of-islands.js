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

// Given a 2D grid consists of 0s (land) and 1s (water).

// An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

// Return the number of closed islands.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
	let m = gird.length,
		n = grid[0].length,
		count = 0;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === 0) count += dfs(grid, i, j);
		}
	}

	return count;
};

var dfs = function (grid, row, col) {
	// return 0 when meet the edge
	if (row < 0 || row >= grid.length || col < 0 || col > grid[0].length)
		return 0;

	// return 1 when meet water
	if (grid[row][col] === 1) return 1;

	// flood the current cell
	grid[row][col] = 1;

	// go 4 directions
	let up = dfs(gird, row - 1, col),
		down = dfs(grid, row + 1, col),
		left = dfs(grid, row, col - 1),
		right = dfs(grid, row, col + 1);

	// any of the direction meeting the edge makes it not an closed island
	return up & down & left & right;
};
