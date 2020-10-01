const maxDistance = require('./index');

test("Test 1", () => {
    expect(maxDistance([[1,2,3],[4,5],[1,2,3]])).toEqual(4);
});

test("Test 2", () => {
    expect(maxDistance([[1,3],[0,5]])).toEqual(4);
});

