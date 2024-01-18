/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let left = 0,
    right = 1,
    tempS = s;
  if (s.length < 2) return s;

  while (right < tempS.length) {
    if (tempS[left] === tempS[right]) {
      tempS = tempS.slice(0, left) + tempS.slice(right + 1);
      left--;
      right--;
    } else {
      left++;
      right++;
    }
  }

  return tempS;
};
// @lc code=end
