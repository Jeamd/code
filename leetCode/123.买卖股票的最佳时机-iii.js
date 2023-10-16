/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max_k = 2;
  const dp = new Array(prices.length)
    .fill(false)
    .map(() => new Array(max_k).fill(false).map(() => []));

  for (let i = 0; i < prices.length; i++) {
    for (let k = 0; k < max_k; k++) {
      if (i === 0) {
        dp[i][k][0] = 0;
        dp[i][k][1] = -prices[i];
        continue;
      }

      dp[i][k][0] = Math.max(dp[i - 1][k][1] + prices[i], dp[i - 1][k][0]);
      dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k][0] - prices[i]);
    }
  }

  return dp[prices.length - 1][max_k - 1][0];
};
// @lc code=end
