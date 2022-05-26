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

// Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.

// A circular array means the end of the array connects to the beginning of the array. Formally, the next element of nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n].

// A subarray may only include each element of the fixed buffer nums at most once. Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
	// the maximum subarray might be circular or not circular
	// not circular: use Kadane's Algorithm
	// circular: total sum - the minimum subarray
	let total = 0,
		maxSum = nums[0],
		curMax = 0,
		minSum = nums[0],
		curMin = 0;

	for (let num of nums) {
		// update maximum subarray
		curMax = Math.max(curMax + num, num);
		maxSum = Math.max(maxSum, curMax);

		// update minimum subarray
		curMin = Math.min(curMin + num, num);
		minSum = Math.min(minSum, curMin);

		// update the total sum
		total += num;
	}

	// the maximum subarray sum == max(maximum subarray, total - min)
	return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
};

console.log(maxSubarraySumCircular([1, -2, 3, -2])); // 3
console.log(maxSubarraySumCircular([5, -3, 5])); // 10
console.log(maxSubarraySumCircular([-3, -2, -3])); // -2

// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
	let n = nums.length,
		prefix = 0,
		suffix = 0,
		maxSoFar = nums[0];

	// the maximum subarray must start with the first element or end with the last element if there's no zeros
	// hence the maximum product must be some prefix product or suffix product
	for (let i = 0; i < n; i++) {
		// when encounter 0, start over and compute the product from the current element
		prefix = (prefix === 0 ? 1 : prefix) * nums[i];
		suffix = (suffix === 0 ? 1 : suffix) * nums[n - i - 1];
		maxSoFar = Math.max(maxSoFar, prefix, suffix);
	}

	return maxSoFar;
};

console.log(maxProduct([2, 3, -2, 4])); // 6
console.log(maxProduct([-2, 0, -1])); // 0
