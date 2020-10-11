/*
Leetcode problems 316
https://leetcode.com/problems/remove-duplicate-letters/

Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

 

Example 1:

Input: s = "bcabc"
Output: "abc"
Example 2:

Input: s = "cbacdcbc"
Output: "acdb"
 

Constraints:

1 <= s.length <= 104
s consists of lowercase English letters.
*/

/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = function(s) {
    let stack = [];
    let lastOccurence = new Map();
    let seenMap = new Map();
    
    for(let i = 0; i < s. length; i++){
        lastOccurence.set(s[i], i);
    }
    
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        if(!seenMap.has(char)){
            while(stack.length && char < stack[stack.length - 1] && lastOccurence.get(stack[stack.length -1]) > i){
                seenMap.delete(stack.pop());
            }
            seenMap.set(char);
            stack.push(char);
        }
    }
    
    return stack.join("");
};

module.exports = removeDuplicateLetters;