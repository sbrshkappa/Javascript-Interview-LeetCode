const addTwoNumbers = require('./index');

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let num1 = new ListNode(7, new ListNode(2, new ListNode(4, new ListNode(3, null))));
let num2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));

let sum = new ListNode(7, new ListNode(8, new ListNode(0, new ListNode(7, null))));

test("Test 1", () => {
    expect(addTwoNumbers(num1, num2)).toEqual(sum);
});