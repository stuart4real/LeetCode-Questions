// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let n = nums.length,
		dp = [];

	// dp[i] means the largest sum of the subarray ending with nums[i]
	dp[0] = nums[0];

	let max = dp[0];

	for (let i = 1; i < n; i++) {
		// if the previous subarray has a negative sum, then it should not be kept
		dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);

		// update the max value
		max = Math.max(max, dp[i]);
	}

	return max;
};
