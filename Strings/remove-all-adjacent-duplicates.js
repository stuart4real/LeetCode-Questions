// You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.

// We repeatedly make k duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.

// Recursion
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
	for (let i = 1, count = 1; i < s.length; i++) {
		// increase the count if the character is the same
		// when encounter a different character, reset count to 1
		count = s.charAt(i) === s.charAt(i - 1) ? count + 1 : 1;

		// remove the adjacent duplicates (i.e. [i-k+1, i]) and call recursively
		if (count === k) {
			s = removeDuplicates(s.slice(0, i - k + 1) + s.slice(i + 1), k);
		}
	}

	return s;
};

console.log(removeDuplicates("abcd", 2));
console.log(removeDuplicates("deeedbbcccbdaa", 3));

// In-Place Stack
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicatesV = function (s, k) {
	let sc = s.split(""),
		st = [0],
		i,
		j;
	for (i = 1, j = 1; j < s.length; sc[++i] = sc[++j]) {
		if (sc[i] !== sc[i - 1]) st.push(i);
		if (i - st[st.length - 1] + 1 === k) i = st.pop() - 1;
	}

	return sc.slice(0, i + 1).join("");
};
