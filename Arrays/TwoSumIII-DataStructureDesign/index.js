/*
Leetcode Problem 170
https://leetcode.com/problems/two-sum-iii-data-structure-design/

Design a data structure that accepts integers of a stream, and checks if it has a pair of integers that sum up to a particular value. 

Implement a TwoSum class:

TwoSum() Initializes the TwoSum object, with an empty array initially.
void add(int number) Adds number to the data structure.
boolean find(int value) Returns true if there exists any pair of numbers whose sum is equal to value, otherwise, it returns false.
 

Example 1:

Input
["TwoSum", "add", "add", "add", "find", "find"]
[[], [1], [3], [5], [4], [7]]
Output
[null, null, null, null, true, false]

Explanation
TwoSum twoSum = new TwoSum();
twoSum.add(1);   // [] --> [1]
twoSum.add(3);   // [1] --> [1,3]
twoSum.add(5);   // [1,3] --> [1,3,5]
twoSum.find(4);  // 1 + 3 = 4, return True
twoSum.find(7);  // No two integers sum up to 7, return False
 

Constraints:

-105 <= number <= 105
-231 <= value <= 231 - 1
At most 5 * 104 calls will be made to add and find.
*/


/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
    this.array = [];
    this.isSorted = false;
};

/**
 * Add the number to an internal data structure.. 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    this.array.push(number);
    this.isSorted = false;
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value. 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    if(!this.isSorted){
        this.array.sort((a,b) => a - b);
        this.isSorted = true;
    }
    
    let left = 0;
    let right = this.array.length - 1;
    
    while(left < right){
        let sum = this.array[left] + this.array[right];
        if(sum < value){
            left += 1;
        } else if(sum > value) {
            right -= 1; 
        } else if(sum === value){
            return true;
        }
    }
    return false;
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

 module.exports = TwoSum;