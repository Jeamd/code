/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // // 时间复杂度O(mn) 空间复杂度 O(mn)
  // let dp = new Array(m).fill(null).map(() => new Array(n).fill(false));
  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (i == 0 && j == 0) {
  //       dp[0][0] = 1;
  //       continue;
  //     }
  //     const left = dp?.[i]?.[j - 1] || 0;
  //     const right = dp?.[i - 1]?.[j] || 0;
  //     dp[i][j] = left + right;
  //   }
  // }
  // return dp[m - 1][n - 1];
  //优化空间复杂度 时间复杂度O(mn) 空间复杂度 O(n)

  let dp = new Array(n).fill(1);

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] = dp[j - 1] + dp[j];
    }
  }

  return dp[n - 1];
};
// @lc code=end
