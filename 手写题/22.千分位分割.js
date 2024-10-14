function splitStr(strNum) {
  let ret;
  // console.log([].reverse.call(strNum).replace(/(\d{3})/g, `$1,`));
  // console.log(strNum.replace(/(?!\.\d*)/, "$2$1"));
  // console.log(new Intl.NumberFormat().format(strNum));
  console.log(strNum.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  return ret;
}

// splitStr("1234221"); // 1,234,221
// splitStr("823947182"); // 823,947,182
// splitStr("823947182.23451"); // 823,947,182.23451

// 例:输入：www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key；输出：[1, 2, 3]

// let str = "www.nowcoder.com?key=1&key=2&key=3&test=4";

// console.log(
//   str.replace(/(?=[\?,&]).(\w+)=(\w+)/g, function ($0, key, value) {
//     console.log(key, value);
//     return $0;
//   })
// );
// console.log();

// 要求将一个连续字符串如：get-element-by-id转化成驼峰形式

let str = "get-element-by-id";

console.log(str.replace(/(-\w)/g, (str) => str[1].toUpperCase()));
