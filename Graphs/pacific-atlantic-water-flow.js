// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
	let m = heights.length,
		n = heights[0].length,
		result = [],
		pacific = Array.from(Array(m), () => Array(n).fill(false)),
		atlantic = Array.from(Array(m), () => Array(n).fill(false));

	// start from the ocean boarder
	for (let i = 0; i < m; i++) {
		dfs(heights, pacific, -1, i, 0);
		dfs(heights, atlantic, -1, i, n - 1);
	}

	for (let j = 0; j < n; j++) {
		dfs(heights, pacific, -1, 0, j);
		dfs(heights, atlantic, -1, m - 1, j);
	}

	// add to the result
	for (i = 0; i < m; i++) {
		for (j = 0; j < n; j++) {
			if (pacific[i][j] && atlantic[i][j]) result.push([i, j]);
		}
	}

	return result;
};

var dfs = function (heights, visited, height, row, col) {
	const neighbour = [1, 0, -1, 0, 1];

	let m = heights.length,
		n = heights[0].length;

	// boundary check
	if (row < 0 || row === m || col < 0 || col === n) return;

	// height check
	if (heights[row][col] < height) return;

	// skip visited cells
	if (visited[row][col]) return;

	visited[row][col] = true;

	// neighbour check
	for (let i = 0; i < 4; i++) {
		let [dx, dy] = [neighbour[i], neighbour[i + 1]];
		dfs(heights, visited, heights[row][col], row + dx, col + dy);
	}
};

console.log(
	pacificAtlantic([
		[1, 2, 2, 3, 5],
		[3, 2, 3, 4, 4],
		[2, 4, 5, 3, 1],
		[6, 7, 1, 4, 5],
		[5, 1, 1, 2, 4],
	])
);

console.log(
	pacificAtlantic([
		[2, 1],
		[1, 2],
	])
);

console.log(
	pacificAtlantic([
		[3, 3, 3],
		[3, 1, 3],
		[0, 2, 4],
	])
);
