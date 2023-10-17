/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let res = 0;

  const dfs = (i, j) => {
    if (!grid?.[i]?.[j]) {
      return 0;
    }

    grid[i][j] = 0;
    const aNum = dfs(i + 1, j);
    const bNum = dfs(i - 1, j);
    const cNum = dfs(i, j + 1);
    const dNum = dfs(i, j - 1);

    return 1 + aNum + bNum + cNum + dNum;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let item = grid[i][j];
      if (item) {
        const num = dfs(i, j);
        res = Math.max(num, res);
      }
    }
  }

  return res;
};
// @lc code=end
