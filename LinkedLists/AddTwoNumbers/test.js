const addTwoNumbers = require("./AddTwoNumbers");

test("simple test case", () => {
    const list1 = {val: 2, next: { val: 4, next: { val: 3, next: null } } };
    const list2 = {val: 5, next: { val: 6, next: { val: 4, next: null } } };
    const result = {val: 7, next: { val: 0, next: { val: 8, next: null } } };

    expect(addTwoNumbers(list1, list2)).toEqual(result);
})