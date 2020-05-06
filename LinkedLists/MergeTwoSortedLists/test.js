const mergeTwoLists = require("./index");

test("Initial Test Case", () => {
  expect(
    mergeTwoLists(
      { val: 1, next: { val: 2, next: { val: 4, next: null } } },
      { val: 1, next: { val: 3, next: { val: 4, next: null } } }
    )
  ).toEqual({
    val: 1,
    next: {
      val: 1,
      next: {
        val: 2,
        next: { val: 3, next: { val: 4, next: { val: 4, next: null } } },
      },
    },
  });
});
