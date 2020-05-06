/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let n = s.length;
  let hashSet = new Set([]);

  if (s.length == 0) return 0;
  let ans = 0,
    i = 0,
    j = 0;

  while (i < n && j < n) {
    if (!hashSet.has(s.charAt(j))) {
      hashSet.add(s.charAt(j++));
      ans = Math.max(ans, j - i);
    } else {
      hashSet.delete(s.charAt(i++));
    }
  }

  return ans;
};

module.exports = lengthOfLongestSubstring;
