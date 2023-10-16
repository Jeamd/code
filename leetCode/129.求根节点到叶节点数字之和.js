/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
var sumNumbers = function (root) {
  const res = [];
  const dfs = (node, path = []) => {
    if (!node) {
      return;
    }

    if (!node.left && !node.right) {
      res.push([...path, node.val]);
    }

    dfs(node.left, [...path, node.val]);
    dfs(node.right, [...path, node.val]);
  };

  dfs(root, []);

  return res.reduce((pre, cur) => {
    return pre + cur.join("") * 1;
  }, 0);
};
// @lc code=end
