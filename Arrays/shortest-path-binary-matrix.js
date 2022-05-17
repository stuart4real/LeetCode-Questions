// Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

// A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

// All the visited cells of the path are 0.
// All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
// The length of a clear path is the number of visited cells of this path.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
	let path = [[0, 0]],
		seen = new Set([0]),
		n = grid.length,
		i,
		j,
		x,
		y,
		count = 0;

	const directions = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
		[1, 1],
		[-1, 1],
		[1, -1],
		[-1, -1],
	];

	// check the starting and ending position
	if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;

	// bfs
	while (path.length > 0) {
		count += 1;
		let size = path.length;

		// level traversal
		for (let k = 0; k < size; k++) {
			[x, y] = path.shift();

			// desitination check
			if (x === n - 1 && y === n - 1) return count;

			// try all possible directions
			for ([i, j] of directions) {
				// calculate the new coordinates
				let [new_x, new_y] = [x + i, y + j];

				// boundary check
				if (new_x < 0 || new_x >= n || new_y < 0 || new_y >= n) continue;

				// ignore visited
				if (seen.has(new_x * n + new_y)) continue;

				if (grid[new_x][new_y] === 0) {
					path.push([new_x, new_y]);
					seen.add(new_x * n + new_y);
				}
			}
		}
	}

	return -1;
};

console.log(
	shortestPathBinaryMatrix([
		[0, 1],
		[1, 0],
	])
);

console.log(
	shortestPathBinaryMatrix([
		[0, 0, 0],
		[1, 1, 0],
		[1, 1, 0],
	])
);

console.log(
	shortestPathBinaryMatrix([
		[0, 0, 0],
		[0, 1, 0],
		[0, 0, 0],
	])
);
