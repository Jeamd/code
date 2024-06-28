/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  const sortArr = intervals.sort((a, b) => a[1] - b[1]);
  let ans = 0,
    right = -Infinity;
  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i][0] >= right) {
      ans++;
      right = sortArr[i][1];
    }
  }
  return intervals.length - ans;
};
// @lc code=end
