// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
	// base case
	if (lists.length === 0) return null;
	if (lists.length === 1) return lists[0];
	if (lists.length === 2) return mergeTwoLists(lists[0], lists[1]);

	// recursive call
	return mergeTwoLists(
		mergeKLists(lists.slice(0, lists.length / 2)),
		mergeKLists(lists.slice(lists.length / 2, lists.length))
	);
};

var mergeTwoLists = function (l1, l2) {
	if (l1 === null) return l2;
	if (l2 === null) return l1;

	var head = null;
	var previous = null;

	while (l1 !== null && l2 !== null) {
		if (l1.val > l2.val) {
			if (previous === null) {
				previous = l2;
			} else {
				previous.next = l2;
			}

			if (head === null) {
				head = previous;
			} else {
				previous = previous.next;
			}

			l2 = l2.next;
		} else {
			if (previous === null) {
				previous = l1;
			} else {
				previous.next = l1;
			}

			if (head === null) {
				head = previous;
			} else {
				previous = previous.next;
			}

			l1 = l1.next;
		}
	}

	if (l2 !== null) l1 = l2;
	previous.next = l1;

	return head;
};

console.log(
	mergeKLists([
		[1, 4, 5],
		[1, 3, 4],
		[2, 6],
	])
); // [1, 1, 2, 3, 4, 4, 5, 6]
console.log(mergeKLists([])); // []
console.log(mergeKLists([[]])); // []
