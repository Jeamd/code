/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  let res = false;

  const comperNodes = function (node1, node2) {
    if (!node1 && node2) return false;
    if (node1 && !node2) return false;

    if (node1?.val !== node2?.val) return false;

    if (!node1?.left && !node2?.left && !node1?.right && !node2?.right) {
      return true;
    }

    const resLeft = comperNodes(node1.left, node2.left);
    const resRight = comperNodes(node1.right, node2.right);

    return resLeft && resRight;
  };

  const dfs = function (node, subRoot) {
    if (!node) return;

    const resTemp = comperNodes(node, subRoot);

    if (resTemp) {
      res = true;
      return;
    }
    dfs(node.left, subRoot);
    dfs(node.right, subRoot);
  };

  dfs(root, subRoot);

  return res;
};
// @lc code=end
