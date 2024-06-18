/*
 * @lc app=leetcode.cn id=315 lang=javascript
 *
 * [315] 计算右侧小于当前元素的个数
 */

// @lc code=start
/**
 * 二叉树构造函数（超时了）
 */
function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
  this.counts = 0;
  this.leftNums = 0;
}

class NodeUtil {
  constructor(root) {
    this.root = root;
  }

  add(newNode) {
    const func = (node) => {
      if (newNode.val <= node.val) {
        node.leftNums += 1;
        node.left ? func(node.left) : (node.left = newNode);
        return;
      }

      newNode.counts = newNode.counts + 1 + node.leftNums;

      if (!node.right) {
        node.right = newNode;
        return;
      }

      func(node.right);
      return;
    };

    func(this.root);
  }
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  // 构造搜索二叉树
  const root = new Node(nums[nums.length - 1]);
  const res = [];

  const nodeUtil = new NodeUtil(root);
  for (let i = nums.length - 2; i >= 0; i--) {
    const curNode = new Node(nums[i]);
    // 给二叉树添加节点
    nodeUtil.add(curNode);

    res.unshift(curNode.counts);
  }

  return [...res, 0];
};
// var countSmaller = function (nums) {
//   const margeFunc = (data1, data2) => {
//     let i = 0,
//       j = 0;

//     const res = [];
//     while (i < data1.length && j < data2.length) {
//       const val1 = data1[i].val;
//       const val2 = data2[j].val;
//       if (val1 > val2) {
//         res.push(data2[j]);
//         j += 1;
//       } else {
//         data1[i].counts = data1[i].counts + j;
//         res.push(data1[i]);
//         i += 1;
//       }
//     }

//     while (i < data1.length) {
//       data1[i].counts = data1[i].counts + j;
//       res.push(data1[i]);
//       i += 1;
//     }

//     return res.concat(data2.slice(j));
//   };

//   /**
//    * nums: [x, x, x, x, y, y, y, y]
//    * do some thing => 👆
//    * A:[x, x, x, x] b:[ y, y, y, y]
//    */
//   const func = (nums, lo, hi) => {
//     if (lo === hi) return [{ val: nums[lo], counts: 0, sourceIndex: lo }];
//     const mid = Math.floor((lo + hi) / 2);

//     const data1 = func(nums, lo, mid);
//     const data2 = func(nums, mid + 1, hi);

//     // do something
//     return margeFunc(data1, data2);
//   };

//   const data = func(nums, 0, nums.length - 1);

//   const res = [];
//   data.map((i) => {
//     const { sourceIndex, counts } = i;

//     res[sourceIndex] = counts;
//   });

//   return res;
// };
// @lc code=end

// 新增单品或者删除单品的时候，需要处理几选几的值，不管当前有没有选中，都更新成全选，与 【@lishumin03】 和 【@dongyue05】 一起讨论的结果
const handleFromNumAndSelectNum = (type) => {
  const preName = ["packagePairing", "buffetPackagePairing", field.name];
  // 当前套餐组中单品的个数
  const detailGroupsLen =
    form.getFieldValue([...preName, "detailGroups"])?.length || 1;
  // 重新当前模块的值
  form.setFieldValue([...preName, "selsctNum"], detailGroupsLen);
};
