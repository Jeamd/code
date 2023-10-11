/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// dp[i]表示已字符i结尾的最大子数组和
// dp[i] = dp[i-1] > 0 ? i + dp[i-1] : i
var maxSubArray = function (nums) {
  const dp = new Array(nums.length).fill(false);
  dp[0] = nums[0];
  let res = dp[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = dp[i - 1] > 0 ? nums[i] + dp[i - 1] : nums[i];
    res = Math.max(res, dp[i]);
  }

  return res;
};
// @lc code=end
