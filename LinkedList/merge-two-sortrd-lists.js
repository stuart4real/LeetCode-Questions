// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	// create a dummy head
	let dummy = new ListNode(0);
	let result = dummy;

	// merge two lists
	while (list1 && list2) {
		if (list1.val < list2.val) {
			result.next = list1;
			list1 = list1.next;
		} else {
			result.next = list2;
			list2 = list2.next;
		}

		result = result.next;
	}

	// add the remainder to the result
	result.next = list1 || list2;

	return dummy.next;
};
