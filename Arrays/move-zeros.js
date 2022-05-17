// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	let n = nums.length,
		i = 0,
		j = 0;

	while (i < n) {
		if (nums[i] === 0) {
			j = i + 1;

			// find the next non-zero element
			while (nums[j] === 0 && j < n) j += 1;

			// boundary check
			if (j >= n) break;

			// swap
			[nums[i], nums[j]] = [nums[j], nums[i]];
		}

		i += 1;
	}
};

// Snowball solution
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroesSnowBalls = function (nums) {
	let size = 0,
		n = nums.length;

	for (let i = 0; i < n; i++) {
		// increase the snow ball size when encounters zeros
		if (nums[i] === 0) size += 1;
		else if (size > 0) {
			// swap
			[nums[i], nums[i - size]] = [0, nums[i]];
		}
	}
};

// Pointer
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes3 = function (nums) {
	// pointer: the index to next available position for non-zero elements
	let pointer = 0;

	// iterate each element in nums
	for (let i in nums) {
		if (nums[i] !== 0) {
			// swap
			[nums[pointer], nums[i]] = [nums[i], nums[pointer]];

			// update the index
			pointer++;
		}
	}
};
