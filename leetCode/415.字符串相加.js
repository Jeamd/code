/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const getSum = (s1, s2, tempNum) => {
    const sum = Number(s1) + Number(s2) + tempNum;
    const res = sum % 10;
    const num = Math.floor(sum / 10);
    return {
      sum,
      res,
      tempNum: num,
    };
  };
  const getMinus = (s1, s2, tempNum) => {
    const sum = Number(s1) + Number(s2) + tempNum;
    const res = sum % 10;
    const num = Math.floor(sum / 10);
    return {
      sum,
      res,
      tempNum: num,
    };
  };
};
// @lc code=end
