/*

Leetcode Problem 238
https://leetcode.com/problems/product-of-array-except-self/

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    
    let output = new Array(nums.length);
    
    output[0] = 1;
    for(let i = 1; i < nums.length; i++){
        output[i] = nums[i-1] * output[i-1];   
    }
    
    
    let R = 1;
    for(let j = nums.length - 1; j >= 0; j--){
        output[j] = output[j] * R;
        R *= nums[j];
    }
        
    
    return output;
};

module.exports = productExceptSelf;