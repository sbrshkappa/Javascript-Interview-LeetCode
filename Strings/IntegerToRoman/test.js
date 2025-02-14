const intToRoman = require("./index");

test("Test 1", () => {
  expect(intToRoman(1000)).toEqual("M");
});

test("Test 2", () => {
  expect(intToRoman(58)).toEqual("LVIII");
});

test("Test 3", () => {
  expect(intToRoman(1994)).toEqual("MCMXCIV");
});

test("Test 4", () => {
  expect(intToRoman(3999)).toEqual("MMMCMXCIX");
});

test("Test 5", () => {
  expect(intToRoman(1)).toEqual("I");
});

test("Test 6", () => {
  expect(intToRoman(5)).toEqual("V");
});

test("Test 7", () => {
  expect(intToRoman(10)).toEqual("X");
});

test("Test 8", () => {
  expect(intToRoman(50)).toEqual("L");
});

test("Test 9", () => {
  expect(intToRoman(100)).toEqual("C");
});

test("Test 10", () => {
  expect(intToRoman(500)).toEqual("D");
});

test("Test 11", () => {
  expect(intToRoman(1000)).toEqual("M");
});

test("Test 12", () => {
  expect(intToRoman(3999)).toEqual("MMMCMXCIX");
});
