const merge = require("./index");

test("Valid input returning a merged array of intervals", () => {
  expect(
    merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ])
  ).toEqual([
    [1, 6],
    [8, 10],
    [15, 18],
  ]);
});

test("Valid input returning a merged array of 1 interval that contains all the other intervals ", () => {
  expect(
    merge([
      [1, 4],
      [4, 5],
    ])
  ).toEqual([[1, 5]]);
});

test("Empty Array input returning an empty array", () => {
  expect(merge([])).toEqual([]);
});
