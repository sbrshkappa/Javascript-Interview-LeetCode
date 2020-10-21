const hasPathSum = require("./index");

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test("Valid input returning truthy value because path exists", () => {
  let root = new TreeNode(5, null, null);
  root.left = new TreeNode(
    4,
    new TreeNode(11, new TreeNode(7, null, null), new TreeNode(2, null, null)),
    null
  );
  root.right = new TreeNode(
    8,
    new TreeNode(13, null, null),
    new TreeNode(4, null, new TreeNode(1, null, null))
  );

  expect(hasPathSum(root, 22)).toEqual(true);
});
