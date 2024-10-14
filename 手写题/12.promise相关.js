// // promise 是es5 提出来的新方式 目的是为了在处理异步函数时避免回调地狱的发生
// // promise 本身包含 all race reslove reject 方法 原型上有then catch finally方法

// // new Promise((reslove, reject)=>{
// // doSoming...
// // reslove(val) or reject(reson)
// // }).then(()=>{})

// class MyPromise {
//   static state = {
//     REJECTED: "REJECTED",
//     fulfilled: "fulfilled",
//     PENDING: "PENDING",
//   };
//   constructor(fun) {
//     this.status = MyPromise.state.PENDING;
//     this.val = undefined;
//     this.reson = undefined;
//     this.succCallBackList = [];
//     this.errCallBackList = [];

//     try {
//       fun(this.reslove, this.reject);
//     } catch (error) {
//       this.reject(error);
//     }
//   }

//   reslove(val) {
//     if (this.status !== MyPromise.state.PENDING) return;
//     this.status = MyPromise.state.fulfilled;
//     this.val = val;
//     this.succCallBackList.map((item) => item());
//   }
//   reject(reson) {
//     if (this.status !== MyPromise.state.PENDING) return;
//     this.status = MyPromise.state.REJECTED;
//     this.reson = reson;
//     this.errCallBackList.map((item) => item());
//   }

//   then(onfulfilled, onReject) {
//     return new MyPromise((reslove, reject) => {
//       if (this.status === MyPromise.state.REJECTED) {
//         onReject(this.reson);
//         reject(this.reson);
//       }
//       if (this.status === MyPromise.state.fulfilled) {
//         onfulfilled(this.val);
//         reslove(this.val);
//       }
//       if (this.status === MyPromise.state.PENDING) {
//         this.succCallBackList.push(() => {
//           onfulfilled(this.val);
//           reslove(this.val);
//         });
//         this.errCallBackList.push(() => {
//           onReject(this.val);
//           reject(this.reson);
//         });
//       }
//     });
//   }
// }

// new MyPromise();

// // promise.all

// MyPromise.all = function (promiseArr) {
//   if (!Array.isArray(promiseArr)) return;
//   let res = [];
//   let count = 0;
//   return new Promise((reslove, reject) => {
//     for (let key in promiseArr) {
//       const proItem = promiseArr[key];
//       proItem.then(
//         (val) => {
//           res[key] = val;
//           count++;
//           if (count === promiseArr.length) {
//             reslove(res);
//           }
//         },
//         (err) => {
//           reject(err);
//         }
//       );
//     }
//   });
// };

// // propmise.race

// MyPromise.race = function (promiseArr) {
//   if (!Array.isArray(promiseArr)) return;
//   return new Promise((reslove, reject) => {
//     for (let proItem of promiseArr) {
//       proItem.then(
//         (res) => {
//           reslove(res);
//         },
//         (err) => {
//           reject(err);
//         }
//       );
//     }
//   });
// };

/**
 * Promise:(executor:(reslove:(value: any) => void, reject: (reason: any)=>void)) => Promise
 * new Promise((reslove, reject) => {
 *    doSomeThing()
 *    reslove() or reject()
 * }).then(fulfilledFn, rejectedFn)
 * fulfilledFn: (value) => {}
 * fulfilledFn: (reason) => {}
 * 初始状态为pending; pending fulfilled rejected
 * 状态不可逆
 * 接收 executor 函数 传入 reslove 和 reject 函数
 * executor 函数 内部 throw 默认执行 reject 函数
 *
 * 存在一个then 方法 接收 两个函数参数
 * 只有 promise 内部状态变化后 才会去调用 对应的函数参数
 *
 * then 方法支持 链式调用 返回一个新的 promis 对象
 */

// class MyPromise {
//   constructor(executor) {
//     this.initBind();
//     this.initState();
//     try {
//       executor(this.reslove, this.reject);
//     } catch (error) {
//       this.reject(error);
//       throw new Error(error);
//     }
//   }

//   initState() {
//     this.state = "pending";
//     this.value = undefined;
//     this.reason = undefined;

//     this.fulfilledFnList = [];
//     this.rejectedFnList = [];
//   }

//   initBind() {
//     this.reslove = this.reslove.bind(this);
//     this.reject = this.reject.bind(this);
//     this.then = this.then.bind(this);
//   }

//   reslove(val) {
//     if (this.state === "pending") {
//       this.state = "fulfilled";
//       this.value = val;

//       while (this.fulfilledFnList.length) {
//         this.fulfilledFnList.shift().call(this, this.value);
//       }
//     }
//   }

//   reject(reason) {
//     if (this.state === "pending") {
//       this.state = "rejected";
//       this.reason = reason;

//       while (this.rejectedFnList.length) {
//         this.rejectedFnList.shift().call(this, this.reason);
//       }
//     }
//   }

//   then(fulfilledFn, rejectedFn) {
//     fulfilledFn =
//       typeof fulfilledFn === "function" ? fulfilledFn : (val) => val;
//     rejectedFn =
//       typeof rejectedFn === "function" ? rejectedFn : (reason) => reason;

//     return new MyPromise((reslove, reject) => {
//       const reslovePromise = () => {
//         try {
//           const res = fulfilledFn(this.value);

//           if (res instanceof MyPromise) {
//             res.then(reslove, reject);
//           } else {
//             reslove(res);
//           }
//         } catch (error) {
//           reject(error);
//           throw error;
//         }
//       };

//       const rejectPromise = () => {
//         try {
//           const res = rejectedFn(this.reason);
//           if (res instanceof MyPromise) {
//             res.then(reslove, reject);
//           } else {
//             reslove(res);
//           }
//         } catch (error) {
//           reject(error);
//           throw error;
//         }
//       };

//       if (this.state === "rejected") {
//         rejectPromise();
//       }
//       if (this.state === "fulfilled") {
//         reslovePromise();
//       }

//       if (this.state === "pending") {
//         this.fulfilledFnList.push(reslovePromise);
//         this.rejectedFnList.push(rejectPromise);
//       }
//     });
//   }

//   static all(promises) {
//     return new MyPromise((reslove, reject) => {
//       const ret = [];
//       let count = 0;

//       promises.forEach((promise, index) => {
//         promise.then(
//           (res) => {
//             ret[index] = res;
//             count++;
//             if (count === promises.length) {
//               reslove(ret);
//             }
//           },
//           (err) => {
//             reject(err);
//           }
//         );
//       });
//     });
//   }

//   static allSettled(promises) {
//     const ret = [];
//     let count = 0;

//     return new MyPromise((reslove, reject) => {
//       const check = () => {
//         count++;
//         if (count === promises.length) {
//           reslove(ret);
//         }
//       };
//       for (let i = 0; i < promises.length; i++) {
//         const promise = promises[i];

//         promise.then(
//           (res) => {
//             ret[i] = {
//               status: "fulfilled",
//               value: res,
//             };
//             check();
//           },
//           (err) => {
//             ret[i] = {
//               status: "rejected",
//               reason: err,
//             };
//             check();
//           }
//         );
//       }
//     });
//   }

//   static any() {} // 接收一个数组 有一个成功 就 reslove 所有都 失败再 reject
//   static race(promises) {
//     // 哪个promise 先返回结果 不管是成功还是失败 就返回他

//     return new MyPromise((reslove, reject) => {
//       promises.forEach((promise) => {
//         promise.then(
//           (res) => {
//             reslove(res);
//           },
//           (reject) => {
//             reject(res);
//           }
//         );
//       });
//     });
//   }
// }

// todo promise 看代码 说输出问题
// var promise = new Promise((reslove, reject) => {
//   reject(100);
// });

// promise.then(
//   (res) => {
//     console.log(res);
//   },
//   (reason) => {
//     console.log(reason);
//   }
// );

// 实现一个并发控制器
// class Scheduler {
//   constructor(n) {
//     this.limit = n || 2;
//     this.add.bind(this);

//     this.execuQueue = [];
//     this.pendingQueue = [];
//   }
//   add(executor) {
//     if (this.limit > this.execuQueue.length) {
//       const promise = executor();
//       this.exec(promise);
//     } else {
//       this.pendingQueue.push(executor);
//     }
//   }

//   exec(promise) {
//     this.execuQueue.push(promise);

//     promise.then(() => {
//       this.execuQueue.splice(this.execuQueue.indexOf(promise), 1);

//       if (this.pendingQueue.length) {
//         const _promise = this.pendingQueue.shift()();
//         this.exec(_promise);
//       }
//     });
//   }
// }

// const timeout = (time) =>
//   new Promise((reslove) => {
//     setTimeout(reslove, time);
//   });

// const scheduler = new Scheduler(3);

// const addTask = (time, order) => {
//   scheduler.add(() => timeout(time).then(() => console.log(order)));
// };

// addTask(1000, "1");
// addTask(500, "2");
// addTask(1500, "3");
// addTask(1200, "4");
// addTask(100, "5");
// addTask(300, "6");
// addTask(800, "7");
// addTask(600, "8");

const promise = new Promise((resolve, reject) => {
  throw new Error("error");
});

promise
  .then(
    () => {
      console.log(1);
    },
    () => {
      return 2; // 1
    }
  )
  .catch(() => {
    console.log(1222222);
    return 12;
  })
  .then(3)
  .then(Promise.resolve(32))
  .then((res) => {
    console.log(">>>>", res, "<<<"); // 2
  });
