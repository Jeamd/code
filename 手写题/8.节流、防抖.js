// 节流 在一个高频触发的的行为中 每隔n秒触发一次
// 防抖 在n秒内多次触发只执行一次

// 节流
function fun(callBack, n) {
  let timeId = null;
  return function (...arg) {
    const nowTime = new Date().getTime();
    if (!timeId || nowTime - timeId > n) {
      timeId = new Date().getTime();
      callBack.call(this, ...arg);
    }
  };
}

// 防抖
function fun2(callBack, n) {
  let timeId = null;

  return function (...arg) {
    if (timeId) {
      clearTimeout(timeId);
    }
    timeId = setTimeout(() => {
      callBack.apply(this, arg);
    }, n);
  };
}
