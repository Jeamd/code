/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */

// var longestCommonPrefix = function (strs) {
//   if (!strs.length) return "";
//   if (strs.length === 1) return strs[0];
//   let arr = strs[0].split("");
//   for (let i = 1; i < strs.length; i++) {
//     const items = strs[i].split("");
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] !== items[j]) {
//         arr.splice(j);
//         j = Infinity;
//       }
//     }
//   }
//   return arr.join("");
// };
var longestCommonPrefix = function (strs) {
  let res = "";
  const str = strs[0];

  for (let i = 1; i < str.length + 1; i++) {
    res = str.slice(0, i);

    const resBool = strs.every((item) => item.slice(0, i) === res);
    if (!resBool) {
      return str.slice(0, i - 1);
    }
  }
  return res;
};
// @lc code=end
