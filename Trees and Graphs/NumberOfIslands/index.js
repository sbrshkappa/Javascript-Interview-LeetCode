/*
Leetcode Problem 200
https://leetcode.com/problems/number-of-islands/

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

/** 
* @param {character[][]} grid
* @return {number}
*/

const numIslands = function(grid) {
   
   let numOfIslands = 0;
   
   for(let row = 0; row < grid.length; row++){
       for(let col = 0; col < grid[0].length; col++){
           if(grid[row][col] === "1"){
               numOfIslands++;
               dfs(grid, row, col);
           }
       }
   }
   
   return numOfIslands;
};

const dfs = (grid, row, col) => {
       if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === "0") {
           return;
       }
       grid[row][col] = "0";
       dfs(grid, row-1, col);
       dfs(grid, row+1, col);
       dfs(grid, row, col-1);
       dfs(grid, row, col+1);
};


module.exports = numIslands;