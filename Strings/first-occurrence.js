// Implement strStr().

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	// i: the index of haystack
	// j: the index of needle
	let i = 0,
		j = 0;

	// special case
	if (needle.length === 0) return 0;

	while (i < haystack.length) {
		while (haystack.charAt(i) === needle.charAt(j) && j < needle.length) {
			i += 1;
			j += 1;
		}

		if (j < needle.length) {
			// reset the index of needle
			i -= j;
			j = 0;
		} else {
			// return the first occurrence of needle
			return i - j;
		}

		i += 1;
	}

	// return -1 if no occurrence of needle is founded
	return -1;
};

console.log(strStr("mississippi", "issip"));
