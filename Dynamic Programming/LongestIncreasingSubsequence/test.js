const lengthOfLIS = require('./index');

test('Test 1', () => {
    expect(lengthOfLIS([10,9,2,5,3,7,101,18])).toEqual(4);
});