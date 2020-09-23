const productExceptSelf = require('./index');

test('Test 1', () => {
    expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6]);
});