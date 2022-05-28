// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	let reach = 0;

	for (let i = 0; i <= reach; i++) {
		// update the max index that can be reached
		reach = Math.max(reach, i + nums[i]);

		// return true iff the reach is beyond the array
		if (reach >= nums.length - 1) return true;
	}

	return false;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false

// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// You can assume that you can always reach the last index.

var jump = function (nums) {
	// end: the range of current jump
	// furthest: the furthest point that all points before end can reach
	let jumps = 0,
		end = 0,
		furthest = 0;

	// bfs
	// note that we skip the last index since it's no use to the question
	for (let i = 0; i < nums.length - 1; i++) {
		furthest = Math.max(furthest, i + nums[i]);

		// if reach the end, make another jump
		if (i === end) {
			jumps++;
			end = furthest;
		}

		if (end >= nums.length - 1) break;
	}

	return jumps;
};

console.log(jump([2, 3, 1, 1, 4])); // 2
console.log(jump([2, 3, 0, 1, 4])); // 2
