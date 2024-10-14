/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0,
    j = 0;

  while (i < s.length && j < t.length) {
    const chartS = s[i];
    const chartT = t[j];

    if (chartS === chartT) {
      i++;
      j++;
    } else {
      j++;
    }
  }

  return i === s.length;
};
// @lc code=end
