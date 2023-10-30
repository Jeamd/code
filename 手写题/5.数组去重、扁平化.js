const arr = [1, 2, 3, 2, 1];

// 去重
function funA(arr) {
  //   return [...new Set(arr)];
  return arr.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  });
}

const arr2 = [
  [1, 2],
  [3, 4, 5, [1, 2, [3]]],
];

const funB = function (arr2, n) {
  if (n <= 0) return [...arr2];
  //   return arr2.float(n);
  let res = [];
  for (let i = 0; i < arr2.length; i++) {
    if (Array.isArray(arr2[i])) {
      const data = funB(arr2[i], n - 1);
      res = res.concat(data);
    } else {
      res.push(arr2[i]);
    }
  }
  return res;
};
