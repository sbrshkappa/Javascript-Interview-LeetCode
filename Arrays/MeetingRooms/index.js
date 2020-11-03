/*
Leetcode Problem 252
https://leetcode.com/problems/meeting-rooms/

Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.

 

Example 1:

Input: intervals = [[0,30],[5,10],[15,20]]
Output: false
Example 2:

Input: intervals = [[7,10],[2,4]]
Output: true
 

Constraints:

0 <= intervals.length <= 104
intervals.length == 2
0 <= starti < endi <= 106
*/

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
const canAttendMeetings = function(intervals) {
    
    if(intervals.length === 1 || intervals.length === 0)
        return true;
    
    intervals.sort((a,b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    
    let prev = intervals[0];
    for(let i = 1; i < intervals.length; i++){
        let current = intervals[i];
        
        if(current[0] < prev[1])
            return false;
        
        prev = current;
    }
    
    return true;
};

module.exports = canAttendMeetings;