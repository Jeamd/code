/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/**
 * ep[0] = 0
 * ep[1] = 1
 * ep[2] = 2
 * ep[3] = 3
 * ep[n] = ep[n-1] + ep[n-2]
 */
const ep = [0, 1, 2];
var climbStairs = function (n) {
  if (ep.length - 1 >= n) {
    return ep[n];
  }

  for (let i = 3; i <= n; i++) {
    ep[i] = ep[i - 1] + ep[i - 2];
  }
  return ep[n];
};
// @lc code=end
