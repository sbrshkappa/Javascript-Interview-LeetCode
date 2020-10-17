/*
Leetcode Problem 187
https://leetcode.com/problems/repeated-dna-sequences/

All DNA is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T', for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

 

Example 1:

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]
Example 2:

Input: s = "AAAAAAAAAAAAA"
Output: ["AAAAAAAAAA"]
 

Constraints:

0 <= s.length <= 105
s[i] is 'A', 'C', 'G', or 'T'.
*/

/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = function(s) {

    if(s.length < 10)
        return [];
    
    let seen = new Set();
    let sequences = new Set();
    
    for(let i = 0; i < s.length - 9; i++){
        let seq = s.slice(i, i+10);
        if(seen.has(seq))
            sequences.add(seq);
        seen.add(seq);
    }
    
    return [...sequences];
};

module.exports = findRepeatedDnaSequences;