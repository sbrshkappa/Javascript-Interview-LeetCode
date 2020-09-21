const uniquePaths = require("./index");

test('Test 1',() => {
    expect(uniquePaths(3,7)).toEqual(28);
});