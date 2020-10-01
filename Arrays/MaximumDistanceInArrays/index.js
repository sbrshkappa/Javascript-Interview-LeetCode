/*
Leetcode Problem 634
https://leetcode.com/problems/maximum-distance-in-arrays/

Given m arrays, and each array is sorted in ascending order. Now you can pick up two integers from two different arrays (each array picks one) and calculate the distance. We define the distance between two integers a and b to be their absolute difference |a-b|. Your task is to find the maximum distance.

Example 1:
Input: 
[[1,2,3],
 [4,5],
 [1,2,3]]
Output: 4
Explanation: 
One way to reach the maximum distance 4 is to pick 1 in the first or third array and pick 5 in the second array.
Note:
Each given array will have at least 1 number. There will be at least two non-empty arrays.
The total number of the integers in all the m arrays will be in the range of [2, 10000].
The integers in the m arrays will be in the range of [-10000, 10000].
*/

/**
 * @param {number[][]} arrays
 * @return {number}
 */
const maxDistance = function(arrays) {
    let numberOfArrays = arrays.length;
    
    let minValue = arrays[0][0];
    let maxValue = arrays[0][arrays[0].length -1];
    let maximumDistance = 0;
    
    for(let i = 1; i < numberOfArrays; i++){
        let length = arrays[i].length;
        maximumDistance = Math.max(maximumDistance, Math.max(arrays[i][length-1] - minValue, maxValue - arrays[i][0]))
        minValue = Math.min(minValue, arrays[i][0]);
        maxValue= Math.max(maxValue, arrays[i][length-1]);
    }
    
    return maximumDistance;
};

module.exports = maxDistance;