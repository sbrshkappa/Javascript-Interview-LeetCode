const buddyStrings = require('./index');

test("Truthy 1", () => {
    expect(buddyStrings("ab","ba")).toEqual(true);
});

test("Falsy 1", () => {
    expect(buddyStrings("ab","ab")).toEqual(false);
});

test("Truthy 2", () => {
    expect(buddyStrings("aa","aa")).toEqual(true);
});

test("Truthy 3", () => {
    expect(buddyStrings("aaaaaaabc","aaaaaaacb")).toEqual(true);
});

test("Falsy 2", () => {
    expect(buddyStrings("","aa")).toEqual(false);
});