const postorderTraversal = require('./index');

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(1, new TreeNode(2, null, null), new TreeNode(3, null, null));

test("Iterative test", () => {
    expect(postorderTraversal(root)).toEqual([2,3,1]);
});