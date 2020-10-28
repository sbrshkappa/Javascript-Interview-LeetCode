const summaryRanges = require('./index');

it("returns the summary ranges for a given set of integers", () => {
    expect(summaryRanges([0,1,2,4,5,7])).toEqual(["0->2","4->5","7"]);
});

it("returns the summary for a given set with individual strings in between", () => {
    expect(summaryRanges([0,2,3,4,6,8,9])).toEqual(["0","2->4","6","8->9"]);
});

it("returns an empty array for an empty array input", () => {
    expect(summaryRanges([])).toEqual([]);
});

it("returns the single element if there is only 1 element", () => {
    expect(summaryRanges([-1])).toEqual(["-1"]);
    expect(summaryRanges([0])).toEqual(["0"]);
});

