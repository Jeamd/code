/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * dp[i][0]:地i天持有股票所能获得的的最大利润
 * dp[i][1]:地i天不持有股票所能获得的的最大利润
 * dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);
 * dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const dp = new Array(prices.length).fill(false).map(() => []);

  for (let i = 0; i < prices.length; i++) {
    if (i === 0) {
      dp[i][0] = -prices[i];
      dp[i][1] = 0;
      continue;
    }

    dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  }

  console.log(dp);
  return dp[prices.length - 1][1];
};
// @lc code=end
