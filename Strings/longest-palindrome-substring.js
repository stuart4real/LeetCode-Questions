// Given a string s, return the longest palindromic substring in s.
// Dynamic Programming

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	var n = s.length;
	var lps = "";

	// construct a 2d array
	const dp = [...new Array(n + 1)].map((_) => new Array(n + 1).fill(false));

	// base case for one character
	for (let i = 0; i < n; i++) {
		dp[i][i] = true;
		lps = s[i];
	}

	// base case for two characters
	for (let i = 0; i < n; i++) {
		if (s[i] === s[i + 1]) dp[i][i + 1] = true;
		if (dp[i][i + 1]) lps = s.substring(i, i + 2);
	}

	// expand to three or more characters
	for (let i = n - 1; i >= 0; i--) {
		for (let j = i + 2; j < n; j++) {
			dp[i][j] = dp[i + 1][j - 1] && s[i] == s[j];
			if (dp[i][j]) lps = lps.length < j - i + 1 ? s.substring(i, j + 1) : lps;
		}
	}

	return lps;
};

var longestPalindromeV2 = function (s) {
	// indices for the longest palindrome substring
	var start = 0,
		end = 0;

	for (let i = 0; i < s.length; i++) {
		var c = s[i];
		var left = i;
		var right = i;

		// move left pointer as far as possible
		while (left >= 0 && s[left] == c) {
			left--;
		}

		// move right pointer as far as possible
		while (right < s.length && s[right] == c) {
			right++;
		}

		// expand as far as possible
		while (left >= 0 && right < s.length) {
			if (s[left] != s[right]) break;
			left--;
			right++;
		}

		// actual indices are left + 1 && right - 1
		left++;
		if (end - start < right - left) {
			start = left;
			end = right;
		}
	}

	return s.substring(start, end);
};
