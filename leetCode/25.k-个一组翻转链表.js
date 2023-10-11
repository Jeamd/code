/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 反转链表（a,b]
const reverse = (a, b) => {
  let pre = null,
    cur = a,
    next = null;

  while (cur !== b) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  return pre;
};

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let a, b;
  a = b = head;

  for (let i = 0; i < k; i++) {
    if (b === null) {
      return head;
    }
    b = b.next;
  }

  const newHead = reverse(a, b);
  a.next = reverseKGroup(b, k);

  return newHead;
};

// @lc code=end
