/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let ret = {
    abs: Infinity,
    val: null,
  };

  nums.sort((a, b) => a - b);

  function comparRet(parent, p0, p1) {
    const sum = parent + p0 + p1;
    const abs = Math.abs(target - sum);
    if (abs < ret.abs) {
      ret.abs = abs;
      ret.val = sum;
    }
  }

  function twoSumClosest(left, right, target, parent) {
    while (left < right) {
      let p0 = nums[left],
        p1 = nums[right];

      const sum = p0 + p1;

      comparRet(parent, p0, p1);

      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        return;
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    twoSumClosest(i + 1, nums.length - 1, target - nums[i], nums[i]);
  }

  return ret.val;
};
// @lc code=end
