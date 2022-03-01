// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let prefex = "";
	let i = 0;
	let flag = true;
	// edge case: strs has only 1 string
	if (strs.length === 1) return strs[0];
	while (flag) {
		for (let j = 0; j < strs.length - 1; j++) {
			// set the flag to be false if:
			// 1. they don't have the same character
			// 2. either one of theire's index is out of range
			if (
				strs[j].charAt(i) !== strs[j + 1].charAt(i) ||
				strs[j].charAt(i) === "" ||
				strs[j + 1].charAt(i) === ""
			) {
				flag = false;
				break;
			}
		}

		// if the prefix string is still the same
		if (flag) {
			prefex += strs[0].charAt(i);
			i++;
		}
	}

	return prefex;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix(["flower", "flow", ""])); // ""
