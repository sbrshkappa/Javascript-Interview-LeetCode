const distributeCandies = require('./index');

test('Test 1', () => {
    expect(distributeCandies([1,1,2,2,3,3])).toEqual(3);
});

test('Test 2', () => {
    expect(distributeCandies([1,1,2,3])).toEqual(2);
});

test('Test 3', () => {
    expect(distributeCandies([1,1])).toEqual(1);
});

test('Test 4', () => {
    expect(distributeCandies([1,11])).toEqual(1);
});

test('Test 5', () => {
    expect(distributeCandies([2,2])).toEqual(1);
});

test('Test 6', () => {
    expect(distributeCandies([1,1,2,2,3,3,3,4,2,2,3,1])).toEqual(4);
});
