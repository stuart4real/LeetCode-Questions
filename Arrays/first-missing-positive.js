// Given an unsorted integer array nums, return the smallest missing positive integer.

// You must implement an algorithm that runs in O(n) time and uses constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
	let i = 0;
	let n = nums.length;

	// put every element in its correct place (i.e. nums[x - 1] = x)
	for (i; i < n; i++) {
		while (nums[i] > 0 && nums[i] < n + 1 && nums[nums[i] - 1] != nums[i]) {
			// swap nums[i] to its correct place
			let temp = nums[nums[i] - 1];
			nums[nums[i] - 1] = nums[i];
			nums[i] = temp;
		}
	}

	// iterate the swapped array and try to find the first number that's not in the correct place
	for (i = 0; i < n; i++) {
		if (nums[i] != i + 1) return i + 1;
	}

	return n + 1;
};
