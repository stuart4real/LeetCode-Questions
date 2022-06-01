// You are given an n x n binary matrix grid where 1 represents land and 0 represents water.

// An island is a 4-directionally connected group of 1's not connected to any other 1's. There are exactly two islands in grid.

// You may change 0's to 1's to connect the two islands to form one island.

// Return the smallest number of 0's you must flip to connect the two islands.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
	// first paint one of the island
	const directions = [0, 1, 0, -1, 0];

	let m = grid.length,
		n = grid[0].length,
		queue = [];

	for (let row = 0; queue.length === 0 && row < m; row++) {
		for (let col = 0; queue.length === 0 && col < n; col++) {
			paint(grid, row, col, queue);
		}
	}

	// bfs to expand the painted island
	while (queue.length != 0) {
		let size = queue.length;

		for (let i = 0; i < size; i++) {
			let [x, y] = queue.shift();

			for (let j = 0; j < 4; j++) {
				// calculate the new coordinate
				let [newX, newY] = [x + directions[j], y + directions[j + 1]];

				if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
					// return the distance once we reached the other island
					if (grid[newX][newY] === 1) return grid[x][y] - 2;

					if (grid[newX][newY] === 0) {
						// update the distance
						grid[newX][newY] = grid[x][y] + 1;
						queue.push([newX, newY]);
					}
				}
			}
		}
	}

	return 0;
};

var paint = function (grid, row, col, queue) {
	const directions = [0, 1, 0, -1, 0];

	let m = grid.length,
		n = grid[0].length;

	if (row >= 0 && row < m && col >= 0 && col < n && grid[row][col] === 1) {
		// paint the cell
		grid[row][col] = 2;

		queue.push([row, col]);

		for (let i = 0; i < 4; i++) {
			let [dx, dy] = [directions[i], directions[i + 1]];
			paint(grid, row + dx, col + dy, queue);
		}
	}
};

console.log(
	shortestBridge([
		[0, 1],
		[1, 0],
	])
);
