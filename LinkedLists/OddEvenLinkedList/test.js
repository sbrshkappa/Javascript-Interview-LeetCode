const oddEvenList = require('./index');

function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
}

expect.extend ({
    toMatchAllNodes(recieved, argument){
        let l1 = recieved, l2 = argument;
        while(l1 && l2){
            if(l1.val !== l2.val)
                return {
                    pass: false,
                    message: () => `The list doesn't match the expected list`,
                }
            else
                {
                    l1 = l1.next;
                    l2 = l2.next;
                }
                
        }
        return {
            pass: true,
            message: () => `You've got the correct result! Congratulations!`
        }
    }
});

let head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5,null)))));
let result1 = new ListNode(1, new ListNode(3, new ListNode(5, new ListNode(2, new ListNode(4,null)))));

let head2 = new ListNode(2, new ListNode(1, new ListNode(3, new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(7,null)))))));
let result2 = new ListNode(2, new ListNode(3, new ListNode(6, new ListNode(7, new ListNode(1, new ListNode(5, new ListNode(4,null)))))))


test("Test 1", () => {
    expect(oddEvenList(head1)).toMatchAllNodes(result1);
});

test("Test 2", () => {
    expect(oddEvenList(head2)).toMatchAllNodes(result2);
});

