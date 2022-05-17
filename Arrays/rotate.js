// Given an array, rotate the array to the right by k steps, where k is non-negative.

// First method: move k times
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate1 = function (nums, k) {
	// This is equivalent to finding the last k elements of an array
	if (k === 0) return nums;

	let n = nums.length;
	k = k % nums.length;

	while (k > 0) {
		let temp = nums[n - 1];

		for (let i = n - 1; i > 0; i--) {
			nums[i] = nums[i - 1];
		}

		nums[0] = temp;

		k -= 1;
	}
};

// Math
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate2 = function (nums, k) {
	// keep k within the range of nums' length
	k = k % nums.length;

	let copy = Array.from(nums);

	// calculate the new index of each element
	for (let i = 0; i < nums.length; i++) {
		nums[(i + k) % nums.length] = copy[i];
	}
};

// Reverse 3 times
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate3 = function (nums, k) {
	k = k % nums.length;

	reverse(nums, 0, nums.length - 1);
	reverse(nums, 0, k - 1);
	reverse(nums, k, nums.length - 1);
};

/**
 * This function reverses nums from start to end
 *
 * @param {number[]} nums
 * @param {number} start
 * @param {number} end
 * @return {void}
 */
var reverse = function (nums, start, end) {
	while (start < end) {
		let temp = nums[start];
		nums[start] = nums[end];
		nums[end] = temp;
		start++;
		end--;
	}
};
