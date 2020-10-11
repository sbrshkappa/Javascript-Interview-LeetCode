const dayOfTheWeek = require('./index');

test("Test 1", () => {
    expect(dayOfTheWeek(11,10,2020)).toEqual("Sunday");
});

test("Test 2", () => {
    expect(dayOfTheWeek(31,8,2019)).toEqual("Saturday");
});

test("Test 3", () => {
    expect(dayOfTheWeek(15,8,1993)).toEqual("Sunday");
});