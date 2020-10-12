const countAndSay = require('./index');

test("Test 1", () => {
    expect(countAndSay(4)).toEqual("1211");
});

test("Test 2", () => {
    expect(countAndSay(1)).toEqual("1");
});
