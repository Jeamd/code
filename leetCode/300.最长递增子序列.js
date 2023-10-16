/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start

/**
 * dp[i]: 亿nums[i]结尾的最长递增子序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let res = 1;
  let dp = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      continue;
    }

    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i] || 1, dp[j] + 1);
      }
    }

    res = Math.max(dp[i], res);
  }
  return res;
};
// @lc code=end
