/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/



/*Definition for singly-linked list.
function ListNode(val) {
     this.val = val;
     this.next = null;
 }
 */
 
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


const mergeTwoLists = function(l1, l2) {
    let curr1 = l1;
    let curr2 = l2;
    
    if(l1 === null) 
        return l2;
    else if(l2 === null) 
        return l1;
    else {
        if(l1.val < l2.val){
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
    }
};


const mergeTwoLists_O1Space = function(l1, l2) {

    let dummyHead = {next: null};
    let tail = dummyHead;
    
    while(l1 && l2){
        if(l1.val < l2.val){
            tail.next = l1;
            tail = tail.next;
            l1 = l1.next;
        } else {
            tail.next = l2;
            tail = tail.next;
            l2 = l2.next;
        }
    }
    
    tail.next = l1 || l2;
    
    return dummyHead.next;
}

module.exports = mergeTwoLists;