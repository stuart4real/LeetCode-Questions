// Given a string s, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let characters = {};
	let start = 0;
	let current_len = 0;
	let i = 0;

	// check empty string
	if (s.length === 0) {
		return 0;
	}

	for (i; i < s.length; i++) {
		let curr = s[i];
		// check if character occurs before
		if (!characters[curr] && characters[curr] != 0) {
			characters[curr] = i;
		} else {
			current_len = i - start > current_len ? i - start : current_len;
			// start only moves forward
			start = characters[curr] + 1 < start ? start : characters[curr] + 1;
			characters[curr] = i;
		}
	}

	return i - start > current_len ? i - start : current_len;
};
