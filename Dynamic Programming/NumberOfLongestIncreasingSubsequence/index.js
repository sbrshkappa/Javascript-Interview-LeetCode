/*
Leetcode Problem 673
https://leetcode.com/problems/number-of-longest-increasing-subsequence/

Given an integer array nums, return the number of longest increasing subsequences.

 

Example 1:

Input: nums = [1,3,5,4,7]
Output: 2
Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].
Example 2:

Input: nums = [2,2,2,2,2]
Output: 5
Explanation: The length of longest continuous increasing subsequence is 1, and there are 5 subsequences' length is 1, so output 5.

 

Constraints:

0 <= nums.length <= 2000
-106 <= nums[i] <= 106
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumberOfLIS = function(nums) {
    
    let N = nums.length;
    if(N <= 1) return N;
    
    let lengths = new Array(N).fill(0);
    let counts = new Array(N).fill(1);
    
    for(let j = 0; j < N; j++){
        for(let i = 0; i < j; i++){
            if(nums[i] < nums[j]){
                if(lengths[i] >= lengths[j]){
                    lengths[j] = lengths[i] + 1;
                    counts[j] = counts[i];
                } else if(lengths[i] + 1 === lengths[j]){
                    counts[j] += counts[i];
                }
            }
        }
    }
    
    let longest = 0, ans = 0;
    for(let i = 0; i < lengths.length; i++){
        longest = Math.max(longest, lengths[i]);
    }
    for(let i = 0; i < N; i++){
        if(lengths[i] === longest){
            ans += counts[i];
        }
    }
    return ans;
};

module.exports = findNumberOfLIS;