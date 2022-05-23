// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	// check if s2 has the same number of characters in s1
	let n1 = s1.length,
		n2 = s2.length;

	// edge case
	if (n1 > n2) return false;

	// create the charaters array
	let characters = Array(26).fill(0);

	for (let i = 0; i < n1; i++) {
		characters[s1.charAt(i).charCodeAt(0) - "a".charCodeAt(0)]++;
		characters[s2.charAt(i).charCodeAt(0) - "a".charCodeAt(0)]--;
	}

	if (allZeros(characters)) return true;

	// when a character moves into the window, decrease the count
	// when a character moves out of the window, increase the count
	for (i = n1; i < n2; i++) {
		characters[s2.charAt(i).charCodeAt(0) - "a".charCodeAt(0)]--;
		characters[s2.charAt(i - n1).charCodeAt(0) - "a".charCodeAt(0)]++;
		if (allZeros(characters)) return true;
	}

	return false;
};

var allZeros = function (characters) {
	// return false right away when seen a non-zero element
	for (let c of characters) {
		if (c !== 0) return false;
	}

	return true;
};

console.log(checkInclusion((s1 = "ab"), (s2 = "eidbaooo")));
console.log(checkInclusion("prosperity", "properties"));
console.log(allZeros([0, 1, 0]));
