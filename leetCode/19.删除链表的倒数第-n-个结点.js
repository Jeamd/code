/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let tempHeader = new ListNode();

  tempHeader.next = head;

  let k1, k2, k;
  k1 = k2 = tempHeader;
  k = 0;

  while (k1) {
    k++;
    k1 = k1.next;
    if (k > n + 1) {
      k2 = k2.next;
    }
  }

  k2.next = k2.next.next;

  return tempHeader.next;
};
// @lc code=end
