// 给定一个多维数组，判断是否形成死锁
const arr = [
  ["a", "b"],
  ["c", "b"],
  ["a", "e"],
  ["e", "b"],
  ["b", "a"],
];

// function func(arr) {
//   const arrMap = new Map();
//   const tempKeySet = new Set();

//   arr.forEach((item) => {
//     const [key, com] = item;
//     const preData = arrMap.get(key) || [];
//     arrMap.set(key, [...preData, com]);
//   });

//   let res = false;
//   const fun2 = function (key, path = new Set()) {
//     if (path.has(key) || res) {
//       res = true;
//       return;
//     }

//     path.add(key);
//     tempKeySet.add(key);
//     const depArr = arrMap.get(key) || [];
//     for (let val of depArr) {
//       fun2(val, new Set([...path]));
//     }
//   };

//   for (let val of arrMap.keys()) {
//     if (tempKeySet.has(val)) {
//       continue;
//     }
//     tempKeySet.add(val);
//     fun2(val, new Set());
//   }

//   return res;
// }

// console.log(func(arr));

// function func(arr) {
//   const arrMap = new Map();

//   arr.forEach((item) => {
//     const [key, val] = item;
//     const preData = arrMap.get(key) || [];
//     arrMap.set(key, [...preData, val]);
//   });

//   let res = false;

//   const func = function (node) {
//     let queue = [{ val: node, path: [] }];
//     while (queue.length) {
//       let len = queue.length;
//       for (let i = 0; i < len; i++) {
//         const { val, path } = queue.shift();
//         if (path.includes(val)) {
//           res = true;
//           return;
//         }
//         const depArr = arrMap.get(val) || [];
//         queue = queue.concat(
//           depArr.map((item) => ({ val: item, path: [...path, val] }))
//         );
//       }
//     }
//   };

//   for (let node of arrMap.keys()) {
//     if (res) return res;
//     func(node);
//   }

//   return res;
// }

// console.log(func(arr));

function fun(arr) {
  // 构造 映射关系
  const arrMap = new Map();

  arr.forEach((item) => {
    const [key, data] = item;
    const preData = arrMap.get(key) || [];
    arrMap.set(key, [...preData, data]);
  });

  //构造 根节点
  const root = Symbol("root");
  arrMap.set(root, [...arrMap.keys()]);

  //   设置结果变量
  let res = false;

  //   遍历节点
  const dfs = function (node, path = new Set()) {
    if (!node || res) {
      return;
    }

    if (path.has(node)) {
      res = true;
      return;
    }

    const childrenList = arrMap.get(node) || [];

    for (let i = 0; i < childrenList.length; i++) {
      // 回溯
      path.add(node);
      dfs(childrenList[i], path);
      path.delete(node);
    }
  };

  dfs(root, new Set());

  return res;
}

console.log(fun(arr));
