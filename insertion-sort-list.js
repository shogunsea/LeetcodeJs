// Sort a linked list using insertion sort.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    var fakeHead = new ListNode(-99999999999);
    var runner = head;
    var next, previous;

    while (runner !== null) {
    	previous = getPrevious(fakeHead, runner);
    	// keep pointer to original next element.
    	next = runner.next;
    	runner.next = previous.next;
    	previous.next = runner;
    	runner = next;
    }

    return fakeHead.next;
};

function getPrevious(fakeHead, newNode) {
	var previous = null;
	var runner = fakeHead;
	while (runner !== null && runner.val <= newNode.val) {
		previous = runner;
		runner = runner.next;
	}
	return previous;
}