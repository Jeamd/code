/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  let res = -1;
  const deadendsSet = new Set(deadends);
  const pathNumMap = new Map();

  const dfs = (now, pathNum, path) => {
    if (deadendsSet.has(now)) {
      return;
    }

    if (pathNumMap.has(now) && pathNumMap.get(now) <= pathNum) {
      return;
    }

    pathNumMap.set(now, pathNum, path);

    if (now === target) {
      console.log(path, now, target);
      res = res === -1 ? pathNum : Math.min(res, pathNum);
      return;
    }
    for (let i = 0; i < target.length; i++) {
      const up = now[i] * 1 + 1 > 9 ? 0 : now[i] * 1 + 1;
      const down = now[i] * 1 - 1 < 0 ? 9 : now[i] * 1 - 1;

      const left = now.slice(0, i),
        right = now.slice(i + 1);

      dfs(left + up + right, pathNum + 1);
      dfs(left + down + right, pathNum + 1);
    }
  };

  dfs("00", 0, "0");
  return res;
};
// @lc code=end
