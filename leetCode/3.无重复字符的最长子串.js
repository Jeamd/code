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
  // const windowSet = new Set();
  // let rk = 0,
  //   lk = 0;
  // let maxLen = 0;
  // while (rk < s.length) {
  //   const str = s[rk];
  //   if (windowSet.has(str)) {
  //     maxLen = Math.max(maxLen, windowSet.size);
  //     while (lk < rk && windowSet.has(str)) {
  //       const lStr = s[lk];
  //       windowSet.delete(lStr);
  //       lk++;
  //     }
  //   }
  //   windowSet.add(str);
  //   rk++;
  // }
  // return Math.max(maxLen, windowSet.size);
  // const mapSet = new Set();
  // let i = 0;
  // let res = "";
  // let maxLen = 0;
  // while (i < s.length) {
  //   if (!mapSet.has(s[i])) {
  //     res = res + s[i];
  //     mapSet.add(s[i]);
  //     i++;
  //   } else {
  //     const tempStr = res[0];
  //     res = res.slice(1);
  //     mapSet.delete(tempStr);
  //   }
  //   maxLen = Math.max(res.length, maxLen);
  // }
  // return maxLen;

  const windowSet = new Set();
  let rk = 0,
    lk = 0;
  let maxLen = 0;

  while (rk < s.length) {
    const curStr = s[rk];
    if (windowSet.has(curStr)) {
      preStr = s[lk];
      windowSet.delete(preStr);
      lk++;
    } else {
      windowSet.add(curStr);
      rk++;
      maxLen = Math.max(maxLen, rk - lk);
    }
  }

  return maxLen;
};
// @lc code=end
