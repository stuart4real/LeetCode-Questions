// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
	let result = Array(nums.length),
		i = 0,
		j = nums.length - 1,
		k = nums.length - 1;

	// add squared elements from the end
	for (k; k >= 0; k--) {
		// nums is already sorted, which means the new highest element only come from the start or the end
		if (Math.abs(nums[i]) > Math.abs(nums[j])) {
			result[k] = nums[i] ** 2;
			i++;
		} else {
			result[k] = nums[j] ** 2;
			j--;
		}
	}

	return result;
};
