// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	let result = [];
	addParenthesis(result, "", n, 0);
	return result;
};

var addParenthesis = function (result, str, left, right) {
	// base case: when there are no left parenthesis or right parenthesis remaining to be added
	// left: the number of remaining left parenthesis to be added
	// right: the number of remaining right parenthesis to be added
	if (left === 0 && right === 0) {
		result.push(str);
		return;
	}

	// recursive case
	if (left > 0) addParenthesis(result, str + "(", left - 1, right + 1);

	if (right > 0) addParenthesis(result, str + ")", left, right - 1);
};

console.log(generateParenthesis(3));
console.log(
	generateParenthesis(3) === ["((()))", "(()())", "(())()", "()(())", "()()()"]
);

console.log(generateParenthesis(1) === ["()"]);
