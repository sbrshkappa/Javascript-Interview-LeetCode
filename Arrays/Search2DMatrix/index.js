/*
Leetcode Problem 74
https://leetcode.com/problems/search-a-2d-matrix/

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
 

Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 13
Output: false
Example 3:

Input: matrix = [], target = 0
Output: false
 

Constraints:

m == matrix.length
n == matrix[i].length
0 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
    
    for(let i = 0; i < matrix.length; i++){
        if(target === matrix[i][0] || target === matrix[i][matrix[i].length - 1])
            return true;
        if(target > matrix[i][0] && target < matrix[i][matrix[i].length -1])
            return findElement(matrix[i], target);
    }
    return false;
};

const findElement = (arr, target) => {
    let start = 0, end = arr.length - 1;
    let mid = Math.floor(arr.length / 2);
    
    if(target > arr[mid]) 
        return findElement(arr.slice(mid + 1, end + 1), target);
    else if(target < arr[mid])
        return findElement(arr.slice(start, mid), target);
    else if(target === arr[mid])
        return true;
    
    return false;
}

module.exports = searchMatrix;