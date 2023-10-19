/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let k1, k2;
  k1 = k2 = 0;
  let sum = 0;

  let res = 0;

  while (k1 <= k2 && k2 <= nums.length) {
    if (sum >= target) {
      res = res ? Math.min(k2 - k1, res) : k2 - k1;
      sum = sum - nums[k1];
      k1++;
    } else {
      sum = sum + nums[k2];
      k2++;
    }
  }

  return res;
};
// @lc code=end
