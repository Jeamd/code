/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
  let resArr = [];

  function dfs(path = []) {
    if (path.length === nums.length) {
      resArr.push(path);
      return;
    }

    for (const item of nums) {
      if (!path.includes(item)) {
        dfs([...path, item]);
      }
    }
  }

  dfs([]);
  return resArr;
};
// @lc code=end
