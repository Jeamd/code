/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  let queue = [root];
  let res = [];

  while (queue.length) {
    const queueLen = queue.length;
    for (let i = 0; i < queueLen; i++) {
      queue[i]?.left && queue.push(queue[i].left);
      queue[i]?.right && queue.push(queue[i].right);
    }
    queue[queueLen - 1] && res.push(queue[queueLen - 1]?.val);
    queue.splice(0, queueLen);
  }

  return res;
};
// @lc code=end
