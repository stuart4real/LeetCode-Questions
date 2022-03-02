// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.

//(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
	let s_index = 0,
		t_index = 0;

	// move the s_index iff there's a match
	while (s_index < s.length && t_index < t.length) {
		if (s[s_index] === t[t_index]) {
			s_index++;
			t_index++;
		} else {
			t_index++;
		}
	}

	// s_index === s.length iff all letters in s has been found in t
	return s_index === s.length ? true : false;
};

console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
