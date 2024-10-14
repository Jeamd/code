/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];
  function dfs(nums, path) {
    if (path.length === k) {
      res.push(path);
    }
    if (!nums.length) {
      return;
    }

    nums.forEach((i, index) => {
      dfs(nums.slice(index + 1), [...path, i]);
    });
  }

  dfs(
    new Array(n).fill(null).map((_, index) => index + 1),
    []
  );

  return res;
};
// @lc code=end
