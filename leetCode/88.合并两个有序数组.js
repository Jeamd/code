/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // let km = m - 1,
  //   kn = n - 1,
  //   k = m + n - 1;
  // while (k >= 0) {
  //   const kmV = nums1[km];
  //   const knV = nums2[kn];
  //   if (knV === undefined || kmV > knV) {
  //     nums1[k] = kmV;
  //     km--;
  //   } else {
  //     nums1[k] = knV;
  //     kn--;
  //   }
  //   k--;
  // }
  // return nums1;

  let k = nums1.length - 1;
  let k1 = m - 1,
    k2 = nums2.length - 1;

  while (k >= 0) {
    if (nums2[k2] === undefined || nums1[k1] > nums2[k2]) {
      nums1[k] = nums1[k1];
      k1--;
    } else {
      nums1[k] = nums2[k2];
      k2--;
    }
    k--;
  }

  return nums1;
};
// @lc code=end
