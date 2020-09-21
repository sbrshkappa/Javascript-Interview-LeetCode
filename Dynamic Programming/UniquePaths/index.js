/*
Leetcode Problem 62
https://leetcode.com/problems/unique-paths/

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

 

Example 1:


Input: m = 3, n = 7
Output: 28
Example 2:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
Example 3:

Input: m = 7, n = 3
Output: 28
Example 4:

Input: m = 3, n = 3
Output: 6
 

Constraints:

1 <= m, n <= 100
It's guaranteed that the answer will be less than or equal to 2 * 109.
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
    
    let rows = new Array(n).fill(0);
    let numOfWays = new Array(m).fill(rows);
    
    //Fill first row with 1s and first column with 1s
    numOfWays[0].fill(1);
    for(let i = 0 ; i < m ; i++){
        numOfWays[i][0] = 1;
    }
    
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            numOfWays[i][j] = numOfWays[i-1][j] + numOfWays[i][j-1];
        }
    }
    return numOfWays[m-1][n-1];
};

module.exports = uniquePaths;