const { TestScheduler } = require('jest');
const isValidParantheses = require('./index');

test("Test1", () => {
    expect(isValidParantheses('()')).toEqual(true);
});

test("Test2", () => {
    expect(isValidParantheses('(){}[]')).toEqual(true);
});

test("Test3", () => {
    expect(isValidParantheses('((())([{}]))')).toEqual(true);
});

test("Test4", () => {
    expect(isValidParantheses('([})')).toEqual(false);
});