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

// Floyd's Cycle Detection Algorithm
var isPalindromeV2 = function (head) {
	let slow = head,
		fast = head,
		prev,
		temp;
	// find the middle point
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	(prev = slow), (slow = slow.next), (prev.next = null);
	// reverse the second half of the linked list
	while (slow)
		(temp = slow.next), (slow.next = prev), (prev = slow), (slow = temp);

	// move fast to head
	(fast = head), (slow = prev);
	// compare
	while (slow)
		if (fast.val !== slow.val) return false;
		else (fast = fast.next), (slow = slow.next);

	return true;
};
