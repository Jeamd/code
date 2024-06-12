/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 *
 * @param {number[]} arr
 */
const sumArr = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre + +cur;
  }, 0);
};
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const resArr = [];

  const dfs = (path = [], curTarget, startK) => {
    if (curTarget === 0) {
      resArr.push(path);
      return;
    }
    if (curTarget < 0) return;

    for (let i = startK; i < candidates.length; i++) {
      const item = candidates[i];
      dfs([...path, item], curTarget - item, i);
    }
  };

  dfs([], target, 0);

  return resArr;
};
// @lc code=end
