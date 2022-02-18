// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
	const dp = {};

	/**
	 * i and j and the indices in s and p
	 * check (i, j) means checking if s[i:] and p[j:] can match
	 */
	const check = (i, j) => {
		const key = `${i}:${j}`;

		// base case
		if (dp[key] !== undefined) {
			return dp[key];
		}

		// out of range
		if (i > s.length) {
			return false;
		}

		// all chars in s and p are checked
		if (i === s.length && j == p.length) {
			return true;
		}

		let result;

		// recursive case
		// s[i] and p[j] are the same char or p[j] is a dot
		if (s[i] === p[j] || p[j] === ".") {
			// the symbol is followed by a star
			if (p[j + 1] === "*") {
				// match 1 occurence in s or skip p[j] * by repeating 0 occurences
				result = check(i + 1, j) || check(i, j + 2);
			} else {
				// is not followed by a star
				result = check(i + 1, j + 1);
			}
		} else {
			// s[i] and p[j] is not the same char

			// try to skip p[j]* by repeating 0 occurences
			if (p[j + 1] === "*") {
				result = check(i, j + 2);
			} else {
				// p[j] is not skippable.
				result = false;
			}
		}
		dp[key] = result;
		return result;
	};

	return check(0, 0);
};

console.log(isMatch("aa", "a")); // false
console.log(isMatch("aa", "a*")); // true
console.log(isMatch("ab", ".*")); // true
console.log(isMatch("aab", "c*a*b")); // true
console.log(isMatch("mississippi", "mis*is*p*.")); // false
