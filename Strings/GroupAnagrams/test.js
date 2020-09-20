const { TestScheduler } = require("jest");
const groupAnagrams = require("./index");

test("Basic Test", () => {
    expect(groupAnagrams(["eat","tea","tan","ate","nat","bat"]).length).toEqual([["bat"],["nat","tan"],["ate","eat","tea"]].length);
})