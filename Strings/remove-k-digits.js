// Given string num representing a non-negative integer num, and an integer k,
// return the smallest possible integer after removing k digits from num.

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
	if (k == num.length) return "0";

	let stack = [];
	let digits = num.length - k;

	// k keeps track of how many characters we can remove
	// if the previous character in the stack is larger than the current one
	// then we remove the previous character to get a smaller number iff k > 0

	let i = 0;
	while (i < num.length) {
		while (
			k > 0 &&
			stack.length !== 0 &&
			stack[stack.length - 1] > num.charAt(i)
		) {
			stack.pop();
			k--;
		}
		stack.push(num.charAt(i));
		i++;
	}
	console.log(stack);

	// remove remaining k digits
	while (k > 0) {
		stack.pop();
		k--;
	}

	// concatenate the result
	let result = "";

	i = 0;

	while (i < stack.length && stack[i] === "0") {
		i += 1;
	}

	for (i; i < digits; i++) {
		result += stack[i];
	}

	return result.length === 0 ? "0" : result;
};

console.log(removeKdigits("10200", 1)); // "200"
console.log(removeKdigits("1432219", 3)); // "1219"
console.log(removeKdigits("10", 2)); // "0"
console.log(removeKdigits("10", 1)); // "0"
console.log(removeKdigits("112", 1)); // "11"
console.log(removeKdigits("1234567890", 9)); // "0"
