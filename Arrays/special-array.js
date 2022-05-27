// You are given an array nums of non-negative integers. nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.

// Notice that x does not have to be an element in nums.

// Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.

/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
	let n = nums.length,
		low = 0,
		high = n,
		mid;

	// sort descending order
	// so that if nums[i] == i, it means that there are i+1 elements that are >=
	nums.sort((a, b) => b - a);

	// binary search
	while (low < high) {
		mid = low + Math.floor((high - low) / 2);

		if (mid < nums[mid]) low = mid + 1;
		else high = mid;
	}

	return low < n && low === nums[low] ? -1 : low;
};

console.log(specialArray([0, 4, 3, 0, 4]));
