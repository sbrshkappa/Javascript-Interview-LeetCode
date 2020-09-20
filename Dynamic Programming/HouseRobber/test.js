const rob = require('./index');

test("Test1", () => {
    expect(rob([1,2,3,1])).toEqual(4);
});

test("Test2", () => {
    expect(rob([2,7,9,3,1])).toEqual(12);
})