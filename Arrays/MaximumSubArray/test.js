const maxSubArray = require('./index');

test('Test 1', () => {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
});

test('Test 2', () => {
    expect(maxSubArray([1])).toEqual(1);
});

test('Test 3', () => {
    expect(maxSubArray([0])).toEqual(0);
});

test('Test 4', () => {
    expect(maxSubArray([-1])).toEqual(-1);
});


