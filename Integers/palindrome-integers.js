//Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// -2**31 <= x <= 2**31 - 1

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	// reverse x then compare
	let rev = 0;

	for (let i = x; i >= 1; i = Math.floor(i / 10)) {
		rev = rev * 10 + (i % 10);
	}

	return rev === x;
};
