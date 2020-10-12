/*
Leetcode Problem 145
https://leetcode.com/problems/binary-tree-postorder-traversal/

Given the root of a binary tree, return the postorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [3,2,1]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:


Input: root = [1,2]
Output: [2,1]
Example 5:


Input: root = [1,null,2]
Output: [2,1]
 

Constraints:

The number of the nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 

Follow up:

Recursive solution is trivial, could you do it iteratively?
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
const postorderTraversal = function(root) {
    
    let stack = [];
    let traversal = [];
    
    if (root === null) return traversal;
    
    while(root || stack.length){
        while(root){
            if(root.right)
                stack.push(root.right);
            stack.push(root);
            root = root.left;
        }
        let node = stack.pop();
        if(stack.length && node.right === stack[stack.length - 1]){
            root = stack.pop();
            stack.push(node);
        } else {
            traversal.push(node.val);
            root = null;
        }
    }
    
    return traversal;
};

module.exports = postorderTraversal;
