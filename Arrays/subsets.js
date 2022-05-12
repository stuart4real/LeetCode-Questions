// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
	// sort the array
	nums.sort((a, b) => {
		return a - b;
	});

	let result = [],
		temp = [];

	// back track
	backtrack(result, temp, nums, 0);

	return result;
};

var backtrack = function (result, temp, nums, start) {
	result.push(Array.from(temp));

	for (let i = start; i < nums.length; i++) {
		// take the current element
		temp.push(nums[i]);

		// back track
		backtrack(result, temp, nums, i + 1);

		// skip the current element
		temp.pop();
	}
};

console.log(subsets([1, 2, 3]));

// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
	// sort the array
	nums.sort((a, b) => {
		return a - b;
	});

	let result = [],
		temp = [];

	// back track
	backtrackWithDup(result, temp, nums, 0);

	return result;
};

var backtrackWithDup = function (result, temp, nums, start) {
	result.push(Array.from(temp));

	for (let i = start; i < nums.length; i++) {
		// skip duplicates
		if (i > start && nums[i] === nums[i - 1]) continue;

		// take the current element
		temp.push(nums[i]);

		// back track
		backtrackWithDup(result, temp, nums, i + 1);

		// skip the current element
		temp.pop();
	}
};

console.log(subsetsWithDup([1, 2, 2]));
