/*
Leetcode Problem 148
https://leetcode.com/problems/sort-list/

Given the head of a linked list, return the list after sorting it in ascending order.

Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

 

Example 1:


Input: head = [4,2,1,3]
Output: [1,2,3,4]
Example 2:


Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is in the range [0, 5 * 104].
-105 <= Node.val <= 105
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
 * @return {ListNode}
 */

const merge = (list1, list2) => {
    let dummyHead = {next: null};
    let current = dummyHead;
    
    
    while(list1 && list2){
        if(list1.val < list2.val){
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    current.next = list1 || list2;
    
    return dummyHead.next;
}

const getMid = (head) => {
    let slow = null;
    
    while(head && head.next){
        slow = slow === null ? head : slow.next;
        head = head.next.next;
    }
    
    let mid = slow.next;
    slow.next = null;
    
    return mid;
}


const sortList = function(head) {
    if(!head || !head.next){
        return head;
    }
    
    let mid = getMid(head);
    let left = sortList(head);
    let right = sortList(mid);
    return merge(left,right);
};

module.exports = sortList;