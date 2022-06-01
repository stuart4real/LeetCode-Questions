// Given an n x n grid containing only values 0 and 1, where 0 represents water and 1 represents land, find a water cell such that its distance to the nearest land cell is maximized, and return the distance. If no land or water exists in the grid, return -1.

// The distance used in this problem is the Manhattan distance: the distance between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
	let m = grid.length,
		n = grid[0].length,
		queue = new Queue(),
		steps = 0;
	// visited = Array.from(Array(m), () => new Array(n).fill(false));

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === 1) {
				// add its neighbours to the queue
				queue.enqueue([i + 1, j]);
				queue.enqueue([i - 1, j]);
				queue.enqueue([i, j + 1]);
				queue.enqueue([i, j - 1]);
			}
		}
	}

	// bfs
	while (!queue.isEmpty()) {
		let size = queue.getLength();
		steps++;

		for (let k = 0; k < size; k++) {
			let [x, y] = queue.dequeue();

			if (x >= 0 && y >= 0 && x < m && y < n && grid[x][y] === 0) {
				// update the cell's value to the distance between itself and the land
				grid[x][y] = steps;

				// add its neighbours
				queue.enqueue([x + 1, y]);
				queue.enqueue([x - 1, y]);
				queue.enqueue([x, y + 1]);
				queue.enqueue([x, y - 1]);
			}
		}
	}

	return steps === 1 ? -1 : steps - 1;
};

function Queue() {
	let head = (tail = null),
		length = 0;
	return {
		enqueue(val) {
			if (!head) head = tail = { val };
			else {
				tail.next = { val };
				tail = tail.next;
			}
			length++;
		},
		dequeue() {
			const val = head.val;
			head = head.next || null;
			length--;
			return val;
		},
		isEmpty() {
			return !head;
		},
		getLength() {
			return length;
		},
	};
}

console.log(
	maxDistance([
		[1, 0, 1],
		[0, 0, 0],
		[1, 0, 1],
	])
);
