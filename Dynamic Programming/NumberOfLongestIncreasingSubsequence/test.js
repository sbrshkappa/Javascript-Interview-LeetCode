const findNumberOfILS = require('./index');

it("returns 2 for number of increasing sequences in [1,3,5,4,7]", () => {
    expect(findNumberOfILS([1,3,5,4,7])).toEqual(2);
});

it("returns 5 for number of increasing sequences in [2,2,2,2,2]", () => {
    expect(findNumberOfILS([2,2,2,2,2])).toEqual(5);
});