const removeDuplicateLetters = require('./index');

test("Test 1", () => {
    expect(removeDuplicateLetters("bcabc")).toEqual("abc");
});

test("Test 2", () => {
    expect(removeDuplicateLetters("cbacdcbc")).toEqual("acdb");
});