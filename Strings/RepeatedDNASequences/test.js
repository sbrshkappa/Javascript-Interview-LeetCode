const findRepeatedDnaSequences = require('./index');

test("Test 1", () => {
    expect(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
    )).toEqual(["AAAAACCCCC","CCCCCAAAAA"]);
});

test("Test 2", () => {
    expect(findRepeatedDnaSequences("AAAAAAAAAAAAA"
    )).toEqual(["AAAAAAAAAA"]);
});

