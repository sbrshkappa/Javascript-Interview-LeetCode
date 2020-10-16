const rotate = require('./index');

test("Test 1", () => {
    expect(rotate([1,2,3,4,5,6,7],3)).toEqual([5,6,7,1,2,3,4]);
});

test("Test 2", () => {
    expect(rotate([-1,-100,3,99],2)).toEqual([3,99,-1,-100]);
});

