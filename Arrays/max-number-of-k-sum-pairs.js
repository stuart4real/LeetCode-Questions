// You are given an integer array nums and an integer k.

// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

// Return the maximum number of operations you can perform on the array.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
	var result = 0;

	// initialize a frequency map
	var map = new Map();

	for (var i = 0; i < nums.length; i++) {
		var current = nums[i];

		// update the frequency map when found a pair
		if (map.has(k - current) && map.get(k - current) > 0) {
			result += 1;
			map.set(k - current, map.get(k - current) - 1);
		} else {
			if (map.has(current)) {
				map.set(current, map.get(current) + 1);
			} else {
				map.set(current, 1);
			}
		}
	}

	return result;
};

// Examples:
console.log(maxOperations([1, 2, 3, 4], 5) === 2);
console.log(maxOperations([3, 1, 3, 4, 3], 6) === 1);
console.log(
	maxOperations([4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], 2) === 2
);
