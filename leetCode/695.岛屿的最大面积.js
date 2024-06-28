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
  // let res = 0;
  // const dfs = (i, j) => {
  //   if (!grid?.[i]?.[j]) {
  //     return 0;
  //   }
  //   grid[i][j] = 0;
  //   const aNum = dfs(i + 1, j);
  //   const bNum = dfs(i - 1, j);
  //   const cNum = dfs(i, j + 1);
  //   const dNum = dfs(i, j - 1);
  //   return 1 + aNum + bNum + cNum + dNum;
  // };
  // for (let i = 0; i < grid.length; i++) {
  //   for (let j = 0; j < grid[0].length; j++) {
  //     let item = grid[i][j];
  //     if (item) {
  //       const num = dfs(i, j);
  //       res = Math.max(num, res);
  //     }
  //   }
  // }
  // return res;
  /**
   * 找到一个岛屿 通过dfs淹没一个岛屿
   *
   */
  let tempAns = 0,
    ans = 0;
  const dfs = (i, j) => {
    if (!grid[i]?.[j]) return;
    grid[i][j] = 0;
    tempAns++;
    // 向右
    dfs(i, j + 1);
    // 向左
    dfs(i, j - 1);
    // 向下
    dfs(i + 1, j);
    // 向上
    dfs(i - 1, j);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      // 开始搜索
      if (grid[i][j]) {
        // 开始淹没
        tempAns = 0;
        dfs(i, j);
        ans = Math.max(ans, tempAns);
      }
    }
  }

  return ans;
};
// @lc code=end
