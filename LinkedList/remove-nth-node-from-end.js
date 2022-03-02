// Given the head of a linked list, remove the nth node from the end of the list and return its head.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	let fast = head,
		slow = head;

	// let fast move n nodes first
	for (let i = 0; i < n; i++) fast = fast.next;

	// return empty if fast reached the end
	if (!fast) return head.next;

	// move slow and fast at the same time
	while (fast.next) (fast = fast.next), (slow = slow.next);

	// skip the nth node
	slow.next = slow.next.next;

	return head;
};

console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2)); // [1, 2, 3, 5]
console.log(removeNthFromEnd([1], 1)); // []
console.log(removeNthFromEnd([1, 2], 1)); // [1]
