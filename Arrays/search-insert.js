// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	let low = 0,
		high = nums.length - 1,
		mid;

	while (low < high) {
		// calculate the right(upper) middle point
		mid = low + Math.floor((high - low) / 2);

		if (nums[mid] === target) return mid;

		// the insertion position should be at most mid
		if (nums[mid] > target) high = mid;

		// the insertion position should be at least mid + 1
		if (nums[mid] < target) low = mid + 1;
	}

	return nums[low] < target ? low + 1 : low;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));
