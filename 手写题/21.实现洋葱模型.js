class TaskPro {
  constructor() {
    this.reset();

    this.next = this.next.bind(this);
  }

  addTask(task) {
    this._taskList.push(task);
  }

  run() {
    if (this._isRuning || !this._taskList.length) return;
    this._isRuning = true;
    this.execuTask();
  }

  async next() {
    this.curRunTask++;
    await this.execuTask();
  }

  // 执行任务
  async execuTask() {
    if (this.curRunTask >= this._taskList.length) {
      // 执行完毕
      this.reset();
      return;
    }

    const task = this._taskList[this.curRunTask];
    const tempI = this.curRunTask;
    await task(this.next);

    if (tempI === this.curRunTask) {
      await this.next();
    }
  }

  reset() {
    this._taskList = [];
    this._isRuning = false;
    this.curRunTask = 0;
  }
}

const t = new TaskPro();

t.addTask(async (next) => {
  console.log("1 start");
  await next();
  console.log("1 end");
});

t.addTask(() => {
  console.log("2");
});

t.addTask(() => {
  console.log("3");
});

t.run(); // 1 start > 2 > 3 >1 end
