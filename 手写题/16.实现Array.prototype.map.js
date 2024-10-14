Array.prototype.myMap = function (callBack, thisArg) {
  // your code here
  // callBackArgs: item,index,array

  if (!Array.isArray(this)) {
    throw Error();
  }

  const result = [];
  const len = this.length;

  for (let i = 0; i < len; i++) {
    // 价差 i 属性 是否存在于 this 对象本身或者原型链上
    if (i in this) {
      result[i] = callBack.call(thisArg, this[i], i, this);
    }
  }

  return result;
};
