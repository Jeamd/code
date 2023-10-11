/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let curlen = s.length,
    prelen = undefined;
  while (prelen !== curlen) {
    s = s.replace("()", "").replace("{}", "").replace("[]", "");
    prelen = curlen;
    curlen = s.length;
  }
  return !s.length;
};
// @lc code=end
