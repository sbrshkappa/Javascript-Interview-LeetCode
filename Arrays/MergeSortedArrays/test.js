const mergeSortedArrays = require("./index");

test("Simple Test Case", () => {
    let nums1 = [1,2,3,0,0,0];
    let nums2 = [2,5,6];
    let answer = [1,2,2,3,5,6];
    mergeSortedArrays(nums1,3,nums2,3);
    expect(nums1).toEqual(answer.sort());
});