/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sortNums = nums.sort((a, b) => a - b);
  let res = [];

  const twoSum = (nums, target, start) => {
    let left = start,
      right = nums.length - 1;
    const res = [];
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        res.push([nums[left], nums[right]]);
        const pre = nums[left];
        while (left < right && nums[left] === pre) {
          left++;
        }
      }
    }

    return res;
  };

  let preTarget;
  for (let i = 0; i < sortNums.length; i++) {
    const target = -sortNums[i];
    if (preTarget !== target) {
      preTarget = target;
      const subSum = twoSum(sortNums, target, i + 1);
      if (subSum.length) {
        res = [...res, ...subSum.map((item) => [sortNums[i], ...item])];
      }
    }
  }

  return res;
};
// @lc code=end
