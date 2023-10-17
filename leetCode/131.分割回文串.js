/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [];
  // 路径
  let track = [];

  const brackTrack = (start) => {
    if (start >= s.length) {
      res.push([...track]);
      return;
    }

    for (let i = start; i < s.length; i++) {
      if (!isPalindrome(s, start, i)) {
        continue;
      }
      // 如果是回文串，将回文串加入路径列表中
      track.push(s.substring(start, i + 1));
      // 回溯算法向下遍历
      brackTrack(i + 1);
      // 恢复状态
      track.pop();
    }
  };

  brackTrack(0);
  return res;
};

// 判断 s 的子串是否为回文串（双指针方法）
function isPalindrome(s, lo, hi) {
  while (lo < hi) {
    if (s[lo] !== s[hi]) {
      return false;
    }
    lo++;
    hi--;
  }
  return true;
}
// @lc code=end
