// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line "PAHNAPLSIIGYIR"

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	const len = s.length;

	if (numRows < 2 || len < numRows) {
		return s;
	}

	const rows = new Array(numRows).fill("");
	let reverse = false;
	let count = 0;

	for (let i = 0; i < len; i++) {
		rows[count] += s[i];
		reverse ? count-- : count++;

		// go back to top row if reached the bottom
		if (count === numRows - 1 || count == 0) {
			reverse = !reverse;
		}
	}

	return rows.join("");
};

console.log(convert("ABCDEF", 2)); // "ACEBDF"
console.log(convert("ABCDEF", 3)); // "AEBDFC"
console.log(convert("ABCDEF", 4)); // "ABFCED"
