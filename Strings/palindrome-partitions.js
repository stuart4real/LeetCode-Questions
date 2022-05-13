// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// A palindrome string is a string that reads the same backward as forward.

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
	let result = [],
		temp = [];

	backtrackPartition(result, temp, s, 0);

	return result;
};

var backtrackPartition = function (result, temp, s, start) {
	if (start === s.length) {
		result.push(Array.from(temp));
	}

	for (let i = start; i < s.length; i++) {
		if (isPalindrome(s, start, i)) {
			// try to take in another character
			temp.push(s.substring(start, i + 1));

			// back track
			backtrackPartition(result, temp, s, i + 1);

			// remove the added substring
			temp.pop();
		}
	}
};

var isPalindrome = function (s, low, high) {
	// use two pointers to check both from the beginning and the end
	while (low < high) {
		if (s.charAt(low++) != s.charAt(high--)) return false;
	}

	return true;
};

// Given a string s, partition s such that every substring of the partition is a palindrome.

// Return the minimum cuts needed for a palindrome partitioning of s.

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
	// number of cuts for the first k characters
	let cuts = Array(s.length).fill(0);

	// it takes at most n-1 cut to partition a string of length n
	// i.e. cuts[i] is the number of cuts needed to partition s[0, i-1]
	for (let i = 0; i <= s.length; i++) cuts[i] = i - 1;

	// i: the index representing the center of the palindrome
	// j: the index representing the radius of the palindrome
	for (i = 0; i < s.length; i++) {
		// odd length palindrome
		// i.e. the palindrome === s[i-j, i+j]
		for (
			let j = 0;
			i - j >= 0 && i + j < s.length && s.charAt(i - j) === s.charAt(i + j);
			j++
		) {
			// one possible partition is cuts[i-j] + 1
			// cuts[i-j]: the number of cuts needed to partition s[i-j-1]
			// 1: the cut needed to partition s[i-j, i+j] from the rest of the string
			cuts[i + j + 1] = Math.min(cuts[i + j + 1], cuts[i - j] + 1);
		}

		// even length palindrome
		// i.e. the palindrome === s[i-j+1, i+j]
		for (
			j = 1;
			i - j + 1 >= 0 &&
			i + j < s.length &&
			s.charAt(i - j + 1) === s.charAt(i + j);
			j++
		) {
			// one possible partition is cuts[i-j+1] + 1
			// cuts[i-j+1]: the number of cuts needed to partition s[i-j]
			// 1: the cut needed to partition s[i-j+1, i+j] from the rest of the string
			cuts[i + j + 1] = Math.min(cuts[i + j + 1], cuts[i - j + 1] + 1);
		}
	}

	return cuts[s.length];
};
