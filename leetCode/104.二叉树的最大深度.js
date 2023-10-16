/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  let res = 0;
  const fun = (node, depth) => {
    if (!node) return;
    const newDepth = depth + 1;
    res = Math.max(res, newDepth);
    fun(node.left, newDepth);
    fun(node.right, newDepth);
  };

  fun(root, 0);

  return res;
};
// @lc code=end
