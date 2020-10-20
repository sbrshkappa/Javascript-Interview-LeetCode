const cloneGraph = require("./index");

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

test("clone graph test with simple graph returning first node of cloned graph", () => {
  let node1 = new Node(1, new Array());
  let node2 = new Node(2, new Array());
  let node3 = new Node(3, new Array());
  let node4 = new Node(4, new Array());

  node1.neighbors.push(node2);
  node1.neighbors.push(node4);

  node2.neighbors.push(node1);
  node2.neighbors.push(node3);

  node3.neighbors.push(node2);
  node3.neighbors.push(node4);

  node4.neighbors.push(node1);
  node4.neighbors.push(node3);
  expect(cloneGraph(node1)).toEqual(node1);
});
