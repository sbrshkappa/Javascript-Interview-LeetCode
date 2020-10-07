/*
Leetcode Problem 61
https://leetcode.com/problems/rotate-list/

Given a linked list, rotate the list to the right by k places, where k is non-negative.

Example 1:

Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL
Example 2:

Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL
*/

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
const rotateRight = function(head, k) {
    
    if(head === null) return null;
    if(head.next === null) return head;
    
    let oldTail = head;
    let length = 0;
    
    for(length = 1; oldTail.next != null; length++){
        oldTail = oldTail.next;
    }
    oldTail.next = head;
    
    let newTail = head;
    for(let i = 0; i < length - k % length - 1; i++){
        newTail = newTail.next;
    }
    
    let newHead = newTail.next;
    newTail.next = null;
    
    return newHead;
};

module.exports = rotateRight;