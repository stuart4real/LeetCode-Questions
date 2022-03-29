// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
	var left = 0;
	var right = 1;

	if (nums.length === 1) return nums[0];

	while (left < nums.length - 1) {
		// reset the right pointer
		right = left + 1;

		while (right < nums.length) {
			if (nums[left] === nums[right]) {
				return nums[left];
			}

			right += 1;
		}

		left += 1;
	}
};

console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // 3

// Floyd's Tortoise and Hare Algorithm
var findDuplicateV2 = function (nums) {
	if (nums.length > 1) {
		var slow = nums[0];
		var fast = nums[nums[0]];

		while (slow != fast) {
			slow = nums[slow];
			fast = nums[nums[fast]];
		}

		fast = 0;

		while (fast != slow) {
			fast = nums[fast];
			slow = nums[slow];
		}

		return slow;
	} else {
		return nums[0];
	}
};

console.log(findDuplicateV2([1, 3, 4, 2, 2])); // 2
console.log(findDuplicateV2([3, 1, 3, 4, 2])); // 3
