const winnerSquareGame = require('./index');

it("should return true for n=1", () => {
    expect(winnerSquareGame(1)).toEqual(true);
});

it("should return false for n=2", () => {
    expect(winnerSquareGame(2)).toEqual(false);
});

it("should return true for n=4", () => {
    expect(winnerSquareGame(4)).toEqual(true);
});

it("should return false for n=7", () => {
    expect(winnerSquareGame(7)).toEqual(false);
});

it("should return false for n=17", () => {
    expect(winnerSquareGame(17)).toEqual(false);
});