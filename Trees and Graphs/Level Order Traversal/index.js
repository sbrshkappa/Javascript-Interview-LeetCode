/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/

//Definition for a binary tree node.
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
 
/*
 * @param {TreeNode} root
 * @return {number[][]}
 */


const levelOrder = (root) => {

    //This is essentially a Breadth First Search

    let levelOrderArray = [];
    let queue = [];

    if(!root) return [];

    queue.push(root);

    while(queue.length) {
        let levelLength = queue.length;
        
        let currentLevelArray = [];
        for(let i = 0; i < levelLength; i++){
            currentLevelArray.push(queue[i].val);
            queue[i].left && queue.push(queue[i].left);
            queue[i].right && queue.push(queue[i].right);
        }
        while(levelLength > 0) {
            queue.shift();
            levelLength--;
        }
        levelOrderArray.push(currentLevelArray);
    }
    return levelOrderArray;
};

module.exports = levelOrder;