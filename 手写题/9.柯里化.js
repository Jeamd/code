function current(fun) {
  return function fun2(...args1) {
    if (fun.length <= args1.length) {
      return fun.apply(this, arguments);
    }
    return function (...args2) {
      return fun2(...args1, ...args2);
    };
  };
}

const fun2 = (a, b, c) => {
  return a + b + c;
};

const currentFun2 = current(fun2);

console.log(currentFun2(1)(2)(3));
console.log(currentFun2(1, 2, 3));
console.log(currentFun2(1, 2)(3));
console.log(currentFun2(1)(2, 3));
