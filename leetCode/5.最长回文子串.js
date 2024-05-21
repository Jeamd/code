/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

/**
 * 二维dp方程组
 * dp[i][j]: i 到 j 的字符串是否为回文
 * dp[i][j] = {
 *  if(s[i] === s[j] && dp[i-1][j-1]) {
 *    dp[i][j] = true;
 *  }else {
 *    dp[i][j] = false;
 *  }
 * }
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = "";

  const getMaxLenStr = (...arg) => {
    return arg.sort((a, b) => b.length - a.length)[0];
  };

  const getMaxStr = (left, right) => {
    let maxStr = "";
    while (left <= right && left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
        maxStr = s.slice(left, right + 1);
        left--;
        right++;
      } else {
        return maxStr;
      }
    }

    return maxStr;
  };

  for (let i = 0; i < s.length; i++) {
    const maxStr1 = getMaxStr(i, i);
    const maxStr2 = getMaxStr(i, i + 1);

    res = getMaxLenStr(maxStr1, maxStr2, res);
  }

  return res;
};
// var longestPalindrome = function (s) {
//   let res = "";
//   const dp = new Array(s.length)
//     .fill(false)
//     .map(() => new Array(s.length).fill(false));

//   const getRes = (i, j) => {
//     res = res.length > j - i + 1 ? res : s.slice(i, j + 1);
//   };

//   const checkFun = (i, j) => {
//     if (s[i] === s[j]) {
//       if (i > 0 && j > 0 && i < res.length && j < res.length) {
//         dp[i][j] = dp?.[i + 1]?.[j - 1];
//       } else {
//         dp[i][j] = true;
//         getRes(i, j);
//       }
//     } else {
//       dp[i][j] = false;
//     }
//   };

//   for (let i = s.length - 1; i >= 0; i--) {
//     for (let j = 0; j < s.length; j++) {
//       if (i <= j) {
//         if (i === j) {
//           dp[i][j] = true;
//           getRes(i, j);
//         } else {
//           checkFun(i, j);
//         }
//       }
//     }
//   }

//   return res;
// };
// @lc code=end
