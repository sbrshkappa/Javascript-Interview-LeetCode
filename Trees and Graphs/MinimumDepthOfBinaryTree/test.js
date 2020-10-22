const minDepth = require("./index");

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

test("Testing valid binary tree depth with recursion", () => {
  let root = new TreeNode(
    3,
    new TreeNode(9, null, null),
    new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null))
  );
  expect(minDepth.recurse(root)).toEqual(2);
});

test("Testing valid binary tree depth with DFS", () => {
  let root = new TreeNode(
    3,
    new TreeNode(9, null, null),
    new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null))
  );
  expect(minDepth.DFS(root)).toEqual(2);
});

test("Testing valid binary tree depth with BFS", () => {
  let root = new TreeNode(
    3,
    new TreeNode(9, null, null),
    new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null))
  );
  expect(minDepth.BFS(root)).toEqual(2);
});
