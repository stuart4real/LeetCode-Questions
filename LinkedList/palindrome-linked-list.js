// Given the head of a singly linked list, return true if it is a palindrome.

// 0 <= Node Value <= 9

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
	// go through the linked list and store the value into an array
	let values = new Array();
	let rev = new Array();

	while (head) {
		values.push(head.val);
		rev.push(head.val);
		head = head.next;
	}

	// reverse the array
	rev = rev.reverse();

	// compare two arrays
	let identical = true;
	values.forEach((element, index) => {
		if (element !== rev[index]) {
			identical = false;
		}
	});

	return identical;
};
