/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  // /**
  //  * 动态规划思路
  //  * dp[i] = math.min(dp[j], dp[j + 1]) + triangle[i];
  //  */
  // const bottomArr = triangle[triangle.length - 1];

  // const dp = [...bottomArr];

  // for (let i = triangle.length - 2; i >= 0; i--) {
  //   for (let j = 0; j < triangle[i].length; j++) {
  //     dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
  //   }
  // }

  // return dp[0];

  // dp[i][j] = math.min(dp[i-1][j], dp[i-1][j -1]) + c[i][j]

  const dp = new Array(triangle.length).fill(null).map(() => []);
  dp[0][0] = triangle[0][0];

  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      const a = dp?.[i - 1]?.[j];
      const b = dp?.[i - 1]?.[j - 1];
      dp[i][j] =
        Math.min(
          a === undefined ? Infinity : a,
          b === undefined ? Infinity : b
        ) + triangle[i][j];
    }
  }

  return dp[triangle.length - 1].reduce((pre, cur) => {
    return Math.min(pre, cur);
  }, Infinity);
};
// @lc code=end
