const searchMatrix = require('./index');

test("Test 1", () => {
    expect(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 3)).toEqual(true);
});

test("Test 2", () => {
    expect(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 13)).toEqual(false);
});