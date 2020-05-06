let reverseKGroups = require('./index');

test("Initial Test Case", () => {
    expect(reverseKGroups({val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 5, next: null}}}}}, 2)).toEqual({val: 2, next: {val: 1, next: {val: 4, next: {val: 3, next: {val: 5, next: null}}}}})
});