/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const sortIntervals = intervals.sort((a, b) => a[0] - b[0]);

  const res = [];
  let tempI = 0;
  while (tempI < sortIntervals.length) {
    const pre = res[res.length - 1] || [0, -Infinity];

    const preEnd = pre[1];
    const [start, end] = sortIntervals[tempI];

    if (preEnd >= start) {
      pre[1] = Math.max(end, preEnd);
    } else {
      res.push(sortIntervals[tempI]);
    }
    tempI++;
  }
  return res;
};
// @lc code=end
