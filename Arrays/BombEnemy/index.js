/*
Leetcode Problem 361
https://leetcode.com/problems/bomb-enemy/

Given a 2D grid, each cell is either a wall 'W', an enemy 'E' or empty '0' (the number zero), return the maximum enemies you can kill using one bomb.
The bomb kills all the enemies in the same row and column from the planted point until it hits the wall since the wall is too strong to be destroyed.
Note: You can only put the bomb at an empty cell.

Example:

Input: [["0","E","0","0"],["E","0","W","E"],["0","E","0","0"]]
Output: 3 
Explanation: For the given grid,

0 E 0 0 
E 0 W E 
0 E 0 0

Placing a bomb at (1,1) kills 3 enemies.
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
const maxKilledEnemies = function(grid) {
    
    if(grid.length === 0) return 0;
    
    let maxEnemies = 0;
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] !== '0') continue;
            let max = findEnemiesInRow(grid, i, j);
            max += findEnemiesInCol(grid, i, j);
            maxEnemies = Math.max(max, maxEnemies); 
        }
    }
    return maxEnemies;
};

const findEnemiesInRow = (grid, row, col) => {
    let numberOfEnemies = 0;
    
    for(let i = col+1; i < grid[row].length; i++){
        if(grid[row][i] === 'E') numberOfEnemies++;
        if(grid[row][i] === 'W') break;
    }
    
    for(let j = col-1; j >= 0; j--){
        if(grid[row][j] === 'E') numberOfEnemies++;
        if(grid[row][j] === 'W') break;
    }
    
    return numberOfEnemies;
}

const findEnemiesInCol = (grid, row, col) => {
    let numberOfEnemies = 0;
    
    for(let i = row-1; i >=0; i--){
        if(grid[i][col] === 'E') numberOfEnemies++;
        if(grid[i][col] === 'W') break;
    }
    
    for(let j = row+1; j < grid.length; j++){
        if(grid[j][col] === 'E') numberOfEnemies++;
        if(grid[j][col] === 'W') break;
    }
    return numberOfEnemies;
}

module.exports = maxKilledEnemies;