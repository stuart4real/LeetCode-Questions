// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	let stack = [];

	for (let i = 0; i < s.length; i++) {
		let current = s[i];

		if (current === "(") {
			stack.push(")");
		} else if (current === "{") {
			stack.push("}");
		} else if (current === "[") {
			stack.push("]");
		} else if (stack.length === 0 || stack.pop() != current) {
			return false;
		}
	}

	return stack.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
