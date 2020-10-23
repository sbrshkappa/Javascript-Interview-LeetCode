const { TestScheduler } = require("jest");
const maxPathSum = require("./index");

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test("Valid tree with a max path sum including root", () => {
  let root = new TreeNode(
    1,
    new TreeNode(2, null, null),
    new TreeNode(3, null, null)
  );
  expect(maxPathSum(root)).toEqual(6);
});

test("Valid tree with a max path sum as subtree", () => {
  let root = new TreeNode(-10, new TreeNode(9, null, null), null);
  root.right = new TreeNode(
    20,
    new TreeNode(15, null, null),
    new TreeNode(7, null, null)
  );
  expect(maxPathSum(root)).toEqual(42);
});
