/*
Leetcode Problem 56
https://leetcode.com/problems/merge-intervals/

Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

 

Constraints:

intervals[i][0] <= intervals[i][1]
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]));

  let mergedStack = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i];

    if (
      !mergedStack.length ||
      mergedStack[mergedStack.length - 1][1] >= interval[0]
    ) {
      let replace = mergedStack.pop();
      mergedStack.push([
        Math.min(interval[0], replace[0]),
        Math.max(interval[1], replace[1]),
      ]);
    } else {
      mergedStack.push(interval);
    }
  }

  return mergedStack;
};

module.exports = merge;
