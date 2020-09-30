
/**

Leetcode Problem 2
https://leetcode.com/problems/add-two-numbers/

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

**/




/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    
    let carryOver = 0, sum = 0;
    let sumPointer = null, head = null;
    
    while(l1 !== null && l2 !== null){
        
        sum = Math.floor((l1.val + l2.val + carryOver) % 10);
        carryOver = Math.floor((l1.val + l2.val + carryOver) / 10);
        
        if(sumPointer === null) {
            sumPointer = new ListNode(sum);
            head = sumPointer;    
        } else {
            sumPointer.next = new ListNode(sum);
            sumPointer = sumPointer.next;
        }
        
        l1 = l1.next;
        l2 = l2.next;
    }
    
    while(l1 !== null){
        sum = Math.floor((l1.val + carryOver) % 10);
        carryOver = Math.floor((l1.val + carryOver) / 10);
        
        sumPointer.next = new ListNode(sum);
        sumPointer = sumPointer.next;
        
        l1 = l1.next;
    }
    
    while(l2 !== null){
        sum = Math.floor((l2.val + carryOver) % 10);
        carryOver = Math.floor((l2.val + carryOver) / 10);
        
        sumPointer.next = new ListNode(sum);
        sumPointer = sumPointer.next;
        
        l2 = l2.next;
    }
    
    if(carryOver !== 0){
        sumPointer.next = new ListNode(carryOver);
        sumPointer = sumPointer.next;
    }
    
    return head;
    
};

module.exports = addTwoNumbers;