/*
Leetcode Problem 253
https://leetcode.com/problems/meeting-rooms-ii/

Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = function(intervals) {
    
    if(intervals.length === 0)
        return 0;
    
    //Sort Meetings
    intervals.sort((a,b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    
    //Iterate through meetings and check start of one meeting and the end of the next
    let meetingEndingOrder = [intervals[0][1]]
    
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] >= meetingEndingOrder[meetingEndingOrder.length - 1]){
            meetingEndingOrder.pop();
        }
        addTime(intervals[i][1]);
    }
    
    
    function addTime(time){
        meetingEndingOrder.push(time);
        meetingEndingOrder.sort((a,b) => b - a);
    }
    
    return meetingEndingOrder.length; 
};

module.exports = minMeetingRooms;