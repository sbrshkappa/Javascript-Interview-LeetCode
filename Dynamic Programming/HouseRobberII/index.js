/*
Leetcode Problem 213
https://leetcode.com/problems/house-robber-ii/

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
Example 2:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 3:

Input: nums = [0]
Output: 0
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 1000

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

const robHelper = (nums) => {
    
    if(nums.length === 0)
        return 0;
    if(nums.length === 1)
        return nums[0];
    if(nums.length === 2)
        return Math.max(nums[0],nums[1]);
    
    let maxLootAtN = [nums[0], Math.max(nums[0],nums[1])];
    
    for(let i = 2; i < nums.length; i++){
        maxLootAtN[i] = Math.max(maxLootAtN[i-2] + nums[i], maxLootAtN[i-1]);
    }
    
    return maxLootAtN.pop();
};

const rob = function(nums) {
    
    if(nums.length === 0)
        return 0;
    if(nums.length === 1)
        return nums[0];
    if(nums.length === 2)
        return Math.max(nums[0],nums[1]);
    
    return Math.max(robHelper(nums.slice(0,nums.length-1)),robHelper(nums.slice(1,nums.length)));
    
};

module.exports = rob;