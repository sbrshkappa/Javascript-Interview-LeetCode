const RecentCounter = require(".");

const recentCounter = require('./index');

let requestCounter = new recentCounter();

test("Test 1", () => {
     expect(requestCounter.ping(1)).toEqual(1);
});

test("Test 2", () => {
    expect(requestCounter.ping(100)).toEqual(2);
});

test("Test 3", () => {
    expect(requestCounter.ping(3000)).toEqual(3);
});

test("Test 4", () => {
    expect(requestCounter.ping(3002)).toEqual(3);
});

