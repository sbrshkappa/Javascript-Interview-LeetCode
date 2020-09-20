/*

Leetcode Problem 242
https://leetcode.com/problems/valid-anagram/

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    let dict = {};
    
    if(s.length != t.length)
        return false;
    
    for(let i = 0; i < s.length; i++){
        if(dict[s[i]])
            dict[s[i]]++;
        else
            dict[s[i]] = 1;
        
        if(dict[t[i]])
            dict[t[i]]--;
        else
            dict[t[i]] = -1;
    }
    
    if(Object.values(dict).every( a => a === 0))
        return true;
    else
        return false;
};

module.exports = isAnagram;