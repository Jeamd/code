/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const windowSet = new Set();

  let rk = 0,
    lk = 0;

  let maxLen = 0;

  while (rk < s.length) {
    const str = s[rk];
    if (windowSet.has(str)) {
      maxLen = Math.max(maxLen, windowSet.size);
      while (lk < rk && windowSet.has(str)) {
        const lStr = s[lk];
        windowSet.delete(lStr);
        lk++;
      }
    }
    windowSet.add(str);
    rk++;
  }

  return Math.max(maxLen, windowSet.size);
};
// @lc code=end
