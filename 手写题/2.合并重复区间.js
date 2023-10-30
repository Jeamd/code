const arr = [
  [10, 30],
  [20, 60],
  [80, 100],
  [100, 150],
];

function reduceArr(arr) {
  const sortArr = arr.sort((a, b) => a[0] - b[0]);

  let res = [];
  let pre = [...sortArr[0]];

  for (let i = 1; i < sortArr.length; i++) {
    const [start, end] = sortArr[i];
    const [preStart, preEnd] = pre;
    if (preEnd > start) {
      // 有交叉
      pre[0] = Math.min(start, preStart);
      pre[1] = Math.max(end, preEnd);
    } else {
      res.push([...pre]);
      pre = [...sortArr[i]];
    }
  }
  res.push(pre);
  return res;
}

console.log(reduceArr(arr));
