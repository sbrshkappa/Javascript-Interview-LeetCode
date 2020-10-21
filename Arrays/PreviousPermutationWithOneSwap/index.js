/*
Leetcode Problem 1053
https://leetcode.com/problems/previous-permutation-with-one-swap/

Given an array A of positive integers (not necessarily distinct), return the lexicographically largest permutation that is smaller than A, that can be made with one swap (A swap exchanges the positions of two numbers A[i] and A[j]).  If it cannot be done, then return the same array.

 

Example 1:

Input: [3,2,1]
Output: [3,1,2]
Explanation: Swapping 2 and 1.
Example 2:

Input: [1,1,5]
Output: [1,1,5]
Explanation: This is already the smallest permutation.
Example 3:

Input: [1,9,4,6,7]
Output: [1,7,4,6,9]
Explanation: Swapping 9 and 7.
Example 4:

Input: [3,1,1,3]
Output: [1,3,1,3]
Explanation: Swapping 1 and 3.
 

Note:

1 <= A.length <= 10000
1 <= A[i] <= 10000
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
const prevPermOpt1 = function (A) {
  let pos1 = -1;
  let pos2 = -1;
  let first = 0;
  let second = 0;

  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] < A[i - 1]) {
      first = A[i - 1];
      pos1 = i - 1;
      break;
    }
  }

  for (let i = pos1 + 1; i < A.length; i++) {
    if (A[i] > second && A[i] < first) {
      second = A[i];
      pos2 = i;
    }
  }

  if (first !== 0) {
    A[pos1] = second;
    A[pos2] = first;
  }

  return A;
};

module.exports = prevPermOpt1;
