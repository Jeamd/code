/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let k = 0;
  const map = new Map();
  const res = [];

  while (k < nums.length) {
    map.set(nums[k], (map.get(nums[k]) || 0) + 1);
    k++;
  }
  for (let [key, val] of map) {
    if (val === 1) {
      res.push(key);
    }
  }

  return res;
};
// @lc code=end
