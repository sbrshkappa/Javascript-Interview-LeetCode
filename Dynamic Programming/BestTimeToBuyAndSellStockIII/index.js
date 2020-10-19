/*
Leetcode Problem 123
https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

 

Example 1:

Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
Example 4:

Input: prices = [1]
Output: 0
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 105

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    
    let t1Cost = Infinity, t2Cost = Infinity;
    let t1Profit = 0, t2Profit = 0;
    
    for(let i = 0; i < prices.length; i++){
        t1Cost = Math.min(t1Cost, prices[i]);
        t1Profit = Math.max(t1Profit, prices[i] - t1Cost);
        
        t2Cost = Math.min(t2Cost, prices[i] - t1Profit);
        t2Profit = Math.max(t2Profit, prices[i] - t2Cost);
    }
    
    return t2Profit;
};

module.exports = maxProfit;