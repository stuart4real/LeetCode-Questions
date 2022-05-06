// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list.
// If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

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
var reverseKGroup = function (head, k) {
	// find the k+1 node
	var curr = head,
		count = 0,
		tmp;
	while (curr && count < k) {
		curr = curr.next;
		count += 1;
	}

	// if the k+1 node is found
	if (count == k) {
		// reverse the rest nodes from curr by recursion
		curr = reverseKGroup(curr, k);

		// reverse the first k node
		while (count > 0) {
			// save the next to temporary
			tmp = head.next;

			// attach the reversed part to head
			head.next = curr;

			// move curr to the left since head is the start of the reversed part
			curr = head;

			// move head to tmp where is the start of direct part
			head = tmp;

			// decrease the counter
			count -= 1;
		}

		head = curr;
	}

	return head;
};
