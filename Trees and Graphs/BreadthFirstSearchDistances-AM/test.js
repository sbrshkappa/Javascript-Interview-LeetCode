const BFSDistance = require('./index');

test("Initial Test Case", () => {
    expect(BFSDistance([
        [0,1,1,1,0],
        [0,0,1,0,0],
        [1,1,0,0,0],
        [0,0,0,1,0],
        [0,1,0,0,0]
    ], 1)).toEqual({0: 2, 1: 0, 2: 1, 3: 3, 4: Infinity  })
});