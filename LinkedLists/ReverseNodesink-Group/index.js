/*
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

Example:

Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5

Note:

Only constant extra memory is allowed.
You may not alter the values in the list's nodes, only nodes itself may be changed.
*/



// Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
 
/*
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

const reverseKNodes = (head, k) => {
    let newHead = null;
    let ptr = head;

    while(k > 0){
        let nextNode = ptr.next;
        ptr.next = newHead;
        newHead = ptr;
        ptr = nextNode;
        k--;
    }
    return newHead;
}

const reverseKGroup = (head, k) => {
    
    let count = 0;
    let ptr = head;
    let ktail = null;
    let newHead = null;

    while(ptr !== null){
       let count = 0;
       ptr = head;

       while(count < k && ptr !== null) {
           ptr = ptr.next;
           count++;
       }

       if(count === k){
        let reversedHead = reverseKNodes(head,k);
        if(newHead === null) newHead = reversedHead;

        if(ktail !== null) ktail.next = reversedHead;

        ktail = head;
        head = ptr;
       }
    }

    if(ktail !== null) ktail.next = head;

    return newHead === null ? head : newHead;

    
    return head;
};

module.exports = reverseKGroup;