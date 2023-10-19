/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
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
var addTwoNumbers = function (l1, l2) {
  let k1, k2;
  k1 = l1;
  k2 = l2;
  let current = 0;

  let newHeade = new ListNode(-1);
  let p = newHeade;

  while (k1 || k2) {
    let val1 = k1?.val || 0,
      val2 = k2?.val || 0;

    let sum = val1 + val2 + current;

    current = ~~(sum / 10);
    const item = sum % 10;

    p.next = new ListNode(item);
    p = p.next;
    k1 = k1?.next;
    k2 = k2?.next;
  }
  if (current) {
    p.next = new ListNode(current);
  }

  return newHeade.next;
};
// @lc code=end
