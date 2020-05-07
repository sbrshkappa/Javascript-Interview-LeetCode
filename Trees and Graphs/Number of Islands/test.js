const numIslands = require('./index');

test("Initial Test Case", () => {
    expect(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]])).toEqual(1);
});

test("Second one with 3 islands", () => {
    expect(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]])).toEqual(3);
});