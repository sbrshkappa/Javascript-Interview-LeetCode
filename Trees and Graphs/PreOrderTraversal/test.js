const preorder = require('./index');

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(1, new TreeNode(2, null, null), new TreeNode(3, null, null));

test("Iterative test", () => {
    expect(preorder.preorderTraversal(root)).toEqual([1,2,3]);
});

test("Recursive test", () => {
    expect(preorder.preorderTraversal_recurse(root)).toEqual([1,2,3]);
});