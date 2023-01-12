/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function addTwoNumbers(l1, l2) {
  const head = new ListNode(0);
  let ptr = head;
  let isExceeded = false;
  while (l1 || l2) {
    const l1val = l1 ? l1.val : 0;
    const l2val = l2 ? l2.val : 0;
    const sum = isExceeded ? l1val + l2val + 1 : l1val + l2val;
    ptr.val = sum % 10;
    isExceeded = sum >= 10;
    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;
    if (!l1 && !l2 && !isExceeded) break;
    ptr.next = new ListNode(1);
    ptr = ptr.next;
  }
  return head;
}

addTwoNumbers([2, 4, 3], [5, 6, 4]);
