/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let queue = [root];
  let res = [];

  if (!root) return [];

  while (queue.length) {
    const len = queue.length;
    const tempRes = [];

    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      tempRes.push(node.val);
    }

    res.push(tempRes);
  }

  return res.map((resItem, i) => {
    if (i % 2 === 1) {
      return resItem.reverse();
    }
    return resItem;
  });
};
// @lc code=end
