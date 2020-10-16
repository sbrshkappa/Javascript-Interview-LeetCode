const minMeetingRooms = require('./index');

test("Test 1", () => {
    expect(minMeetingRooms([[0,30],[5,10],[15,20]])).toEqual(2);
});

test("Test 2", () => {
    expect(minMeetingRooms([[7,10],[2,4]])).toEqual(1);
});