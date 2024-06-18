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
  if (!root) return [];

  const queue = [root];
  const res = [];

  while (queue.length) {
    const len = queue.length;
    const tempRes = [];
    for (let i = 0; i < len; i++) {
      const curNode = queue.shift();
      if (curNode?.left) queue.push(curNode.left);
      if (curNode?.right) queue.push(curNode.right);
      tempRes.push(curNode?.val);
    }

    res.push(tempRes);
  }

  return res;
};
// @lc code=end
