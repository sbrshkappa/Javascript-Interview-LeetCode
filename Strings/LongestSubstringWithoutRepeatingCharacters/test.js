const lengthOfLongestSubstring = require("./index");

test("Checking in string: abcabcbb", () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
});

test("Checking for string: bbbbbb", () => {
  expect(lengthOfLongestSubstring("bbbbbb")).toEqual(1);
});

test("Checking for string: pwwkew", () => {
  expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
});

test("Testing with empty string", () => {
  expect(lengthOfLongestSubstring("")).toEqual(0);
});
