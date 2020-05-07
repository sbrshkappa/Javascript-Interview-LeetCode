const isValidBST = require("./index");

test("Initial Test Case", () => {
  expect(
    isValidBST({
      val: 2,
      left: { val: 1, left: null, right: null },
      right: { val: 3, left: null, right: null },
    })
  ).toEqual(true);
});
