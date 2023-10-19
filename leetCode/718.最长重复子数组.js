/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 *
 * dp[i][j]:表示以nums1[i] 结尾 和nums2[j] 结尾的 最长重复子数组长度
 * dp[i][j] = if(nums1[i] !== nums[j]){return 0} else {
 *  return dp[i-1][j-1] + 1
 * }
 */
var findLength = function (nums1, nums2) {
  let dp = new Array(nums1.length)
    .fill(false)
    .map(() => new Array(nums2.length).fill(0));

  let res = 0;

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        dp[i][j] = (dp?.[i - 1]?.[j - 1] || 0) + 1;

        res = Math.max(res, dp[i][j]);
      }
    }
  }

  return res;
};
// @lc code=end
