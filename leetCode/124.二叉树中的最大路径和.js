/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 *
 */
var maxPathSum = function (root) {
  let maxSum = root.val;
  //   rootMaxPath函数：返回通过这个节点的最大路径和
  const rootMaxPath = (root) => {
    if (!root) return 0;

    const maxLeftSum = rootMaxPath(root.left);
    const maxRightSum = rootMaxPath(root.right);

    // 这个节点下（包括左右路径）的最大路径和
    let maxRootSum = root.val;
    if (maxLeftSum > 0) {
      maxRootSum += maxLeftSum;
    }
    if (maxRightSum > 0) {
      maxRootSum += maxRightSum;
    }

    maxSum = Math.max(maxSum, maxRootSum);

    // 返回通过这个节点的最大路径和
    const maxPathSum = Math.max(maxLeftSum, maxRightSum);
    return root.val + (maxPathSum > 0 ? maxPathSum : 0);
  };

  rootMaxPath(root);

  return maxSum;
};
// @lc code=end
