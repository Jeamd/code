/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  /**
   * dp[i][j]表示到达grid[i][j]的最小数字总和
   * dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
   * 压缩 j
   * dp[j] = Math.min(dp[j], dp[j-1]) + grid[i][j]
   */

  const dp = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (dp[j] || dp[j - 1]) {
        dp[j] = Math.min(dp[j] || Infinity, dp[j - 1] || Infinity) + grid[i][j];
        continue;
      }
      dp[j] = grid[i][j];
    }
  }

  return dp[grid[0].length - 1];
};
// @lc code=end
