// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
	let count = 0;

	for (let i = 0; i < s.length; i++) {
		for (let j = i + 1; j <= s.length; j++) {
			if (isPalindromic(s.substring(i, j))) count++;
		}
	}

	return count;
};

var isPalindromic = function (s) {
	let start = 0,
		end = s.length - 1;

	while (start < end) {
		if (s.charAt(start++) != s.charAt(end--)) return false;
	}

	return true;
};

console.log(countSubstrings("abc"));
console.log(isPalindromic("abc", 0, 2));
