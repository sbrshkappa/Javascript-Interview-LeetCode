const { TestScheduler } = require('jest');
const climbStairs = require('./index');

test('Test1', () => {
    expect(climbStairs(10)).toEqual(89);
});

test('Test2', () => {
    expect(climbStairs(45)).toEqual(1836311903);
});