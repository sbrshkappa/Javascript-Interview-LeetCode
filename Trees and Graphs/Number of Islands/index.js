/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

/*
 * @param {character[][]} grid
 * @return {number}
 */

const DFS = (grid, row, col) => {

    let columnLength = grid.length;
    let rowLength = grid[0].length;

    if(row < 0 || col < 0 || row >= columnLength || col >= rowLength || grid[row][col] == '0')
        return;
    
    grid[row][col] = '0';
    DFS(grid, row+1, col);
    DFS(grid, row, col+1);
    DFS(grid, row-1, col);
    DFS(grid, row, col-1);
}

const numIslands = (grid) => {

    let numOfIslands = 0;

    if(grid === null || grid.length === 0)
        return 0;

    let columnLength = grid.length;
    let rowLength = grid[0].length;

    for(let i = 0; i < columnLength; i++ )
        for(let j = 0; j < rowLength; j++){
            if(grid[i][j] === '1'){
                numOfIslands++;
                DFS(grid, i , j);
            }
        }
    return numOfIslands;
};

module.exports = numIslands;