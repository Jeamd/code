/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  /**
   * 动态规划解决
   * 定义： dp[i]表示 和为 整数i 的完全平方数的最少数量
   * dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
   */

  const dp = new Array(n + 1).fill(0);

  for (let i = 1; i < n + 1; i++) {
    dp[i] = i;
    for (let j = 1; i >= j * j; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
};
// @lc code=end
