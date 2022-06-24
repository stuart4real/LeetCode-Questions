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

// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are considered permutations of arr: [1,2,3], [1,3,2], [3,1,2], [2,3,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer.
// More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container.
// If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

// The replacement must be in place and use only constant extra memory.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
	let n = nums.length,
		i = nums.length - 1;

	if (n < 2) return;

	// traverse backward to find the first element s.t. nums[i-1] < nums[i]
	// i.e. nums[i, n-1] is reversely sorted
	while (i > 0) {
		if (nums[i - 1] < nums[i]) break;

		i -= 1;
	}

	// reverse the whole array if no such element exists
	if (i === 0) {
		reverseSort(nums, 0, n - 1);
		return;
	}

	let val = nums[i - 1],
		j = n - 1;

	// search backwards for the smallest number between nums[i, n - 1]
	while (j >= i) {
		if (nums[j] > val) break;

		j -= 1;
	}

	// swap it with the smallest number between nums[i, n-1]
	swap(nums, j, i - 1);

	// make the remaining higher position part as small as possible by reversely sorting nums[i, n-1]
	reverseSort(nums, i, n - 1);
	return;
};

var swap = function (nums, i, j) {
	let temp = nums[i];
	nums[i] = nums[j];
	nums[j] = temp;
};

var reverseSort = function (nums, start, end) {
	if (start > end) return;

	for (let i = start; i < (start + end) / 2; i++) {
		swap(nums, i, start + end - i);
	}
};

// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. Return the output in any order.

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
	let result = [],
		temp = [];

	backTrack(result, temp, s.split(""), 0);

	return result;
};

var backTrack = function (result, temp, characters, start) {
	if (temp.length === characters.length) result.push(temp.join(""));
	else {
		let curr = characters[start];

		// toggle lower/upper case
		curr =
			curr === curr.toLowerCase() ? curr.toUpperCase() : curr.toLowerCase();

		temp.push(curr);
		backTrack(result, temp, characters, start + 1);
		temp.pop();

		// back track for non-digit characters
		if (curr.toLowerCase() !== curr.toUpperCase()) {
			temp.push(characters[start]);
			backTrack(result, temp, characters, start + 1);
			temp.pop();
		}
	}
};
console.log(letterCasePermutation("a1b2"));
console.log(letterCasePermutation("C"));
