/**
 * 0-1背包问题
 * 0-1背包问题指的是有n个物品和容量为j的背包
 * weight数组中记录了n个物品的重量
 * 位置i的物品重量是weight[i]
 * value数组中记录了n个物品的价值
 * 位置i的物品价值是vales[i]
 * 每个物品只能放一次到背包中，问将那些物品装入背包，使背包的价值最大。
 */

const wight = [2, 3, 4];
const value = [3, 5, 6];

/**
 *
 * @param {Array} wight
 * @param {Array} value
 * @param {Number} size
 */
function testWeightBagProblem(wight, value, size) {
  /**
   * 动态规划解决
   * dp[i][j]表示 背包最大容量 i 下 && 前 j 种物品下 其所能容纳的最大价值
   *
   * dp[i][j] = Math.max(dp[i][j-1], dp[i - wight[j]] + value[j])
   */

  const dp = new Array(size + 1).fill(0).map((i) => []);

  for (let j = 0; j < wight.length + 1; j++) {
    // j 就是前几种商品
    for (let i = 0; i < size + 1; i++) {
      // i 就是当前最大容量
      if (i === 0) {
        // 如果容量为 0 必然都为 0
        dp[i][j] = 0;
        continue;
      }

      if (j === 0) {
        // 如果种类为前0种 必然都为 0
        dp[i][j] = 0;
        continue;
      }

      if (wight[j - 1] > i) {
        // 如果 第j种物品重量大于背包的总容量i 那只能取 在当前容量下的前j-1种物品的最大价值，就是dp[i][j - 1]
        dp[i][j] = dp[i][j - 1];
        continue;
      }
      //   下边就是第j种物品重量小于背包的总容量 i

      // 装第j种物品, 那就是背包还有 i - wight[j]容量、还有 j - 1种类
      const input_j_value = value[j - 1] + dp[i - wight[j - 1]][j - 1];
      // 不装第j种物品, 那就是背包还有 i 容量、还有 j - 1种类
      const no_input_j_value = dp[i][j - 1];

      dp[i][j] = Math.max(input_j_value, no_input_j_value);
    }
  }

  return dp[size][wight.length];
}
console.log(testWeightBagProblem(wight, value, 6)); // 9
console.log(testWeightBagProblem(wight, value, 5)); // 8
console.log(testWeightBagProblem(wight, value, 4)); // 6

/**
 * 0-1背包问题，重新定义推导一下，跟前边dp定义的不一致
 * dp[i][j]: 表示前i种物品在 额定重量 j 下的最大价值
 * dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w[i]] + c[i]) 二维状态转移方程
 * 压缩转换为一维数组：因为dp[i] 只跟 dp[i - 1]有关 后无效性 进行逆向遍历 ---> 第 i - 1 的值取的还是旧值（还是j容量下 前 i - 1 种物品的最大价值）
 * dp[j] = Math.max(dp[j], dp[j - w[i]] + c[i]);
 *
 * 完全背包问题
 * dp[i][j]: 同上
 * dp[i][j] = Math.max(dp[i -1][j], dp[i][j - w[i]] + c[i]) 二维状态转移方程
 * 压缩转换为一维数组：因为dp[i] 只跟 dp[i - 1]有关 进行正向遍历 ---> 第 i - 1 的值需要取的是新值（表示j容量下 前 i 种物品的最大价值）
 * dp[j] = Math.max(dp[j], dp[j - w[i]] + c[i]);
 *
 * 多重背包问题
 * 转换方案 暴力拓展行 复制物品 使其件数均为 1 转换为 0-1背包问题 二进制转换压缩 通过 2^0,2^1...2^p进行分解
 *  */

// 多重背包的 二进制压缩算法 没写完

function multipleBagProblem(wight, value, count, size) {
  const dp = [];

  for (let i = 0; i <= wight.length; i++) {
    for (let j = wight[i]; j <= size; j++) {
      if (i === 0 || j === 0) {
        dp[j] = 0;
        continue;
      }

      if (wight[i] * count[i] > j) {
        dp[j] = Math.max(dp[j], dp[j - wight[i]] + value[i]);
        continue;
      }

      for (let k = 0; k <= count[i] && k * wight[i] <= j; k * 2) {
        dp[j] = Math.max(dp[j], dp[j - k * wight[i] + k * value[i]]);
      }
    }
  }

  return dp[size];
}
