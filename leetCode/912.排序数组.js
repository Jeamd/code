/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  /**
   * 归并排序 时间复杂度 O(nlogn) 空间复杂度 O(logn)
   */
  // const margeFunc = (sort1, sort2) => {
  //   let k1 = 0,
  //     k2 = 0;
  //   const res = [];
  //   while (k1 < sort1.length && k2 < sort2.length) {
  //     if (sort1[k1] > sort2[k2]) {
  //       res.push(sort2[k2]);
  //       k2 += 1;
  //     } else {
  //       res.push(sort1[k1]);
  //       k1 += 1;
  //     }
  //   }
  //   return res.concat(sort1.slice(k1)).concat(sort2.slice(k2));
  // };
  // // 归并排序，后续遍历 + 分解问题思路
  // const func = (nums, lo, hi) => {
  //   if (hi === lo) return [nums[lo]];
  //   const temp = Math.floor((lo + hi) / 2);
  //   const sort1 = func(nums, lo, temp);
  //   const sort2 = func(nums, temp + 1, hi);
  //   return margeFunc(sort1, sort2);
  // };
  // return func(nums, 0, nums.length - 1);
  /**
   * 快速排序 时间复杂度 O(nlogn) 最差 O(n^2)
   * 空间复杂度 O(logn) 最差 O(n)
   */
  // 原地交换 数据
  const swap = (nums, i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };

  // 分块 左边小的 右边大的
  const handSort = (nums, lo, hi) => {
    const midNum = nums[lo];

    let i = lo + 1,
      j = hi;

    while (i < j) {
      while (nums[i] < midNum) {
        i++;
      }
      while (nums[j] >= midNum) {
        j--;
      }

      if (i < j) {
        swap(nums, i, j);
      }

      if (i >= j) {
        break;
      }
    }

    swap(nums, lo, j);
    return j;
  };

  // 主函数
  const sort = (nums, lo, hi) => {
    if (lo >= hi) return;

    const p = handSort(nums, lo, hi);

    sort(nums, lo, p - 1);
    sort(nums, p + 1, hi);
  };

  sort(nums, 0, nums.length - 1);

  return nums;
};
// @lc code=end
