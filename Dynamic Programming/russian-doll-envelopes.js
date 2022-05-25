// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
	// tails is an array storing the smallest tail of all increasing subsequences with length i+1 in tails[i]
	let tails = Array(nums.length).fill(0),
		size = 0;

	for (let num of nums) {
		let low = 0,
			high = size,
			mid;

		while (low != high) {
			mid = low + Math.floor((high - low) / 2);

			if (tails[mid] < num) low = mid + 1;
			else high = mid;
		}
		// if num is within the range [tails[i-1], tails[i]], update tails[i]
		tails[low] = num;
		// if num is larger than all tails, append it to tails and increase the size by 1
		if (low === size) size++;
	}

	return size;
};

// You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope.

// One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height.

// Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other).

// Note: You cannot rotate an envelope.

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
	// sort the envelops by width
	// if the width is the same, put the one with bigger height before
	let n = envelopes.length;

	envelopes.sort(function (a, b) {
		if (a[0] != b[0]) return a[0] - b[0];
		else return -(a[1] - b[1]);
	});

	// find the longest increasing subsequence on height
	let tails = Array(envelopes.length).fill(0),
		size = 0;

	for (let [width, height] of envelopes) {
		let low = 0,
			high = size,
			mid;

		while (low != high) {
			mid = low + Math.floor((high - low) / 2);

			if (tails[mid] < height) low = mid + 1;
			else high = mid;
		}

		tails[low] = height;

		if (low === size) size++;
	}

	return size;
};

console.log(
	maxEnvelopes([
		[5, 4],
		[6, 4],
		[6, 7],
		[2, 3],
	])
);
console.log(
	maxEnvelopes([
		[1, 1],
		[1, 1],
		[1, 1],
	])
);
console.log(
	maxEnvelopes([
		[2, 100],
		[3, 200],
		[4, 300],
		[5, 500],
		[5, 400],
		[5, 250],
		[6, 370],
		[6, 360],
		[7, 380],
	])
);
