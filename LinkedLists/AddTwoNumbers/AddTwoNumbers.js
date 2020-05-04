
//LeetCode 'Linked List - Add Two Numbers'


/**

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

**/




/**
 * Definition for singly-linked list.*/
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
 
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = function(l1, l2) {
    let current1 = l1;
    let current2 = l2;
    let carryOver = 0;
    let prevNode = null;
    let head = null;
    
    console.log("List 1 is : " + current1);
    console.log("List 2 is : " + current2);
    
    if(current1 === null && current2 != null) {
        return current2;
    }
    
    if(current1 != null && current2 === null) {
        return current1;
    }
    
    while(current1 != null && current2 != null){
        
        let newNode = new ListNode();
        if(head === null) head = newNode;
        newNode.val = (current1.val + current2.val + carryOver)%10;
        carryOver = Math.floor((current1.val + current2.val + carryOver)/10);
        console.log("CarryOver: " + carryOver);
        if(!prevNode){
            prevNode = newNode;
        } else {
           prevNode.next = newNode;
           prevNode = newNode; 
        }
        
        
        current1 = current1.next;
        current2 = current2.next;
        
    }
    
    console.log(prevNode);
    
    let current = null;
    if(current1) {
        current = current1;
    } else if(current2) {
        current = current2;
    }
    
    while(current) {
        let newNode1 = new ListNode();
        newNode1.val = (current.val + carryOver)%10;
        carryOver = Math.floor((current.val + carryOver)/10);
        prevNode.next = newNode1;
        prevNode = newNode1;
        
        current = current.next;
    }
    
    if(carryOver){
        let carryNode = new ListNode();
        carryNode.val = carryOver;
        prevNode.next = carryNode;
        prevNode = carryNode;
    }
    
    return head;
};

module.exports = addTwoNumbers;