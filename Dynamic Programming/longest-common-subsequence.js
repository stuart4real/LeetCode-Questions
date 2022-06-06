// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
	let m = text1.length,
		n = text2.length;

	// dp[i][j]: the length of the longest common subsequence of text1[0:i+1] and text2[0:j+1]
	let dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (text1[i] === text2[j]) {
				dp[i + 1][j + 1] = dp[i][j] + 1;
			} else {
				dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
			}
		}
	}

	return dp[m][n];
};

console.log(longestCommonSubsequence("abcde", "ace"));
