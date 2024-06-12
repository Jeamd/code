/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 * 接收 一个 head 和 left 和 right 返回反转后的头节点
 */
var reverseBetween = function (head, left, right) {
  // right后的头节点
  let tempEndHead = null;
  // 接收一个head，返回以head开始的反转链表的头节点，同时在末尾加上end后的节点
  const reverseListEnd = (head, end) => {
    if (end === 1 || !head || !head.next) {
      tempEndHead = head?.next || null;
      return head;
    }

    const list = reverseListEnd(head.next, end - 1);
    head.next.next = head;
    head.next = tempEndHead;

    return list;
  };

  if (left === 1) {
    return reverseListEnd(head, right);
  }

  const list = reverseBetween(head.next, left - 1, right - 1);
  head.next = list;
  return head;
};
// @lc code=end
