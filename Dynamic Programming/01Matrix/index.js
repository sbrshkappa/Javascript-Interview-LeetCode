/*
Leetcode Problem 542
https://leetcode.com/problems/01-matrix/

Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

 

Example 1:

Input:
[[0,0,0],
 [0,1,0],
 [0,0,0]]

Output:
[[0,0,0],
 [0,1,0],
 [0,0,0]]
Example 2:

Input:
[[0,0,0],
 [0,1,0],
 [1,1,1]]

Output:
[[0,0,0],
 [0,1,0],
 [1,2,1]]
 

Note:

The number of elements of the given matrix will not exceed 10,000.
There are at least one 0 in the given matrix.
The cells are adjacent in only four directions: up, down, left and right.
*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const updateMatrix = function(matrix) {
    
    let distances = new Array(matrix.length);
    for(let i = 0; i < distances.length; i++){
        distances[i] = new Array(matrix[i].length).fill(Infinity);
    }
    
    let m = matrix.length;
    let n = matrix[0].length;
    
    //left and top iteration
    for(let i = 0 ; i < m; i++){
        for(let j = 0; j < n; j++){
            if(matrix[i][j] === 0) {
                distances[i][j] = 0;
            } else {
                if(i > 0)
                    distances[i][j] = Math.min(distances[i-1][j] + 1, distances[i][j]);
                if(j > 0)
                    distances[i][j] = Math.min(distances[i][j-1] + 1, distances[i][j]);
            }
        }
    }
    
    //bottom and right iteration
    for(let i = m - 1; i >= 0; i--){
        for(let j = n - 1; j >= 0; j--){
            if(matrix[i][j] === 0){
                distances[i][j] = 0;
            } else {
                if(i < m - 1)
                    distances[i][j] = Math.min(distances[i+1][j] + 1, distances[i][j]);
                if(j < n -1)
                    distances[i][j] = Math.min(distances[i][j+1] + 1, distances[i][j]);
            }
        }
    }
    
    
    return distances;
};

module.exports = updateMatrix;