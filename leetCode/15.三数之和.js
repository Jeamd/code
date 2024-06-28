/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const ans = [];

  const helper = (arr, left, right, target, k, path) => {
    if (k === 2) {
      let leftK = left,
        rightK = right;

      while (leftK < rightK) {
        const tempSum = arr[leftK] + arr[rightK];
        if (tempSum === target) {
          ans.push([...path, arr[leftK], arr[rightK]]);
          const pre = arr[rightK];
          while (arr[rightK] === pre) {
            rightK--;
          }
        }
        if (tempSum > target) {
          rightK--;
        }
        if (tempSum < target) {
          leftK++;
        }
      }

      return;
    }

    for (let i = left; i <= right; i++) {
      arr[i - 1] !== arr[i] &&
        helper(arr, i + 1, right, target - arr[i], k - 1, [...path, arr[i]]);
    }
  };

  nums.sort((a, b) => a - b);

  helper(nums, 0, nums.length - 1, 0, 3, []);

  return ans;
};
// var threeSum = function (nums) {
//   // const sortNums = nums.sort((a, b) => a - b);
//   // let res = [];

//   // const twoSum = (nums, target, start) => {
//   //   let left = start,
//   //     right = nums.length - 1;
//   //   const res = [];
//   //   while (left < right) {
//   //     const sum = nums[left] + nums[right];
//   //     if (sum < target) {
//   //       left++;
//   //     } else if (sum > target) {
//   //       right--;
//   //     } else {
//   //       res.push([nums[left], nums[right]]);
//   //       const pre = nums[left];
//   //       while (left < right && nums[left] === pre) {
//   //         left++;
//   //       }
//   //     }
//   //   }

//   //   return res;
//   // };

//   // let preTarget;
//   // for (let i = 0; i < sortNums.length; i++) {
//   //   const target = -sortNums[i];
//   //   if (preTarget !== target) {
//   //     preTarget = target;
//   //     const subSum = twoSum(sortNums, target, i + 1);
//   //     if (subSum.length) {
//   //       res = [...res, ...subSum.map((item) => [sortNums[i], ...item])];
//   //     }
//   //   }
//   // }

//   // return res;

//   const k = 3;

//   const helper = (numArr, k, target, path = []) => {
//     if (k == 2) {
//       // const newPath = [];
//       // [...new Set(numArr)].map((i) => {
//       //   if (i === target) {
//       //     newPath.push([...path, i]);
//       //   }
//       // });

//       // return newPath;

//       let newPath = [];
//       let right = numArr.length - 1;
//       let left = 0;

//       while (left < right) {
//         const sum = numArr[left] + numArr[right];
//         if (sum < target) {
//           left++;
//         } else if (sum > target) {
//           right--;
//         } else {
//           newPath.push([...path, numArr[left], numArr[right]]);
//           const pre = numArr[left];
//           while (left < right && numArr[left] === pre) {
//             left++;
//           }
//         }
//       }

//       return newPath;
//     }

//     let res = [];

//     numArr.map((i, index, arr) => {
//       // 剪枝-保证含有重复值的数组 答案 去重
//       if (arr[index - 1] !== i) {
//         // 保证相对顺序不变可以实现非重复数组去重！
//         const caclcPath = helper(numArr.slice(index + 1), k - 1, target - i, [
//           ...path,
//           i,
//         ]);
//         res = res.concat(caclcPath);
//       }
//     });

//     return res;
//   };

//   // 排序，以便于剪枝算法的实现
//   nums.sort((a, b) => a - b);

//   return helper(nums, k, 0);
// };
// @lc code=end
