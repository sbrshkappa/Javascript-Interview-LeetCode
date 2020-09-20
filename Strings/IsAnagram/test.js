const isAnagram = require("./index");

test("Basic Test", () => {
    expect(isAnagram("anagram", "granaam")).toEqual(true);
});