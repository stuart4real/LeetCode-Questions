// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	let letters = [
		"0",
		"1",
		"abc",
		"def",
		"ghi",
		"jkl",
		"mno",
		"pqrs",
		"tuv",
		"wxyz",
	];
	let result = [];

	if (digits.length === 0) return result;

	result.push("");

	for (let i = 0; i < digits.length; i++) {
		let current = parseInt(digits[i]);

		// note that after i-th iteration, each string in the result should have length of i
		while (result[0].length === i) {
			// get the first element
			let t = result.shift();

			// update each string by adding the new character
			for (let j = 0; j < letters[current].length; j++) {
				result.push(t + letters[current][j]);
			}
		}
	}

	return result;
};

console.log(letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("")); // []
console.log(letterCombinations("2")); // ["a", "b", "c"]
