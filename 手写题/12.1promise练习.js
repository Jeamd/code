/**
 * 一般来说 不会让你 手写 promis
 * all、race 让你 手写
 * 并发控制
 */

import { symbol } from "prop-types";

Promise.myAll = function (promiseList) {
  return new Promise((resolve, reject) => {
    const retArr = [];
    let count = 0;

    const checkOver = () => {
      if (++count === promiseList.length) {
        resolve(retArr);
      }
    };

    promiseList.forEach((promise, index) => {
      promise.then(
        (val) => {
          retArr[index] = val;
          checkOver();
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
};

Promise.race = function (promiseList) {
  return new Promise((reslove, reject) => {
    promiseList.forEach((promise) => promise.then(reslove, reject));
  });
};

/**实现并发控制 */

class Scheduler {
  constructor(limit) {
    this.limit = limit || 2;
    this.execStack = [];
  }

  addRunTask(promiseFunc) {
    // 1. 执行栈 满了
    if (this.execStack.length === this.limit) {
      Promise.race(this.execStack).then(() => {
        // 递归检测
        this.addRunTask(promiseFunc);
      });

      return;
    }

    // 2. 执行栈 没满
    const runingPromise = promiseFunc();
    this.execStack.push(runingPromise);

    runingPromise.then(() => {
      this.execStack.splice(this.execStack.indexOf(runingPromise), 1);
    });
  }
}

const timeout = (time) =>
  new Promise((reslove) => {
    setTimeout(reslove, time);
  });

const scheruler = new Scheduler(3);
const addTask = (time, order) => {
  scheruler.addRunTask(() => timeout(time).then(() => console.log(order)));
};

addTask(1000, "1");
addTask(500, "2");
addTask(1500, "3");
addTask(1200, "4");
addTask(100, "5");
addTask(300, "6");
addTask(800, "7");
addTask(600, "8");

/**
 * 红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯？（用Promise实现）
 */

const sleep = (timer) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, timer);
  });
};

/**
 *
 * @param {*} lights
 * [
 *  {
 *   light: red,
 *   timer: 3,
 *  },
 * ]
 */

const lightControl = (lights) => {};

function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}
