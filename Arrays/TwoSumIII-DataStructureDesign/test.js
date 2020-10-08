const TwoSum = require('./index');

let obj = new TwoSum();
obj.add(1);
obj.add(3);
obj.add(5);
obj.add(4);
obj.add(7);

test("Test Truthy", () => {
    expect(obj.find(4)).toEqual(true);
});

test("Test Falsy", () => {
    expect(obj.find(13)).toEqual(false);
});