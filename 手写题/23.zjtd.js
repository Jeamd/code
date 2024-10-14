/**
 * 最近看大家面经总有一道常见的题目：
 * 数组A中给定可以使用的1~9的数，返回由A数组中的元素组成的小于n的最大数。
 * 例如A={1, 2, 4, 9}，n=2533，返回2499
 */

function getMaxNum(numArr, target) {
  let ret = 0;
  const dfs = (path = []) => {
    if (path?.length) {
      const curNum = path.concat(
        new Array(target.toString().length - numArr.length).fill(0)
      );
      if (Number(curNum.join("")) > target) {
        return;
      }

      if (path.length === target.toString().length) {
        ret = Math.max(Number(path.join("")), ret);
      }
    }

    numArr.map((i) => {
      dfs([...path, i]);
    });
  };

  dfs([]);

  return ret;
}

console.log(getMaxNum([1, 2, 4, 9], 2533));
