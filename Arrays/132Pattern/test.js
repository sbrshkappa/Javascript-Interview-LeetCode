const find132pattern = require('./index');

it("checks if [1,2,3,4] contains a 132 pattern and should return false", () => {
    expect(find132pattern([1,2,3,4])).toEqual(false);
});

it("checks if [3,1,4,2] contains a 132 pattern and should return true", () => {
    expect(find132pattern([3,1,4,2])).toEqual(true);
});

