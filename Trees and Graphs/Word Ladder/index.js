/*
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list.
Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
*/

/*
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */


const ladderLength = (beginWord, endWord, wordList) => {

    const length = beginWord.length;
    let intermediateWordDict = {};

    if(!wordList.includes(endWord)) return 0;

    //Creating Dictionary to store common intermediate states
    wordList.forEach(word => {
        for(let i = 0; i < length; i++){
            let intermediateWord = word.substring(0,i) + '*' + word.substring(i+1, length)
            if(intermediateWordDict[intermediateWord]){
                intermediateWordDict[intermediateWord].push(word);
            } else {
                intermediateWordDict[intermediateWord] = [word];
            }
        }
    });

    let visitedWord = [];

    let queue = [];
    queue.push([beginWord,1]);
    visitedWord.push(beginWord);

    while(queue.length){
        let currentWord = queue.shift();
        let currentTransformations = [];

        for(let j = 0; j < length; j++){
            let transformation = currentWord[0].substring(0,j) + '*' + currentWord[0].substring(j+1,length);
            if(intermediateWordDict[transformation]){
                for(let i = 0; i < intermediateWordDict[transformation].length; i++){
                    if(intermediateWordDict[transformation][i] === endWord){
                        return currentWord[1]+1;
                    }
                    if(!visitedWord.includes(intermediateWordDict[transformation][i])){
                        queue.push([intermediateWordDict[transformation][i], currentWord[1]+1]);
                        visitedWord.push(intermediateWordDict[transformation][i]);
                    }
                }
            }
        }

    }

    return 0;
};

module.exports = ladderLength;