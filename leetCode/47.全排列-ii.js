/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const sortNums = nums.sort((a, b) => a - b);
  // const used = []
  const resArr = [];

  const dfs = (path = [], used = []) => {
    if (path.length === sortNums.length) {
      resArr.push([...path]);
      return;
    }

    for (let index = 0; index < sortNums.length; index++) {
      if (used[index]) continue;
      const item = sortNums[index];
      used[index] = true;
      path.push(item);
      dfs(path, used);
      path.pop();
      used[index] = false;
      while (sortNums[index + 1] === sortNums[index]) {
        index += 1;
      }
    }
  };

  dfs([], []);
  return resArr;
};
// @lc code=end
