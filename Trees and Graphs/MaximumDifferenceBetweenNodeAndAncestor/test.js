const { TestScheduler } = require("jest");
const maxAncestorDiff = require("./index");

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test("Valid input with finding the largest difference", () => {
  //[8,3,10,1,6,null,14,null,null,4,7,13]
  let root = new TreeNode(8, null, null);
  root.left = new TreeNode(
    3,
    new TreeNode(1, null, null),
    new TreeNode(6, new TreeNode(4, null, null), new TreeNode(7, null, null))
  );
  root.right = new TreeNode(
    10,
    null,
    new TreeNode(14, new TreeNode(13, null, null), null)
  );

  expect(maxAncestorDiff(root)).toEqual(7);
});
