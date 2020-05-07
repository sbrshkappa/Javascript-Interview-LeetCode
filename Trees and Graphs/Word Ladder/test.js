const ladderLength = require('./index');

test("Initial Test Case", () =>{
    expect(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"])).toEqual(5);
});

test("Word not in Wordlist", () => {
    expect(ladderLength("hit", "cog",["hot","dot","dog","lot","log"])).toEqual(0);
});