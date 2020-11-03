const canAttendMeetings = require('./index');

it("returns false for the schedule", () => {
    expect(canAttendMeetings([[0,30],[5,10],[15,20]])).toEqual(false);
});

it("returns true for the schedule", () => {
    expect(canAttendMeetings([[7,10],[2,4]])).toEqual(true);
});