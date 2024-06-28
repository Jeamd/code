/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  /**
   * 排序：如果这个数大于 1/2 那么这个数肯定在排序后的数组最中间
   * 快排，归并
   */
  //   let leftK = 1,
  //       rightK = arr.length - 1,
  //       k = arr[0];
  // 快排， 前序遍历
  const quickFunc = (arr, leftK, rightK) => {
    if (leftK >= rightK) return;

    const pData = arr[leftK];
    let i = leftK + 1,
      j = rightK;

    while (i < j) {
      if (arr[i] > pData) {
        swip(arr, i, j);
        j--;
      } else {
        i++;
      }
    }

    if (arr[i] < pData) {
      swip(arr, i, leftK);

      return i;
    }
    swip(arr, i - 1, leftK);

    return i - 1;
  };
  const quickSort = (arr, leftK, rightK) => {
    if (leftK >= rightK) return;
    const p = quickFunc(arr, leftK, rightK);

    quickSort(arr, leftK, p - 1);
    quickSort(arr, p + 1, rightK);
  };
  //   quickSort(nums, 0, nums.length - 1);

  //   归并，后序遍历

  const margeSort = (arr, p, left, right) => {
    const temp = [...arr];

    let k1 = left,
      k2 = p + 1;

    for (let i = left; i <= right; i++) {
      if (k1 === p + 1) {
        // 左半边数组已全部被合并
        arr[i] = temp[k2];
        k2++;
      } else if (k2 === right + 1) {
        // 右半边数组已全部被合并
        arr[i] = temp[k1];
        k1++;
      } else if (temp[k1] > temp[k2]) {
        arr[i] = temp[k2];
        k2++;
      } else {
        arr[i] = temp[k1];
        k1++;
      }
    }
  };

  const sort = (arr, left, right) => {
    if (left >= right) return;
    const p = Math.floor((left + right) / 2);

    sort(arr, left, p);
    sort(arr, p + 1, right);

    margeSort(arr, p, left, right);
  };

  sort(nums, 0, nums.length - 1);

  function swip(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return nums[Math.floor(nums.length / 2)];
};
// @lc code=end
