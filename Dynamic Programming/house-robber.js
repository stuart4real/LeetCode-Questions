// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	if (nums.length < 3) return Math.max(nums[0], nums[1]);

	let dp = Array(nums.length + 1);

	// initial the first two values
	dp[0] = nums[0];
	dp[1] = Math.max(nums[0], nums[1]);

	// build the dp table
	for (let i = 2; i < nums.length; i++) {
		dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
	}

	return dp[nums.length - 1];
};

console.log(rob([2, 1, 1, 2]));

/**
 * @param {number[]} nums
 * @return {number}
 */
var robWithConstantSpace = function (nums) {
	let maxAtOneBefore = 0,
		maxAtTwoBefore = 0;

	for (let i = 0; i < nums.length; i++) {
		// two options:
		// 1. rob the current house and collect the loot from two houses before
		// 2. do not rob the current house and collect the loot from one house before
		let maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);

		maxAtTwoBefore = maxAtOneBefore;
		maxAtOneBefore = maxAtCurrent;
	}

	return maxAtOneBefore;
};
console.log(robWithConstantSpace([2, 1, 1, 2]));

// Given that all houses are arranged in a circle.

var robWithCircle = function (nums) {
	// compare two options:
	// 1. rob the first house
	// 2. do not rob the first house
	return Math.max(
		robWithConstantSpace(nums.slice(1)),
		robWithConstantSpace(nums.slice(2).concat([nums[0]]))
	);
};

console.log(robWithCircle([2, 3, 2]));
