const minPathSum =  require('./index');

test("Test 1", () => {
    expect(minPathSum([[1,3,1],[1,5,1],[4,2,1]])).toEqual(7);
});