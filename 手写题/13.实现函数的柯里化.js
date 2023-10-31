// 柯里化：缓存函数的参数，符合条件后执行对应函数返回结果

const sum = (a, b, c) => a + b + c;
const func = function (fn) {
  return function funTemp(...arg) {
    if (arg.length === fn.length) {
      return fn.apply(this, arg);
    }
    return function (...newArg) {
      return funTemp(...arg, ...newArg);
    };
  };
};

const aa = func(sum);

// console.log(aa(1)(2));
// console.log(aa(1)(2)(3));
// console.log(aa(1, 2)(3));

//  实现sum(1)(2,3,4)(5)()

const func2 = function (fn) {
  return function tempFun(...arg) {
    if (arg.length === 0) return 0;
    return function tempFun2(...newArg) {
      if (newArg.length === 0) return fn(...arg);
      return tempFun(...arg, ...newArg);
    };
  };
};

const sum2 = (...arg) => {
  return arg.reduce((pre, cur) => pre + cur, 0);
};

const sum3 = func2(sum2);

console.log(sum3(1)(2));
console.log(sum3());
console.log(sum3(1, 2)(3, 4)());
console.log(sum3(1)(2)(3)(4)());
console.log(sum3(1, 2, 3)(4));
