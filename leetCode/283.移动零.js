/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left, rigth;
  left = rigth = 0;

  while (rigth < nums.length) {
    if (nums[rigth] === 0) {
      rigth++;
    } else {
      nums[left] = nums[rigth];
      left++;
      rigth++;
    }
  }

  for (; left < nums.length; left++) {
    nums[left] = 0;
  }

  return nums;
};
// @lc code=end
