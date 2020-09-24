const threeSum = require('./index');

test('Test 1', () => {
    expect(threeSum([-1,0,1,2,-1,-4])).toEqual([[-1,-1,2],[-1,0,1]]);
});

test('Test 2', () => {
    expect(threeSum([0])).toEqual([]);
});

test('Test 3', () => {
    expect(threeSum([])).toEqual([]);
});
