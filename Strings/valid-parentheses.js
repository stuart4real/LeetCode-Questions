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

// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
	// initialize the stack as [")"]
	// stack stores the indices of "("
	let stack = [-1],
		maxLen = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === "(")
			stack.push(i); // [")", "("..."("] where "(" can be 1 or more
		else {
			// if there is a match (i.e. "()"), then we can pop the stack and update the max length by (i - indices.top())
			// (because the string in (indices.top(), i] is a valid parenthese)
			// if there is NOT a match (i.e. "))"), then we can substitute the top of the stack by the latest one
			// To sum up, no matter "()" or "))", we all need to pop the stack
			stack.pop();

			// if the stack is empty, there is a "))"
			if (stack.length === 0) stack.push(i);
			// otherwise there is a "()"
			else maxLen = Math.max(maxLen, i - stack[stack.length - 1]); // [")", "("..."("] where "(" can be 0 or more
		}
	}

	return maxLen;
};

console.log(longestValidParentheses(")()())")); // 4
console.log(longestValidParentheses("(()")); // 2
