/*
Leetcode Problem 20
https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


*/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValidParantheses = function(s) {
    let stack = [];
    const pairsMap = { '(':')', '[':']', '{':'}'};
    
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        if(pairsMap[char])
            stack.push(char);
        else if(pairsMap[stack.pop()] !== char)
            return false;
    }
    
    return stack.length === 0;
};


module.exports = isValidParantheses;