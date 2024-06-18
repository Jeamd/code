/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const dp = [];

  for (let i = 0; i < nums.length; i++) {
    // if (i <= 1) {
    //   dp[i] = nums[i];
    //   continue;
    // }

    dp[i] = Math.max((dp[i - 2] || 0) + nums[i], dp[i - 1] || 0);
  }

  return dp[nums.length - 1];
};
// @lc code=end
