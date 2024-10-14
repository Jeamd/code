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
  // const reverseFunc = (node) => {
  //   if (!node || !node.next) {
  //     return {
  //       reverseHead: node,
  //       reverseEnd: node,
  //     };
  //   }

  //   const { reverseHead, reverseEnd } = reverseFunc(node.next);
  //   reverseEnd.next = node;
  //   node.next = null;
  //   return {
  //     reverseHead,
  //     reverseEnd: node,
  //   };
  // };

  // const { reverseHead } = reverseFunc(head);

  // return reverseHead;

  // 定义递归函数含义：接收一个头节点返回 反转后 的头节点

  if (!head || !head.next) return head;

  const reverseHead = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return reverseHead;
};
// @lc code=end
