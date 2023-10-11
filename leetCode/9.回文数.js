/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const xStr = x.toString();

  let left = 0,
    right = xStr.length - 1;
  while (left <= right && xStr[left] === xStr[right]) {
    left++;
    right--;
  }
  if (left > right) return true;
  return false;
};
// @lc code=end
