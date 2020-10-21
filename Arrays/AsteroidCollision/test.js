const asteroidCollision = require("./index");

test("Test with valid input that returns with one asteroid exploding", () => {
  expect(asteroidCollision([5, 10, -5])).toEqual([5, 10]);
});

test("Test with 2 asteroids of same size in opposite directions that returns with an exmpty list", () => {
  expect(asteroidCollision([8, -8])).toEqual([]);
});

test("Test with one negative asteroid that is larger than the positive asteroid and return only remaining largest +ve asteroid", () => {
  expect(asteroidCollision([10, 2, -5])).toEqual([10]);
});
