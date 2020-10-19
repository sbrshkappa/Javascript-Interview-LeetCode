const minDominoRotations = require('./index');

test("Test 1", () => {
    expect(minDominoRotations([2,1,2,4,2,2],[5,2,6,2,3,2])).toEqual(2);
});

test("Test 2", () => {
    expect(minDominoRotations([3,5,1,2,3],[3,6,3,3,4])).toEqual(-1);
});