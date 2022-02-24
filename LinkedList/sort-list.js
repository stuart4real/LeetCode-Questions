// Given the head of a linked list, return the list after sorting it in ascending order.

// Constraints:

// The number of nodes in the list is in the range [0, 5 * 104].
// -105 <= Node.val <= 105

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
	if (!head || !head.next) return head;

	// split the linked list
	const [left, right] = split(head);

	const root = new ListNode(null);
	return merge(root, sortList(left), sortList(right));
};

function split(node) {
	let slow = node;
	let fast = node;

	// split the linked list into [0 -> slow] & [slow + 1 -> list.length]
	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	// slow now is at the middle point of the linked list
	const left = node;
	const right = slow.next;

	// break left and right
	slow.next = null;

	return [left, right];
}

// merge the smaller node in the "left" and "right" list first
// return the second node in the list because the first is a dummy node
function merge(root, left, right) {
	let pointer = root;

	while (left !== null || right !== null) {
		if (left === null) {
			pointer.next = right;
			right = right.next;
		} else if (right === null) {
			pointer.next = left;
			left = left.next;
		} else {
			if (left.val < right.val) {
				pointer.next = left;
				left = left.next;
			} else {
				pointer.next = right;
				right = right.next;
			}
		}
		pointer = pointer.next;
	}

	return root.next;
}
