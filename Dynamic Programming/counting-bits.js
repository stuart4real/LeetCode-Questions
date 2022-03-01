// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
	let result = [0];
	let offset = 1;

	// pattern: result[i] = result[i - index] + 1
	for (let i = 1; i < n + 1; i++) {
		if (i === offset * 2) {
			offset *= 2;
		}
		result[i] = result[i - offset] + 1;
	}

	return result;
};

console.log(countBits(2)); // [0, 1, 1]
console.log(countBits(5)); // [0, 1, 1, 2, 1, 2]
