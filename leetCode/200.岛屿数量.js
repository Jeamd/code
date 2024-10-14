/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const dfs = (x, y) => {
    if (!grid?.[x]?.[y]) return;
    if (grid[x][y] === "0") {
      return;
    }
    grid[x][y] = "0";

    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  };
  let ret = 0;

  for (let x = 0; x < grid.length; x++) {
    const row = grid[x];
    for (let y = 0; y < row.length; y++) {
      if (grid?.[x]?.[y] === "1") {
        dfs(x, y);
        ret++;
      }
    }
  }

  return ret;
};
// @lc code=end
