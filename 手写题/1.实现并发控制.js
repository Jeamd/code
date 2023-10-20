function limitFun(asyncFunArr, maxNum) {
  let runingCount = 0;

  const runTask = function (asyncFun) {
    if (!asyncFun) return;
    runingCount++;
    const temp = asyncFun();

    temp.finally(() => {
      runingCount--;
      runNextTask();
    });
  };

  function runNextTask() {
    const asyncFun = asyncFunArr.pop();
    runTask(asyncFun);
  }

  let initCount = 1;
  while (initCount < maxNum) {
    initCount++;
    runNextTask();
  }
}

// 示例任务函数
function asyncTask(id, delay) {
  return new Promise((resolve) => {
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
