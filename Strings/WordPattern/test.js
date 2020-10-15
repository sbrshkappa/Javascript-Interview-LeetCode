const wordPattern = require('./index');

test("Test 1", () => {
    expect(wordPattern("abba","dog cat cat dog")).toEqual(true);
});

test("Test 2", () => {
    expect(wordPattern("abba","dog cat cat fish")).toEqual(false);
});

test("Test 3", () => {
    expect(wordPattern("aaaa","dog cat cat dog")).toEqual(false);
});

test("Test 4", () => {
    expect(wordPattern("abba","dog dog dog dog")).toEqual(false);
});