const containsDuplicate = require('./index');

test('Test 1', () => {
    expect(containsDuplicate([1,2,3,1])).toEqual(true);
});

test('Test 2', () => {
    expect(containsDuplicate([1,2,3,4])).toEqual(false);
});

test('Test 3', () => {
    expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toEqual(true);
});


