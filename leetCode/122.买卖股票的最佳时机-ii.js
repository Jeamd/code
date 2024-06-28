/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // let dp = new Array(prices.length).fill(false).map(() => []);
  // for (let i = 0; i < prices.length; i++) {
  //   if (i === 0) {
  //     // 第一天不持有
  //     dp[i][0] = 0;
  //     // 第一天持有
  //     dp[i][1] = -prices[i];
  //     continue;
  //   }
  //   // 第i天不持有
  //   dp[i][0] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][0]);
  //   // 第i天持有
  //   dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  // }
  // return dp[prices.length - 1][0];
  /**
   * dp[i][0]第i天不持有股票的最大利润
   * dp[i][1]第i天持有股票的最大利润
   * dp[i][0] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][0]);
   * dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
   * 压缩
   * dp[0] = Math.max(dp[1] + price[i], dp[0])
   * dp[1] = Math.max(dp[1], dp[0] - prices[i])
   * 时间复杂度On 空间 O1
   */
  // let tempDp0 = 0;
  // const dp = [];
  // for (let i = 0; i < prices.length; i++) {
  //   if (i === 0) {
  //     dp[0] = 0;
  //     dp[1] = -prices[i];
  //     continue;
  //   }
  //   tempDp0 = dp[0];
  //   dp[0] = Math.max(dp[1] + prices[i], dp[0]);
  //   dp[1] = Math.max(dp[1], tempDp0 - prices[i]);
  // }
  // return dp[0];
  /**
   * 贪心 找到局部最优解 再推出全局最优解
   */

  let ans = 0;
  for (let i = 1; i < prices.length; i++) {
    ans += Math.max(0, prices[i] - prices[i - 1]);
  }

  return ans;
};
// @lc code=end
