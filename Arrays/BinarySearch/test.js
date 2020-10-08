const search = require('./index');

test("Truthy 1", () => {
    expect(search([-1,0,3,5,9,12],9)).toEqual(4);
});

test("Falsy 1", () => {
    expect(search([-1,0,3,5,9,12],2)).toEqual(-1);
});