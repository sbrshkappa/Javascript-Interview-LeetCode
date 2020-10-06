const combinationSum3 = require('./index');

test("Test 1", () => {
    expect(combinationSum3(3, 7)).toEqual([[1,2,4]]);
});

test("Test 2", () => {
    expect(combinationSum3(3, 9)).toEqual([[1,2,6],[1,3,5],[2,3,4]]);
});

test("Test 3", () => {
    expect(combinationSum3(4, 1)).toEqual([]);
});

test("Test 4", () => {
    expect(combinationSum3(3, 2)).toEqual([]);
});

test("Test 5", () => {
    expect(combinationSum3(9, 45)).toEqual([[1,2,3,4,5,6,7,8,9]]);
});