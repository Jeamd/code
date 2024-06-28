/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (!points.length) {
    return 0;
  }

  points.sort((a, b) => a[1] - b[1]); //按照区间结尾排序
  let pos = points[0][1];
  let ans = 1;
  for (let balloon of points) {
    if (balloon[0] > pos) {
      //如果后面一个区间的开始大于前一个区间的结尾 就需要新增一支箭
      pos = balloon[1]; //更新pos为新的区间的结尾
      ans++;
    }
  }
  return ans;
};
// @lc code=end
