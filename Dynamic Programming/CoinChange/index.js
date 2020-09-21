/*
Leetcode Problem 322
https://leetcode.com/problems/coin-change/


You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Note:
You may assume that you have an infinite number of each kind of coin.
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function(coins, amount) {
    
    let allAmountCoins = new Array(amount + 1).fill(Infinity);
    allAmountCoins[0] = 0;
    
    for(let i = 1; i < allAmountCoins.length; i++){
        for(let j = 0; j < coins.length; j++){
            let coinValue = coins[j];
            if(coinValue <= i){
                allAmountCoins[i] = Math.min(allAmountCoins[i-coinValue] + 1, allAmountCoins[i]);
            }
        }
    }
    
    if(allAmountCoins[amount] === Infinity)
        return -1;
    else
        return allAmountCoins[amount];
};

module.exports = coinChange;
