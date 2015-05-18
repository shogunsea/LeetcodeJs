// Given a linked list, determine if it has a cycle in it.

// Follow up:
// Can you solve it without using extra space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
	if (head === null) {
		return false;
	}

	var fast = head;
	var slow = head;

	while (fast !== null) {
		fast = fast.next;
		slow = slow.next;

		if (fast !== null) {
			fast = fast.next;
			if (fast === slow) {
				return true;
			}
		}
	}

	return false;
    
};