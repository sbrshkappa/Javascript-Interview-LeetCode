/*

A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

The Linked List is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) where random pointer points to, or null if it does not point to any node.
 

Example 1:


Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
Example 2:


Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]
Example 3:



Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]
Example 4:

Input: head = []
Output: []
Explanation: Given linked list is empty (null pointer), so return null.
 

Constraints:

-10000 <= Node.val <= 10000
Node.random is null or pointing to a node in the linked list.
Number of Nodes will not exceed 1000.

*/


/**
 * // Definition for a Node.*/
 function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
 };


/*
* @param {Node} head
* @return {Node}
*/


let visitedHashMap = new Map();

const copyRandomList = function(head) {
    
    if(head === null) return null;
    
    if(visitedHashMap.get(head)) return visitedHashMap.get(head);
    
    let newNode = new Node(head.val, null, null);
    
    visitedHashMap.set(head, newNode);
    
    newNode.random = copyRandomList(head.random);
    newNode.next = copyRandomList(head.next);
    
    return newNode;
    
};

const copyRandomList_O1Space = function(head) {
    if (head === null) return null;
    
    let current = head;
    
    while(current !== null){
        let newNode = new Node(current.val);
        newNode.next = current.next;
        current.next = newNode;
        current = newNode.next;
    }
    
    current = head;
    while(current !== null){
        current.next.random = (current.random !== null) ? current.random.next : null;
        current = current.next.next;
    }
    
    let oldList = head;
    let newList = head.next;
    let newHead = head.next;
    
    while(oldList !== null){
        oldList.next = oldList.next.next;
        newList.next = (newList.next !== null) ? newList.next.next : null;
        oldList = oldList.next;
        newList = newList.next;
    }
    
    return newHead;
}

modules.export = {copyRandomList, copyRandomList_O1Space};