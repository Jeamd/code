/**
 * call
 * func.call(obj, arg1, arg2,....)
 */

Function.prototype.myCall = function (obj, ...args) {
  const ctx = obj || window;

  ctx.fn = this;

  const result = ctx.fn(...args);
  delete ctx.fn;

  return result;
};

Function.prototype.myApply = function (obj, args) {
  const ctx = obj || window;

  ctx.fn = this;

  const result = ctx.fn(...args);
  delete ctx.fn;

  return result;
};

Function.prototype.myBind = function (obj, ...preArg) {
  const execu = this;

  const bindFun = function (...arg) {
    let ctx = obj;

    if (this instanceof bindFun) {
      // 把 bindFunc 当作构造函数使用了 这时this绑定new 出来的实例
      ctx = this;
    }

    return execu.myCall(ctx, ...preArg, arg);
  };

  bindFun.prototype = new fNOP();

  return bindFun;
};

function myNew() {
  const constructor = [].shift.myCall(arguments);

  const obj = new Object();

  obj.__proto__ = constructor.prototype;

  const ret = constructor.myApply(obj, arguments);

  return typeof ret === "object" ? ret : obj;
}
