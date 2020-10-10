const findMinArrowShots = require('./index');

test("Test 1", () => {
    expect(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]])).toEqual(2);
});

test("Test 2", () => {
    expect(findMinArrowShots([[1,2],[3,4],[5,6],[7,8]])).toEqual(4);
});

test("Test 3", () => {
    expect(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]])).toEqual(2);
});

test("Test 4", () => {
    expect(findMinArrowShots([[1,2]])).toEqual(1);
});

test("Test 5", () => {
    expect(findMinArrowShots([[2,3],[2,3]])).toEqual(1);
});

test("Test 6", () => {
    expect(findMinArrowShots([])).toEqual(0);
});