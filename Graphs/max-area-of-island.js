// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
	let m = grid.length,
		n = grid[0].length,
		currArea = 0,
		maxArea = 0;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === 1) {
				currArea = dfs(grid, i, j);
				maxArea = Math.max(currArea, maxArea);
			}
		}
	}

	return maxArea;
};

var dfs = function (grid, row, col) {
	let m = grid.length,
		n = grid[0].length,
		area = 0,
		directions = [
			[-1, 0],
			[1, 0],
			[0, -1],
			[0, 1],
		];

	// boundary check
	if (row < 0 || row >= m || col < 0 || col >= n) return 0;

	// land check
	if (grid[row][col] != 1) return 0;

	// mark the cell
	grid[row][col] = 0;
	area++;

	// visit its 4-direction neighbours
	for (let dir of directions) {
		area += dfs(grid, row + dir[0], col + dir[1]);
	}

	return area;
};

console.log(
	maxAreaOfIsland([
		[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
		[0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
		[0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
	])
);
