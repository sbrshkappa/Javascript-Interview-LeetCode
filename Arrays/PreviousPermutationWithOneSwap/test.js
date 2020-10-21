const prevPermOpt1 = require("./index");

test("Valid input testing successful swap", () => {
  expect(prevPermOpt1([3, 2, 1])).toEqual([3, 1, 2]);
});

test("Valid input testing no swap needed", () => {
  expect(prevPermOpt1([1, 1, 5])).toEqual([1, 1, 5]);
});

test("Valid input testing successful swap", () => {
  expect(prevPermOpt1([1, 9, 4, 6, 7])).toEqual([1, 7, 4, 6, 9]);
});

test("Valid input with repeating caharacter testing successful swap", () => {
  expect(prevPermOpt1([3, 1, 1, 3])).toEqual([1, 3, 1, 3]);
});
