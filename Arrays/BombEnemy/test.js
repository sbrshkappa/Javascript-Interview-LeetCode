const maxEnemiesKilled = require('./index');

test("Test 1", () => {
    expect(maxEnemiesKilled([["0","E","0","0"],["E","0","W","E"],["0","E","0","0"]])).toEqual(3);
});