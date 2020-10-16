/*
Leetcode Problem 445
https://leetcode.com/problems/add-two-numbers-ii/

You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
*/

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

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const addTwoNumbers = function(l1, l2) {
    let stack1 = [];
    let stack2 = [];
    
    let current1 = l1;
    let current2 = l2;
    
    while(current1){
        stack1.push(current1.val);
        current1 = current1.next;
    }
    
    while(current2){
        stack2.push(current2.val);
        current2 = current2.next;
    }
    
    let resultStack = [];
    let carry = 0;
    while(stack1.length && stack2.length){
        let sum = stack1.pop() + stack2.pop() + carry;
        resultStack.push(sum % 10);
        carry = Math.floor(sum / 10);
    }
    
    while(stack1.length > 0){
        let sum = carry + stack1.pop();
        resultStack.push(sum % 10);
        carry = Math.floor(sum / 10);
    }
    
    while(stack2.length > 0){
        let sum = carry + stack2.pop();
        resultStack.push(sum % 10);
        carry = Math.floor(sum / 10);
    }
    
    if(carry > 0){
        resultStack.push(carry);
    }
    
    let prevNode = new ListNode(resultStack.pop(), null);
    let dummyHead = {next: prevNode};
    while(resultStack.length){
        let currentNode = new ListNode(resultStack.pop(), null);
        prevNode.next = currentNode;
        prevNode = prevNode.next;
        if(dummyHead.next === null) dummyHead.next = currentNode;
    }
    
    return dummyHead.next;
    
};

module.exports = addTwoNumbers;