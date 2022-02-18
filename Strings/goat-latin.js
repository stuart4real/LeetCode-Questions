// You are given a string sentence that consist of words separated by spaces.
// Each word consists of lowercase and uppercase letters only.

// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)
// The rules of Goat Latin are as follows:

// 1. If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
//    For example, the word "apple" becomes "applema".
// 2. If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
//    For example, the word "goat" becomes "oatgma".
// 3. Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
//    For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.

// Return the final sentence representing the conversion from sentence to Goat Latin.

/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
	let result = "";
	let i = 0;

	const words = sentence.split(" ");
	const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

	for (i; i < words.length; i++) {
		let current = words[i];

		// check the first character
		if (vowels.includes(current.charAt(0))) {
			current += "ma";
		} else {
			current += current.charAt(0);
			current += "ma";
			current = current.slice(1);
		}

		// add "a"
		for (let count = 0; count < i + 1; count++) {
			current += "a";
		}
		result += current + " ";
	}

	// remove the trailing whitespace
	return result.trimEnd();
};

console.log(toGoatLatin("I speak Goat Latin")); // "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
console.log(toGoatLatin("The quick brown fox jumped over the lazy dog")); // "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
