// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
	// use two pointers to locate target nodes
	let fast = null,
		slow = null,
		node = head;

	// find the target nodes
	// slow: k-th node from the start
	// fast: k-th node from the end
	for (node; node != null; node = node.next) {
		fast = fast === null ? null : fast.next;

		// mark the k-th node with slow
		if (--k === 0) {
			fast = head;
			slow = node;
		}
	}

	// swap the values
	let temp = slow.val;
	slow.val = fast.val;
	fast.val = temp;

	return head;
};
