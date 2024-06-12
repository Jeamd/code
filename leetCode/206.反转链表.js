/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 * 函数接收一个头节点，会将这个以head为起点的链表反转，并返回反转后的头节点。
 */
var reverseList = function (head) {
  // const node = new ListNode();
  // let nodeK = node;
  // const func = (curHead) => {
  //   if (!curHead) return null;
  //   func(curHead.next);
  //   curHead.next = null;
  //   nodeK.next = curHead;
  //   nodeK = nodeK.next;
  // };
  // func(head);
  // return node.next;
  if (!head || !head.next) return head;

  const list = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return list;
};
// @lc code=end
