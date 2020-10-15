const updateMatrix = require('./index');

test("Test 1", () => {
    expect(updateMatrix([[0,0,0],[0,1,0],[0,0,0]])).toEqual([[0,0,0],[0,1,0],[0,0,0]]);
});

test("Test 2", () => {
    expect(updateMatrix([[0,0,0],[0,1,0],[1,1,1]])).toEqual([[0,0,0],[0,1,0],[1,2,1]]);
});

