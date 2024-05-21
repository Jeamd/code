/*
 * @lc app=leetcode.cn id=395 lang=javascript
 *
 * [395] 至少有 K 个重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  const helper = (start, end) => {
    // 如果 开始和结束中间字符总数小于 k 则直接返回0
    if (end - start + 1 < k) {
      return 0;
    }

    // 统计每个字符在区间内出现的次数
    const strsCount = new Map();
    for (let i = start; i < end + 1; i++) {
      strsCount.set(s[i], (strsCount.get(s[i]) || 0) + 1);
    }

    // 指针向内收缩 指向 字符大于 k的地方
    while (end >= start && strsCount.get(s[end]) < k) {
      end--;
    }
    while (start <= end && strsCount.get(s[end]) < k) {
      start++;
    }

    // 如果 开始和结束中间字符总数小于 k 则直接返回0
    if (end - start + 1 < k) {
      return 0;
    }

    for (let i = start; i <= end; i++) {
      if (strsCount.get(s[i]) < k) {
        const len1 = helper(start, i - 1);
        const len2 = helper(i + 1, end);

        return Math.max(len1, len2);
      }
    }

    return end - start + 1;
  };

  return helper(0, s.length - 1);
};
// @lc code=end
