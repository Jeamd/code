/*
 * @lc app=leetcode.cn id=881 lang=javascript
 *
 * [881] 救生艇
 */

// @lc code=start
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  /**
   * 贪心算法
   * 最胖的和最瘦的组队，没超重就组队成功，超重胖的单独乘坐
   * 排序加双指针
   */

  const sortArr = people.sort((a, b) => a - b);

  let p1 = 0,
    p2 = sortArr.length - 1;

  let ans = 0;

  while (p1 <= p2) {
    if (sortArr[p1] + sortArr[p2] <= limit) {
      p1++;
      p2--;
    } else {
      p2--;
    }

    ans++;
  }

  return ans;
};
// @lc code=end
