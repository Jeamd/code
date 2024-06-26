/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n < 0) {
    //n<0时 x的n次方等于1除以x的-n次方分
    return 1 / myPow(x, -n);
  }

  if (n % 2) return x * myPow(x * x, (n - 1) / 2);

  return myPow(x * x, n / 2);
};
// @lc code=end
