/*
Leetcode Problem 124
https://leetcode.com/problems/binary-tree-maximum-path-sum/

Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42
*/


//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/*
 * @param {TreeNode} root
 * @return {number}
 */

let maxSum = Number.MIN_SAFE_INTEGER;

const maxGain = (node) => {
    if(node === null) return 0;

    let leftGain = Math.max(maxGain(node.left),0);
    let rightGain = Math.max(maxGain(node.right),0);

    let priceIncludingCurrentNode = node.val + leftGain + rightGain;

    maxSum = Math.max(maxSum, priceIncludingCurrentNode);

    return node.val + Math.max(leftGain,rightGain);
}

const maxPathSum = (root) => {
    maxGain(root);
    return maxSum;
};

module.exports = maxPathSum;