const coinChange = require('./index');

test('Test 1', () => {
    expect(coinChange([1, 2, 5],11)).toEqual(3);
});

test('Failing Test', () => {
    expect(coinChange([2],3)).toEqual(-1);
});