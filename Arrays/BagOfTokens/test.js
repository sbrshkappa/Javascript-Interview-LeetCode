const bagOfTokensScore = require('./index');

it("checks score for a bag with 1 token with value greater than power available and should return 0", () => {
    expect(bagOfTokensScore([100],50)).toEqual(0);
});

it("should return a score of 1 for a bag with [100,200] with power of 150", () => {
    expect(bagOfTokensScore([100,200],150)).toEqual(1);
});

it("should return a score of 2 for a bag with [100,200,300,400] with power of 200", () => {
    expect(bagOfTokensScore([100,200,300,400],200)).toEqual(2);
});