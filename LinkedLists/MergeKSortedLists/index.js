/*

Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6

*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const mergeTwoLists = (l1, l2) => {
    let curr1 = l1;
    let curr2 = l2;

    if(l1 === null){
        return l2;
    } else if(l2 === null){
        return l1;
    } else {
        if(l1.val < l2.val){
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
    }
}


const mergeKLists = function(lists) {
    let root = lists[0];
    for(let i = 1; i < lists.length; i++){
        root = mergeTwoLists(root, lists[i]);
    }

    return root || null;
}

module.exports = mergeKLists;