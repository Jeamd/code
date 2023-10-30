function FunA(name) {
  this.name = name;
}

FunA.prototype.getName = function () {
  return this.name;
};

// 1. 原型链继承
function FunB(age) {
  this.age = age;
}
FunB.prototype = new FunA("hehihe");
objB = new FunB(3);
// 子类原型会共用一个实例对象，实例化子类对象时不能给父类传参

// 2. 构造函数继承
function FunC(age, name) {
  this.age = age;
  FunA.call(this, name);
}

// 解决子类原型会共用一个实例对象，实例化子类对象时不能给父类传参问题，但是父类构造函数会执行两次；但是只能继承父类实例本身的属性

// 3. 组合继承
function FunD(age, name) {
  this.age = age;
  FunA.call(this, name);
}

FunD.prototype = Object.create(FunA.prototype);
FunD.prototype.contructor = FunD;

// objectCreat 是创建一个新对象并将新对象的prototype属性设置为指定对象
function objectCreat(obj) {
  function fn() {}
  fn.prototype = new obj();
  return new fn();
}

// class 类中super指向父类构造函数
