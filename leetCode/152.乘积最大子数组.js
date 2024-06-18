/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  /**
   * 动态规划
   * 时间复杂度On 空间复杂度 O1
   * dp[i]定义为 以下标i结尾的子数组的最大乘积
   * dp[i] = math.max(dp[i] * nums[i], nums[i])有缺陷 有可能nums[i]为负数 若上一个的最小值为负数 那么负负得正 这才是dp[i]的最大值
   */
  let res = nums[0],
    preMax = nums[0],
    preMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const temp1 = preMax * nums[i];
    const temp2 = preMin * nums[i];
    preMax = Math.max(temp1, temp2, nums[i]);
    preMin = Math.min(temp1, temp2, nums[i]);

    res = Math.max(res, preMax);
  }

  return res;
};
// @lc code=end
