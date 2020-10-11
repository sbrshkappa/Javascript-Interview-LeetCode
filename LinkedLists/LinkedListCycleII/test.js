const detectCycle = require('./index');

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let node4 = new ListNode(-4);
let node3 = new ListNode(0);
let node2 = new ListNode(2);
let head = new ListNode(3);

head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

expect.extend({
    toEqualNode(recieved, argument){
        if(recieved.val === argument.val && recieved.next === argument.next){
            return {
                pass: true,
                message: () => `The nodes are equal.`,
            }
        } else {
            return {
                pass: false,
                message: () => `Your test has failed and the nodes are not equal.`
            }
        }
    }
})

test("Test 1", () => {
    expect(detectCycle(head)).toEqualNode(node2);
});