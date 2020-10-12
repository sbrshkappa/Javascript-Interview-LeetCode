/*
Leetcode Problem 144
https://leetcode.com/problems/binary-tree-preorder-traversal/

Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,2,3]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:


Input: root = [1,2]
Output: [1,2]
Example 5:


Input: root = [1,null,2]
Output: [1,2]
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function(root){
    
    if(root === null)
        return [];
    
    let stack = [root];
    let traversal = [];
    
    while(stack.length){
        let current = stack.pop();
        traversal.push(current.val);
        if(current.right !== null)
            stack.push(current.right);
        if(current.left !== null)
            stack.push(current.left);     
    }
    
    return traversal;
}

const preorderTraversal_recurse = function(root) {
    
    let traversal = [];
    
    function helper(node){
        if(node === null)
            return;
        traversal.push(node.val);
        helper(node.left);
        helper(node.right);
    }
    helper(root);
    return traversal;
    
};

module.exports = {preorderTraversal, preorderTraversal_recurse};