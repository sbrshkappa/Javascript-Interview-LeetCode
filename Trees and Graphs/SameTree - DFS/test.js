const isSameTree = require("./index");

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test("False Case test", () => {
  let p = new TreeNode(1, new TreeNode(2, null, null), null);
  let q = new TreeNode(1, null, new TreeNode(2, null, null));
  expect(isSameTree(p, q)).toEqual(false);
});

test("True Case test", () => {
  let p = new TreeNode(
    1,
    new TreeNode(2, null, null),
    new TreeNode(3, null, null)
  );
  let q = new TreeNode(
    1,
    new TreeNode(2, null, null),
    new TreeNode(3, null, null)
  );
  expect(isSameTree(p, q)).toEqual(true);
});
