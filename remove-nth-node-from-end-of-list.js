/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 
//   Given linked list: 1->2->3->4->5, and n = 2.
//   After removing the second node from the end, the linked list becomes 1->2->3->5.
//  X     X
//  D->1->2->3->4->5
var removeNthFromEnd = function(head, n) {
    var dummy = new ListNode(0);
    var runner = dummy;
    dummy.next = head;
    var fast = runner;
    while (fast !== null && n > 0) {
        fast = fast.next;
        n--;
    }
    while (fast.next !== null) {
        fast = fast.next;
        runner = runner.next;
    }
    runner.next = runner.next.next;
    return dummy.next;
};