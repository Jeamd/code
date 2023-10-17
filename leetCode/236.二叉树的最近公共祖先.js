/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let res;

  const dfs = function (root, p, q) {
    if (!root) return false;

    const rightRes = dfs(root.right, p, q);
    const leftRes = dfs(root.left, p, q);

    if (
      (rightRes && leftRes) ||
      ([p, q].includes(root) && (rightRes || leftRes))
    ) {
      res = root;
    }

    return leftRes || rightRes || [p, q].includes(root);
  };

  dfs(root, p, q);
  return res;
};
// @lc code=end
