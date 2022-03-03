// An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

// For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.
// Given an integer array nums, return the number of arithmetic subarrays of nums.

// A subarray is a contiguous subsequence of the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
	// Bottom up DP
	let n = nums.length;
	let dp = [];

	for (let i = 0; i < n; i++) {
		dp.push(0);
	}

	let result = 0;

	for (let j = 2; j < n; j++) {
		// check if we can form a new Arithmetic Subarray that ends at j
		if (nums[j - 1] - nums[j - 2] === nums[j] - nums[j - 1]) {
			dp[j] = dp[j - 1] + 1;
		}

		result += dp[j];
	}

	return result;
};

console.log(numberOfArithmeticSlices([1, 2, 3, 4])); // 3
console.log(numberOfArithmeticSlices([1])); // 0

/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlicesV2 = function (nums) {
	// Bottom up DP with space optimization
	let n = nums.length;

	// let dp be the number of Arithmetic Subarray that ends at current index
	let dp = 0;
	let result = 0;

	for (let i = 2; i < n; i++) {
		if (nums[i - 1] - nums[i - 2] === nums[i] - nums[i - 1]) {
			dp++;
			result += dp;
		} else {
			// set dp to 0 since it fails to find a Arithmetic Subarray
			dp = 0;
		}
	}

	return result;
};
