/*

Leetcode Problem 15
https://leetcode.com/problems/3sum/

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort( (a,b) => {return a-b;});
    
    let results = [];
    let visited = [];
    
    for(let i = 0; i < nums.length - 2; i++){
        if(visited.includes(nums[i]))  
            continue;
        else
            visited.push(nums[i]);
        let low = i+1, high = nums.length - 1;
        while(low < high){
            if(nums[i] + nums[low] + nums[high] === 0){
                results.push([nums[i], nums[low], nums[high]]);
                low++;
                high--;
                while(low < high && nums[low] === nums[low - 1])
                    ++low;
            }else if(nums[i] + nums[low] + nums[high] > 0)
                high--;
            else if(nums[i] + nums[low] + nums[high] < 0)
                low++;
        }
    }
    return results;
};

module.exports = threeSum;