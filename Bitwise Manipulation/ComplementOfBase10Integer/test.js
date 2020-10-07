const { TestScheduler } = require('jest');
const bitwiseOperations = require('./index');

test("Test 1 with String bitwise operations", () => {
    expect(bitwiseOperations.bitwiseComplement_String(5)).toEqual(2);
});

test("Test 2 with String bitwise operations", () => {
    expect(bitwiseOperations.bitwiseComplement_String(9)).toEqual(6);
});

test("Test 1 with bitwise operations", () => {
    expect(bitwiseOperations.bitwiseComplement(5)).toEqual(2);
});

test("Test 2 with bitwise operations", () => {
    expect(bitwiseOperations.bitwiseComplement(9)).toEqual(6);
});