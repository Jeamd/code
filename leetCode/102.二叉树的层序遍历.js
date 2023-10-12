/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
  const queue = [root];
  let res = [];
  if (!root) return res;

  while (queue.length) {
    const len = queue.length;
    const subRes = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      subRes.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(subRes);
  }

  return res;
};
// @lc code=end
