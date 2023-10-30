// call
// 多个参数 改变this指向

Function.prototype.call2 = function (content, ...args) {
  content.fn = this;

  const res = content.fn(...args);

  delete content.fn;

  return res;
};

// apply
Function.prototype.apply2 = function (content, args) {
  content.fn = this;

  const res = content.fn(...args);
  delete content.fn;

  return res;
};

// bind
Function.prototype.bind2 = function (content, ...args) {
  const fn = this;

  return function (...args2) {
    return fn.call(content, ...args, ...args2);
  };
};

// new
function new2(fn, ...args) {
  const obj = {};

  obj.__proto__ = fn.prototype;

  obj.fn = fn;

  const res = obj.fn(...args);

  return typeof res === "object" ? res : obj;
}
