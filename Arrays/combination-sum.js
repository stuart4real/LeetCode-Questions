// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
	// sort the candidates
	candidates.sort((a, b) => {
		return a - b;
	});

	let result = [],
		temp = [];

	// back track
	backtrack(result, temp, candidates, target, 0);

	return result;
};

var backtrack = function (result, temp, candidates, target, start) {
	if (target < 0) return;
	// copy the current temp list and put into the result
	else if (target == 0) result.push(Array.from(temp));
	else {
		// iterate through all elements and each element can be taken or skipped
		for (let i = start; i < candidates.length; i++) {
			// take the current element
			temp.push(candidates[i]);

			// call back track again on i since element can be reused
			// any valid solution will be added to result
			backtrack(result, temp, candidates, target - candidates[i], i);

			// skip the current element
			temp.pop();
		}
	}
};

console.log(combinationSum([2, 3, 6, 7], 7));

// Each number in candidates may only be used once in the combination
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
	// sort the candidates
	candidates.sort((a, b) => {
		return a - b;
	});

	let result = [],
		temp = [];

	// back track
	backtrack2(result, temp, candidates, target, 0);

	return result;
};

var backtrack2 = function (result, temp, candidates, target, start) {
	if (target < 0) return;
	// copy the current temp list and put into the result
	else if (target == 0) result.push(Array.from(temp));
	else {
		// iterate through all elements and each element can be taken or skipped
		for (let i = start; i < candidates.length; i++) {
			// skip duplicates
			if (i > start && candidates[i] === candidates[i - 1]) continue;
			// take the current element
			temp.push(candidates[i]);

			// call back track again on i since element can be reused
			// any valid solution will be added to result
			backtrack2(result, temp, candidates, target - candidates[i], i + 1);

			// skip the current element
			temp.pop();
		}
	}
};

// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

// Only numbers 1 through 9 are used.
// Each number is used at most once.

// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
	let candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	let result = [],
		temp = [];

	backtrack3(result, temp, candidates, k, n, 0);

	return result;
};

var backtrack3 = function (result, temp, candidates, k, n, start) {
	if (n < 0 || temp.length > k) return;

	if (n === 0 && temp.length === k) result.push(Array.from(temp));

	for (let i = start; i < candidates.length; i++) {
		// take the current element
		temp.push(candidates[i]);

		// back tracking
		backtrack3(result, temp, candidates, k, n - candidates[i], i + 1);

		// skip the current element
		temp.pop();
	}
};
