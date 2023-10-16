/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 *
 * dp[i]: 表示 总金额 i 所需要的最小 硬币数
 */
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(-1);

  for (let i = 0; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i == 0) {
        dp[i] = 0;
        continue;
      }
      if (i === coins[j]) {
        dp[i] = 1;
        continue;
      }

      if (i - coins[j] < 0) {
        continue;
      }
      const subDp = dp[i - coins[j]] + 1;

      if (dp[i] === -1 && subDp !== 0) dp[i] = subDp;
      dp[i] = subDp <= 0 ? dp[i] : Math.min(subDp, dp[i]);
    }
  }

  return dp[amount];
};
// @lc code=end
