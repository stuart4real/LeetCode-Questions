// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor.

// Return the modified image after performing the flood fill.

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
	if (image[sr][sc] === newColor) return image;

	let directions = [
			[1, 0],
			[-1, 0],
			[0, 1],
			[0, -1],
		],
		m = image.length,
		n = image[0].length,
		queue = [[sr, sc]],
		oldColor = image[sr][sc],
		len;

	image[sr][sc] = newColor;

	// bfs
	while (queue.length > 0) {
		// get the length first
		len = queue.length;

		let [x, y] = queue.shift();

		for (let dir of directions) {
			let temp = [x + dir[0], y + dir[1]];

			// boundary check
			if (temp[0] < 0 || temp[0] >= m || temp[1] < 0 || temp[1] >= n) continue;

			// color check
			if (image[temp[0]][temp[1]] !== oldColor) continue;

			// populate the color
			image[temp[0]][temp[1]] = newColor;

			// add it to the queue
			queue.push(temp);
		}
	}

	return image;
};

console.log(
	floodFill(
		[
			[1, 1, 1],
			[1, 1, 0],
			[1, 0, 1],
		],
		1,
		1,
		2
	)
);
