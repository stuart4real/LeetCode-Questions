// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

// 1. Read in and ignore any leading whitespace.
// 2. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
// 3. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
// 4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
// 5. If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
// 6. Return the integer as the final result.

// Note:
// Only the space character ' ' is considered a whitespace character.
// Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
	let sign = 1,
		num = 0,
		i = 0,
		MIN = -2147483648,
		MAX = 2147483647;

	// ignore leading whitespace
	while (s[i] === " ") i++;

	// read sign
	if (s[i] === "-" || s[i] === "+") {
		sign = s[i++] === "-" ? -1 : 1;
	}

	// read digits
	// ascii code of 0 === 48
	while (s[i] && s[i].charCodeAt(0) - 48 <= 9 && s[i].charCodeAt(0) - 48 >= 0) {
		num = num * 10 + (s[i++].charCodeAt(0) - 48);
	}

	// apply sign
	num = sign * num;

	// handle overflow
	return num <= MIN ? MIN : num >= MAX ? MAX : num;
};
