const maxProfit = require('./index');

test("Test 1", () => {
    expect(maxProfit([3,3,5,0,0,3,1,4])).toEqual(6);
});

test("Test 2", () => {
    expect(maxProfit([1,2,3,4,5])).toEqual(4);
});

test("Test 3", () => {
    expect(maxProfit([7,6,4,3,1])).toEqual(0);
});

test("Test 4", () => {
    expect(maxProfit([1])).toEqual(0);
});