const champagneTower = require('./index');

it("checks the 1st cup in row 1 when 1 cup is poured on the tower", () => {
    expect(champagneTower(1,1,1,)).toEqual(0.00000);
});

it("checks the 1st cup in row 1 when 2 cups are poured on the tower", () => {
    expect(champagneTower(2,1,1,)).toEqual(0.50000);
});

it("checks the 17th up in row 33 when 100000009 cups are poured on the tower", () => {
    expect(champagneTower(100000009,33,17)).toEqual(1.00000);
});