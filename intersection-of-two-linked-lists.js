// Write a program to find the node at which the intersection of two singly linked lists begins.


// For example, the following two linked lists:

// A:          a1 → a2
//                    ↘
//                      c1 → c2 → c3
//                    ↗            
// B:     b1 → b2 → b3
// begin to intersect at node c1.


// Notes:

// If the two linked lists have no intersection at all, return null.
// The linked lists must retain their original structure after the function returns.
// You may assume there are no cycles anywhere in the entire linked structure.
// Your code should preferably run in O(n) time and use only O(1) memory.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var runnerA = headA;
    var runnerB = headB;
    var countA = 0;
    var countB = 0;
    var aLonger = false;
    var diff = 0;
    
    while (runnerA !== null) {
        runnerA = runnerA.next;
        countA++;
    }
    while (runnerB !== null) {
        runnerB = runnerB.next;
        countB++;
    }
    
    diff = countA - countB;
    aLonger = diff > 0;
    diff = aLonger? diff : -diff;
    
    runnerA  = headA;
    runnerB = headB;
    if (aLonger) {
        while (diff-- > 0) {
            runnerA = runnerA.next;
        }
    } else {
        while (diff-- > 0) {
            runnerB = runnerB.next;
        }
    }
    
    while (runnerA !== runnerB) {
        runnerA = runnerA.next;
        runnerB = runnerB.next;
    }
    
    return runnerA;
    
};









