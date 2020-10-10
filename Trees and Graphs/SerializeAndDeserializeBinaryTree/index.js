/*
Leetcode Problem 297
https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

 

Example 1:


Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:

Input: root = [1,2]
Output: [1,2]
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
-1000 <= Node.val <= 1000
,
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

const recurSerialize = (root, str) => {
    if(root === null){
        str += "null,";
    } else {
        str += root.val + ",";
        str = recurSerialize(root.left, str);
        str = recurSerialize(root.right, str);
    }
    //console.log(str);
    return str;
}

const serialize = function(root) {
    return recurSerialize(root, "");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const recurDeserialize = (strArr) => {
    if(strArr[0] === "null"){
        strArr.shift();
        return null;
    }
    
    let node = new TreeNode(parseInt(strArr[0]));
    strArr.shift();
    node.left = recurDeserialize(strArr);
    node.right = recurDeserialize(strArr);
    
    return node;
}

const deserialize = function(data) {
    let dataArr = data.split(",");
    return recurDeserialize(dataArr);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

 module.exports = {serialize, deserialize};