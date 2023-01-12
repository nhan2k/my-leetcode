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

var deleteDuplicates = function (head) {
  //empty list
  if (head == null) return null;

  let curr = head;
  while (curr.next != null) {
    if (curr.val == curr.next.val) {
      let next_next = curr.next.next;
      let nodeToDelete = curr.next;
      delete nodeToDelete;
      curr.next = next_next;
    } //not equal
    else {
      curr = curr.next;
    }
  }
  return head;
};

console.log(deleteDuplicates([1, 1, 2]));
