const { TestScheduler } = require('jest');
const canJump = require('./index');

test("Test 1", () => {
    expect(canJump([2,3,1,1,4])).toEqual(true);
});

test("Test 2", () => {
    expect(canJump([3,2,1,0,4])).toEqual(false);
});

