// You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:

// Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.
// Return the maximum number of points you can earn by applying the above operation some number of times.

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
	let n = 10001,
		values = Array(n).fill(0);

	for (let num of nums) values[num] += num;

	// takeCurrent: the best result for sub-problem of first i+1 elements while take the i-th element
	// skipCurrent: the best result for sub-problem of first i+1 elements while skip the i-th element
	let takePrevious = 0,
		skipPrevious = 0,
		takeCurrent,
		skipCurrent;

	for (let i = 0; i < n; i++) {
		// taking the current element implies skipping the previous element
		takeCurrent = skipPrevious + values[i];

		// skipping the current element implies either skipping or taking the previous element
		skipCurrent = Math.max(skipPrevious, takePrevious);

		// update
		takePrevious = takeCurrent;
		skipPrevious = skipCurrent;
	}

	return Math.max(takePrevious, skipPrevious);
};

console.log(deleteAndEarn([2, 2, 3, 3, 3, 4])); // 9
