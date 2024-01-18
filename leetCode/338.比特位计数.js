/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
// dp[n] = count(d(n-1) + d(1)) + dp[i-1]

var countBits = function (n) {
  const d = ["0", "1"];
  const dp = [0];

  function count(str) {
    let res = 0;
    for (const val of [...str]) {
      if (val === "1") res++;
    }
    return res;
  }

  function sum2(num1 = [], num2 = []) {
    const num1Arr = [...num1].reverse(),
      num2Arr = [...num2].reverse();

    let temp = 0,
      k = 0;
    let resArr = [];

    while (k < num1.length || k < num2.length) {
      const data =
        Number(num1Arr[k] || 0) + Number(num2Arr[k] || 0) + Number(temp);
      const res = data % 2;
      temp = Math.floor(data / 2);
      resArr[k] = res;
      k++;
    }

    if (temp) {
      resArr.push(temp);
    }

    return resArr.reverse().join("");
  }

  for (let i = 1; i < n + 1; i++) {
    d[i] = sum2(d[i - 1], d[1]);
    dp[i] = count(d[i]);
  }

  return dp;
};
// @lc code=end
