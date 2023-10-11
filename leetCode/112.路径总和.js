/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let res = false;

  const dfs = (root, sum = 0) => {
    // 这里是递归出去的条件
    if (!root) {
      return;
    }

    const newSum = root.val + sum;
    // 这里是判断是否为子节点的末端
    if (!root.left && !root.right) {
      res = res ? res : newSum === targetSum;
    }

    dfs(root.left, newSum);
    dfs(root.right, newSum);
  };

  dfs(root, 0);

  return res;
};
// @lc code=end
