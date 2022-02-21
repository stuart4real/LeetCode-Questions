// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.

// You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	// Boyer-Moore Majority Vote Algorithm
	let major = nums[0],
		count = 1;

	for (let i = 1; i < nums.length; i++) {
		if (count == 0) {
			count++;
			major = nums[i];
		} else if (major === nums[i]) {
			count++;
		} else {
			count--;
		}
	}

	return major;
};

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
