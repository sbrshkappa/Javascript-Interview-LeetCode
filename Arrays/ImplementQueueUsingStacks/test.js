const MyQueue = require('./index');

 
let obj = new MyQueue()
 
test("Push first element into Queue", () => {
   obj.push(1);
   expect(obj.stack.length).toEqual(1);
});

test("Push second element into Queue", () => {
    obj.push(2);
    expect(obj.stack.length).toEqual(2);
});

test("Push third element into Queue", () => {
    obj.push(3);
    expect(obj.stack.length).toEqual(3);
});

test("Pop from Queue", () => {
    expect(obj.pop()).toEqual(1);
});

test("Peek the Queue", () => {
    expect(obj.peek()).toEqual(2);
});

test("Is Queue Empty?", () => {
    expect(obj.empty()).toEqual(false);
});
 