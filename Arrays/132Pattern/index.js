/*
Leetcode Problem 456
https://leetcode.com/problems/132-pattern/

Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].

Return true if there is a 132 pattern in nums, otherwise, return false.

Follow up: The O(n^2) is trivial, could you come up with the O(n logn) or the O(n) solution?

 

Example 1:

Input: nums = [1,2,3,4]
Output: false
Explanation: There is no 132 pattern in the sequence.
Example 2:

Input: nums = [3,1,4,2]
Output: true
Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
Example 3:

Input: nums = [-1,3,2,0]
Output: true
Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].
 

Constraints:

n == nums.length
1 <= n <= 104
-109 <= nums[i] <= 109
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const find132pattern = function(nums) {
    
    if(nums.length < 3)
        return false;
    
    let min = new Array(nums.length);
    let stack = [];
    
    min[0] = nums[0];
    for(let i = 1; i < nums.length; i++){
         min[i] = Math.min(min[i-1], nums[i]);
    }
    
    for(let k = nums.length - 1; k >= 0; k--){ 
        if(nums[k] > min[k]){
            while(stack.length && stack[stack.length - 1] <= min[k]){
                stack.pop();
            } 
            if(stack.length && stack[stack.length - 1] < nums[k]){
                return true;
            }
            stack.push(nums[k]);
        }
    }
    
    return false;
};

module.exports = find132pattern;