/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  /**
   * dp[i] = for (let k = i - 1; k >= 0; k--) {
   *    dp[i] = dp[i] || (dp[k] && nums[k] >= i - k);
   * }
   */
  //   let dp = [true];
  //   for (let i = 1; i < nums.length; i++) {
  //     for (let k = i - 1; k >= 0; k--) {
  //       dp[i] = dp[i] || (dp[k] && nums[k] >= i - k);
  //       if (dp[i]) {
  //         k = -1;
  //         continue;
  //       }
  //     }
  //   }
  //   return dp[nums.length - 1];

  /**
   * 贪心
   */
  let maxLen = 0;

  for (let i = 0; i <= maxLen; i++) {
    maxLen = Math.min(Math.max(nums[i] + i, maxLen), nums.length - 1);
    if (maxLen === nums.length - 1) return true;
  }

  return false;
};
// @lc code=end
