const { TestScheduler } = require('jest');
const removeCoveredIntervals = require('./index');

test('Test 1', () => {
    expect(removeCoveredIntervals([[1,4],[3,6],[2,8]])).toEqual(2);
});

test('Test 2', () => {
    expect(removeCoveredIntervals([[1,4],[2,3]])).toEqual(1);
});

test('Test 3', () => {
    expect(removeCoveredIntervals([[0,10],[5,12]])).toEqual(2);
});

test('Test 4', () => {
    expect(removeCoveredIntervals([[3,10],[4,10],[5,11]])).toEqual(2);
});

test('Test 5', () => {
    expect(removeCoveredIntervals([[1,2],[1,4],[3,4]])).toEqual(1);
});


