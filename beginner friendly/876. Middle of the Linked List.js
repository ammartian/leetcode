/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let middle = head;
    let end = head;

    while (end != null && end.next != null) {
        middle = middle.next;
        end = end.next.next;
    }
    return middle;
};

// Time complexity = O(n) bcs we must traverse atleast n/2 node
// Space complexity = O(1) bcs every input of n, we use only 2 pointers to traverse our list