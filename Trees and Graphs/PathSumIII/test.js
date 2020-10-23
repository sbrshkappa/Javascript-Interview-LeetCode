const pathSum = require("./index");

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test("Valid tree returing multiple paths", () => {
  let root = new TreeNode(10, null, null);
  root.right = new TreeNode(-3, null, new TreeNode(11, null, null));
  root.left = new TreeNode(
    5,
    new TreeNode(3, new TreeNode(3, null, null), new TreeNode(-2, null, null)),
    new TreeNode(2, null, new TreeNode(1, null, null))
  );

  expect(pathSum(root, 8)).toEqual(3);
});
