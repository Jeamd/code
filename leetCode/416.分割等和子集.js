/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  /**
   * dp[i][j]: 表示前i个数字是否能恰好组成 j 值
   * dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]]
   * 压缩 i
   * dp[j] = dp[j] || dp[j - nums[i]]
   */

  const sum = nums.reduce((pre, cur) => pre + cur, 0);
  if (!!(sum % 2)) return false;
  //   const dp = new Array(sum / 2).fill(false);
  const dp = [true];

  for (let i = 1; i <= nums.length; i++) {
    for (let j = sum / 2; j >= nums[i - 1]; j--) {
      dp[j] = !!dp[j] || !!dp[j - nums[i - 1]];
    }
  }

  return !!dp[sum / 2];
};
// @lc code=end
