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

/* Search in Rotated Sorted Array */

// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search1 = function (nums, target) {
	let n = nums.length,
		low = 0,
		high = n - 1,
		mid;

	// binary search to find the index of the smallest value
	while (low < high) {
		mid = low + Math.floor((high - low) / 2);

		if (nums[mid] > nums[high]) low = mid + 1;
		else high = mid;
	}

	let rotation = low,
		midWithRotation;

	// reset low and high
	(low = 0), (high = n - 1);

	// binary search again but with rotation in consideration
	while (low <= high) {
		mid = low + Math.floor((high - low) / 2);

		midWithRotation = (mid + rotation) % n;

		if (nums[midWithRotation] === target) return midWithRotation;

		if (nums[midWithRotation] < target) low = mid + 1;
		else high = mid - 1;
	}

	// return -1 if target doesn't exist in nums
	return -1;
};

// There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).

// Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].

// Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

// You must decrease the overall operation steps as much as possible.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search2 = function (nums, target) {
	let n = nums.length,
		low = 0,
		high = n - 1,
		mid;

	while (low <= high) {
		// avoid duplicates
		while (low < high && nums[low] === nums[low + 1]) low++;
		while (low < high && nums[high] === nums[high - 1]) high--;

		mid = low + Math.floor((high - low) / 2);

		if (nums[mid] === target) return true;

		if (nums[mid] >= nums[low]) {
			if (target >= nums[low] && target < nums[mid]) {
				high = mid - 1;
			} else {
				low = mid + 1;
			}
		} else {
			if (target <= nums[high] && target > nums[mid]) {
				low = mid + 1;
			} else {
				high = mid - 1;
			}
		}
	}

	return false;
};

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	if (nums.length === 1) return nums[0];

	let n = nums.length,
		low = 0,
		high = n - 1,
		mid;

	// check if its sorted
	if (nums[n - 1] > nums[0]) return nums[0];

	// binary search
	while (low <= high) {
		mid = low + Math.floor((high - low) / 2);

		// if the mid element is greater than its next element then mid+1 element is the smallest
		// This point would be the point of change. From higher to lower value.
		if (nums[mid] > nums[mid + 1]) return nums[mid + 1];

		// if the mid element is lesser than its previous element then mid element is the smallest
		if (nums[mid] < nums[mid - 1]) return nums[mid];

		// if the mid element value is greater than the 0th element
		// it means the least value is still somewhere to the right of the mid
		if (nums[mid] > nums[0]) low = mid + 1;
		// if the mid element value is lesser than the 0th element
		// it means the least value is still somewhere to the left of the mid
		else high = mid - 1;
	}

	return -1;
};
