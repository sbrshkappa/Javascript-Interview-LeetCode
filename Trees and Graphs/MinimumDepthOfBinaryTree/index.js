/*
Leetcode Problem 111
https://leetcode.com/problems/minimum-depth-of-binary-tree/

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 2
Example 2:

Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
 

Constraints:

The number of nodes in the tree is in the range [0, 105].
-1000 <= Node.val <= 1000
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

const recurse = function (root) {
  if (root === null) {
    return 0;
  }
  if (root.left === null && root.right === null) {
    return 1;
  }
  let minimumDepth = Number.MAX_VALUE;
  if (root.left !== null) {
    let leftDepth = recurse(root.left);
    minimumDepth = Math.min(leftDepth, minimumDepth);
  }
  if (root.right !== null) {
    let rightDepth = recurse(root.right);
    minimumDepth = Math.min(rightDepth, minimumDepth);
  }
  return minimumDepth + 1;
};

const DFS = function (root) {
  let stack = [];
  if (root === null) return 0;
  else stack.push([root, 1]);

  let depth = Infinity;

  while (stack.length) {
    let current = stack.pop();
    root = current[0];
    let currentDepth = current[1];

    if (root.left === null && root.right === null) {
      depth = Math.min(depth, currentDepth);
    }
    if (root.left !== null) {
      stack.push([root.left, currentDepth + 1]);
    }
    if (root.right !== null) {
      stack.push([root.right, currentDepth + 1]);
    }
  }

  return depth;
};

const BFS = function (root) {
  let queue = [];

  if (root === null) return 0;
  else queue.push(root);

  let depth = 0;

  while (queue.length) {
    depth++;
    let tempQueue = [];

    queue.every((node) => {
      if (node.left === node.right) {
        tempQueue = [];
        return false;
      }
      if (node.left) {
        tempQueue.push(node.left);
      }
      if (node.right) {
        tempQueue.push(node.right);
      }
      return true;
    });

    if (!tempQueue.length) {
      return depth;
    }
    queue = tempQueue;
  }
};

module.exports = { BFS, DFS, recurse };
