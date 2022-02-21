// Given an array intervals where intervals[i] = [li, ri] represent the interval [li, ri).

// Remove all intervals that are covered by another interval in the list.

// The interval [a, b) is covered by the interval [c, d) if and only if c <= a and b <= d.

// Return the number of remaining intervals.

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
	if (intervals.length <= 1) return intervals.length;

	// sort the array first
	intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

	let previous = 0,
		current = 0,
		result = 0;

	// slide window
	for (previous = 0, current = 1; current < intervals.length; current++) {
		const [prevStart, prevEnd] = intervals[previous];
		const [currStart, currEnd] = intervals[current];

		if (prevStart <= currStart && prevEnd >= currEnd) {
			result++;
		} else {
			previous = current;
		}
	}

	return intervals.length - result;
};

console.log(
	removeCoveredIntervals([
		[1, 4],
		[3, 6],
		[2, 8],
	])
); // 2
console.log(
	removeCoveredIntervals([
		[1, 4],
		[2, 3],
	])
); // 1
console.log(
	removeCoveredIntervals([
		[34335, 39239],
		[15875, 91969],
		[29673, 66453],
		[53548, 69161],
		[40618, 93111],
	])
); // 2
