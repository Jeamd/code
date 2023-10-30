// typeof 返回字符串 只能判断基本数据类型 function类型可以判断 null 是object ，其他判断都是object
// instanceof 左右对比 原理是 判断实例对象的原型链上有没有构造函数的prototype属性
// Object.toString.call() 准确返回字符串 需要解析

function myinstanceof(left, right) {
  const prototype = right.prototype;
  let temp = left.__proto__;

  while (temp) {
    if (temp === prototype) {
      return true;
    }
    temp = temp.__proto__;
  }

  return false;
}

console.log(myinstanceof("222", Number));
