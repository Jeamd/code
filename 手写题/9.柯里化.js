// function curry(fn) {
//   return function _curry() {
//     const args = Array.prototype.slice.call(arguments);

//     if (args.length < fn.length) {
//       return function () {
//         const args2 = [].slice.call(arguments);
//         return _curry.apply(null, args.concat(args2));
//       };
//     }

//     return fn.apply(null, args);
//   };
// }

// const fun2 = (a, b, c) => {
//   return a + b + c;
// };

// const currentFun2 = curry(fun2);

// console.log(currentFun2(1)(2)(3));
// console.log(currentFun2(1, 2, 3));
// console.log(currentFun2(1, 2)(3));
// console.log(currentFun2(1)(2, 3));

function curry(func) {
  return function curryFunc(...pArgs) {
    if (pArgs.length >= func.length) {
      return func.apply(this, pArgs);
    }
    return (...args) => {
      return curryFunc(...pArgs, ...args);
    };
  };
}

function add(a, b, v, d) {
  return a + b + v + d;
}

const fun = curry(add);

console.log(fun(1)(2)(3)(4));
