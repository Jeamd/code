/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 * wrater[i] = min(
           # 左边最高的柱子
           max(height[0..i]),
           # 右边最高的柱子
           max(height[i..end])
        ) - height[i]
 */
var trap = function (height) {
  let res = 0;
  const l_max_arr = [];
  const r_max_arr = [];

  l_max_arr[0] = 0;
  r_max_arr[height.length - 1] = 0;

  for (let i = 1; i < height.length; i++) {
    l_max_arr[i] = Math.max(height[i - 1], l_max_arr[i - 1]);
  }

  for (let i = height.length - 2; i >= 0; i--) {
    r_max_arr[i] = Math.max(height[i + 1], r_max_arr[i + 1]);
  }

  for (let i = 0; i < height.length; i++) {
    const wrater = Math.min(l_max_arr[i], r_max_arr[i]) - height[i];
    res += wrater < 0 ? 0 : wrater;
  }

  return res;
};
// @lc code=end
