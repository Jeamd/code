/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let start = 0; start < nums.length; start++) {
    let end = start + 1;
    while (nums[end]?.toString() && nums[start] + nums[end] !== target) {
      end = end + 1;
    }
    if (nums[start] + nums[end] === target) return [start, end];
  }
};
// @lc code=end
