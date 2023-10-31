// promise 是es5 提出来的新方式 目的是为了在处理异步函数时避免回调地狱的发生
// promise 本身包含 all race reslove reject 方法 原型上有then catch finally方法

// new Promise((reslove, reject)=>{
// doSoming...
// reslove(val) or reject(reson)
// }).then(()=>{})

class MyPromise {
  static state = {
    REJECTED: "REJECTED",
    FOFULLED: "FOFULLED",
    PENDING: "PENDING",
  };
  constructor(fun) {
    this.status = MyPromise.state.PENDING;
    this.val = undefined;
    this.reson = undefined;
    this.succCallBackList = [];
    this.errCallBackList = [];

    try {
      fun(this.reslove, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }

  reslove(val) {
    if (this.status !== MyPromise.state.PENDING) return;
    this.status = MyPromise.state.FOFULLED;
    this.val = val;
    this.succCallBackList.map((item) => item());
  }
  reject(reson) {
    if (this.status !== MyPromise.state.PENDING) return;
    this.status = MyPromise.state.REJECTED;
    this.reson = reson;
    this.errCallBackList.map((item) => item());
  }

  then(onFofulled, onReject) {
    return new MyPromise((reslove, reject) => {
      if (this.status === MyPromise.state.REJECTED) {
        onReject(this.reson);
        reject(this.reson);
      }
      if (this.status === MyPromise.state.FOFULLED) {
        onFofulled(this.val);
        reslove(this.val);
      }
      if (this.status === MyPromise.state.PENDING) {
        this.succCallBackList.push(() => {
          onFofulled(this.val);
          reslove(this.val);
        });
        this.errCallBackList.push(() => {
          onReject(this.val);
          reject(this.reson);
        });
      }
    });
  }
}

new MyPromise();

// promise.all

MyPromise.all = function (promiseArr) {
  if (!Array.isArray(promiseArr)) return;
  let res = [];
  let count = 0;
  return new Promise((reslove, reject) => {
    for (let key in promiseArr) {
      const proItem = promiseArr[key];
      proItem.then(
        (val) => {
          res[key] = val;
          count++;
          if (count === promiseArr.length) {
            reslove(res);
          }
        },
        (err) => {
          reject(err);
        }
      );
    }
  });
};

// propmise.race

MyPromise.race = function (promiseArr) {
  if (!Array.isArray(promiseArr)) return;
  return new Promise((reslove, reject) => {
    for (let proItem of promiseArr) {
      proItem.then(
        (res) => {
          reslove(res);
        },
        (err) => {
          reject(err);
        }
      );
    }
  });
};
