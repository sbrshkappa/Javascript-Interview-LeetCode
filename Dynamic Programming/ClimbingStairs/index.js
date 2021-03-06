/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 

Constraints:

1 <= n <= 45
*/

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
    
    let numWays = [];
    
    numWays[0] = 0;
    numWays[1] = 1;
    numWays[2] = 2;
    
    for(let i = 3; i <= n; i++){
        numWays[i] = numWays[i-1] + numWays[i-2];
    }
    
    return numWays[n];
    
};

module.exports = climbStairs;