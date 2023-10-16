/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let newHeader = new ListNode();
  let k = newHeader;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      k.next = list1;
      list1 = list1.next;
      k = k.next;
    } else {
      k.next = list2;
      list2 = list2.next;
      k = k.next;
    }
  }

  if (list1) {
    k.next = list1;
  }

  if (list2) {
    k.next = list2;
  }

  return newHeader.next;
};
// @lc code=end
