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
  let nRightNode = null;
  const reverseN = (node, n) => {
    // 接收一个头节点 和 n 返回 反转后的 头节点

    if (n === 1) {
      nRightNode = node.next;
      return node;
    }

    const reverseHead = reverseN(node.next, n - 1);
    node.next.next = node;
    node.next = nRightNode;

    return reverseHead;
  };

  if (left === 1) {
    return reverseN(head, right);
  }

  const reverseHead = reverseBetween(head.next, left - 1, right - 1);

  head.next = reverseHead;

  return head;
};
// @lc code=end
