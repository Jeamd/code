/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
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
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const resArr = [];
  const dfs = (path = [], start, end) => {
    if (path.length === k && sumArr(path) === n) {
      resArr.push(path);
      return;
    }
    if (path.length === k) return;

    for (let i = start; i <= end; i++) {
      dfs([...path, i], i + 1, end);
    }
  };

  dfs([], 1, 9);
  return resArr;
};
// @lc code=end
