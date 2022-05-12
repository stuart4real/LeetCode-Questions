// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	let result = [],
		temp = [];

	// back track
	backtrack(result, temp, nums);

	return result;
};

var backtrack = function (result, temp, nums) {
	if (temp.length === nums.length) {
		result.push(Array.from(temp));
	} else {
		for (let i = 0; i < nums.length; i++) {
			// skip elements that already exist
			if (temp.indexOf(nums[i]) !== -1) continue;

			temp.push(nums[i]);

			backtrack(result, temp, nums);

			temp.pop();
		}
	}
};

console.log(permute([1, 2, 3]));

// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
	// sort the array
	nums.sort((a, b) => {
		return a - b;
	});

	let result = [],
		temp = [],
		used = Array(nums.length).fill(false);

	// back track
	backtrackUnique(result, temp, nums, used);

	return result;
};

var backtrackUnique = function (result, temp, nums, used) {
	if (temp.length === nums.length) {
		result.push(Array.from(temp));
	} else {
		for (let i = 0; i < nums.length; i++) {
			// skip the element if it's already used before
			if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]))
				continue;

			// set the current element used
			used[i] = true;

			temp.push(nums[i]);

			backtrackUnique(result, temp, nums, used);

			// set the current element un-used
			used[i] = false;
			temp.pop();
		}
	}
};

console.log(permuteUnique([1, 1, 2]));
