// function limitFun(asyncFunArr, maxNum) {
//   let runingCount = 0;

//   const runTask = function (asyncFun) {
//     if (!asyncFun) return;
//     runingCount++;
//     const temp = asyncFun();

//     temp.finally(() => {
//       runingCount--;
//       runNextTask();
//     });
//   };

//   function runNextTask() {
//     const asyncFun = asyncFunArr.pop();
//     runTask(asyncFun);
//   }

//   let initCount = 0;
//   while (initCount < maxNum) {
//     initCount++;
//     runNextTask();
//   }
// }

async function limitFun(asyncFunArr, maxNum) {
  const ret = [],
    execArr = [];

  for (let i = 0; i < asyncFunArr.length; i++) {
    const p = asyncFunArr[i]();

    ret.push(p);

    if (execArr.length <= maxNum) {
      p.then(() => execArr.splice(execArr.indexOf(p), 1));
      execArr.push(p);

      if (execArr.length === maxNum) {
        await Promise.race(execArr);
      }
    }
  }
}

// 示例任务函数
function asyncTask(id, delay) {
  return new Promise((resolve) => {
    console.log(id + "任务正在执行");
    setTimeout(() => {
      console.log(`Task ${id} completed`);
      resolve();
    }, delay);
  });
}

// 创建一组异步任务
const tasks = [
  () => asyncTask(1, 2000),
  () => asyncTask(2, 1000),
  () => asyncTask(3, 1500),
  () => asyncTask(4, 500),
  () => asyncTask(5, 3000),
];

limitFun(tasks, 3);
