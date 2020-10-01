/*
Leetcode Problem 104
https://leetcode.com/problems/maximum-depth-of-binary-tree/

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
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
 * @return {number}
 */
const maxDepth = function(root) {
    
    let depth = 0;
    
    function dive(node, currentDepth){
        if(!node){
            depth = Math.max(currentDepth - 1, depth);
            return;
        }
        
        dive(node.left, currentDepth+1);
        dive(node.right, currentDepth+1);
    }
    
    dive(root, 1);
    
    return depth;
    
};

module.exports = maxDepth;