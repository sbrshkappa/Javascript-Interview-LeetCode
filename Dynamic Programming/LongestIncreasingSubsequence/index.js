/*

Leetcode Problem 300
https://leetcode.com/problems/longest-increasing-subsequence/

Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function(nums) {
    
    if(nums.length === 0) return 0;
    
    let longestSequenceAtN = new Array(nums.length).fill(1);
    let maxSoFar = 1;
    
    for(let j = 1; j < nums.length; j++){
        for(let i = 0; i < j; i++){
            if(nums[j] > nums[i]){
                longestSequenceAtN[j] = Math.max(longestSequenceAtN[i] + 1, longestSequenceAtN[j]);
            }
        }
        maxSoFar = Math.max(maxSoFar, longestSequenceAtN[j]);
    }
    
    return maxSoFar;
};

module.exports = lengthOfLIS;