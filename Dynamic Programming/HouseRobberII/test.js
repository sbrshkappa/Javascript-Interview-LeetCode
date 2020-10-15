const rob = require('./index');

test("Test 1", () => {
    expect(rob([2,3,2])).toEqual(3);
});

test("Test 2", () => {
    expect(rob([1,2,3,1])).toEqual(4);
});

test("Test 3", () => {
    expect(rob([0])).toEqual(0);
});
