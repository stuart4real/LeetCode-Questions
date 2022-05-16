// You are given a string s and an array of strings words of the same length.
// Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once, in any order, and without any intervening characters.

// You can return the answer in any order.

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
	let size = words[0].length,
		counts = {},
		result = [];

	// build a frequency map of word in words
	for (let word of words) {
		counts[word] = word in counts ? counts[word] + 1 : 1;
	}

	// sliding window
	for (let i = 0; i < s.length - words.length * size + 1; i++) {
		let substring = s.substring(i, i + words.length * size);
		if (isConcat(substring, counts, size)) result.push(i);
	}

	return result;
};

var isConcat = function (s, counts, size) {
	let seen = {},
		substring;

	// build the map that records the frequency of words in s
	for (let i = 0; i < s.length; i += size) {
		substring = s.substring(i, i + size);
		seen[substring] = substring in seen ? seen[substring] + 1 : 1;

		// return false as soon as there's a different key or a bigger value
		if (!(substring in counts) || seen[substring] > counts[substring])
			return false;
	}

	// return true if everything checks out
	return true;
};

console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]));
console.log(
	findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "good"])
);
