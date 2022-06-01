// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	// any number bitwise xor itself equals 0
	let bits = 0;

	for (let num of nums) {
		bits ^= num;
	}

	return bits;
};

// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber2 = function (nums) {
	let x1 = 0,
		x2 = 0,
		mask = 0;

	for (let num of nums) {
		x2 ^= x1 & num;
		x1 ^= num;
		mask = ~(x1 & x2);
		x2 &= mask;
		x1 &= mask;
	}
	// Since p = 1, in binary form p = '01', then p1 = 1, so we should return x1.
	// If p = 2, in binary form p = '10', then p2 = 1, and we should return x2.
	// Or alternatively we can simply return (x1 | x2).
	return x1;
};

// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber3 = function (nums) {
	// first get the xor sum of the two numbers we need to find
	let diff = nums.reduce((prev, curr) => prev ^ curr, 0);

	// get the last set bit (i.e. bit_i === 1)
	diff &= -diff;

	let result = [0, 0];

	// Partition the numbers into two groups: one group with bit_i == 1 and the other group with bit_i == 0.
	for (let num of nums) {
		// bit_i === 0
		if ((num & diff) === 0) result[0] ^= num;
		// bit_i === 1
		else result[1] ^= num;
	}

	return result;
};
