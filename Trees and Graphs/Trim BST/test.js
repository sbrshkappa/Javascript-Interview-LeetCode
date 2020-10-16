const { TestScheduler } = require('jest');
const trimBST = require('./index');

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(1, new TreeNode(0, null, null), new TreeNode(2, null, null));
let result = new TreeNode(1, null, new TreeNode(2, null, null));

test("Test 1", () => {
    expect(trimBST(root, 1, 2)).toEqual(result);
});

