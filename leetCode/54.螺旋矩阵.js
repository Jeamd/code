/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let x, y;
  x = y = 0;
  const res = 0;
  for (let i = 0; i < matrix.length * matrix[0].length; i++) {
    if (matrix[x][y] !== null) {
      res.push(matrix[x][y]);
      matrix[x][y] = null;
    }
  }
};
// @lc code=end
