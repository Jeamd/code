/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  /**
   * dp[i] 最大乘积
   * dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j);
   */

  const dp = [0];

  for (let i = 1; i <= n; i++) {
    dp[i] = i - 1;
    for (let j = i - 1; j >= 0; j--) {
      dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j);
    }
  }

  return dp[n];
};
// @lc code=end
