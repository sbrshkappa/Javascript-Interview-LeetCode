const reverseList = require('./index');

test("Initial Test Case", () => {
    expect(reverseList({val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5, next: null}}}}})).toEqual({val: 5, next: {val: 4, next: {val: 3, next: {val: 2, next: {val: 1, next: null}}}}})
});