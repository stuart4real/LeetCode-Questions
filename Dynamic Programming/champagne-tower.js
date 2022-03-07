// We stack glasses in a pyramid, where the first row has 1 glass, the second row has 2 glasses, and so on until the 100th row.
// Each glass holds one cup of champagne.

// Then, some champagne is poured into the first glass at the top.
// When the topmost glass is full, any excess liquid poured will fall equally to the glass immediately to the left and right of it.
// When those glasses become full, any excess champagne will fall equally to the left and right of those glasses, and so on.
// (A glass at the bottom row has its excess champagne fall on the floor.)

// For example, after one cup of champagne is poured, the top most glass is full.
// After two cups of champagne are poured, the two glasses on the second row are half full.
// After three cups of champagne are poured, those two cups become full - there are 3 full glasses total now.
// After four cups of champagne are poured, the third row has the middle glass half full, and the two outside glasses are a quarter full.

/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function (poured, query_row, query_glass) {
	// let dp[i][j] be the amount of champagne in ith row jth glass
	let dp = Array.from(Array(101), () => new Array(101).fill(0.0));

	dp[0][0] = poured;
	console.log(dp);

	// construct the dp based on poured
	for (let i = 0; i < 100; i++) {
		for (let j = 0; j <= i; j++) {
			if (dp[i][j] >= 1) {
				dp[i + 1][j] += (dp[i][j] - 1) / 2.0;
				dp[i + 1][j + 1] += (dp[i][j] - 1) / 2.0;
				dp[i][j] = 1;
			}
		}
	}

	// return the result
	return dp[query_row][query_glass];
};

console.log(champagneTower(1, 1, 1)); // 0.00000
console.log(champagneTower(2, 1, 1)); // 0.50000
console.log(champagneTower(100000009, 33, 17)); // 1
