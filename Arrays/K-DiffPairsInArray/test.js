const findPairs = require('./index');

test('Test 1', () => {
    expect(findPairs([3,1,4,1,5],2)).toEqual(2);
});

test('Test 2', () => {
    expect(findPairs([1,2,3,4,5],1)).toEqual(4);
});

test('Test 3', () => {
    expect(findPairs([1,3,1,5,4],0)).toEqual(1);
});

test('Test 4', () => {
    expect(findPairs([1,2,4,4,3,3,0,9,2,3],3)).toEqual(2);
});

test('Test 5', () => {
    expect(findPairs([-1,-2,-3],1)).toEqual(2);
});