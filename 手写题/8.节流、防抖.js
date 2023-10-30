// 节流 在一个高频触发的的行为中 每隔n秒触发一次
// 防抖 在n秒内多次触发只执行一次

// 节流
function fun(callBack, n) {
  let timer = null;

  return function (...arg) {
    const nowtimer = new Date().getTime();
    if (!timer || nowtimer - timer > n) {
      timer = nowtimer;
      callBack.apply(this, arg);
    }
  };
}

// 防抖
function fun2(callBack, n) {
  let timer = null;
  return function (...arg) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callBack.call(this, ...arg);
    }, n);
  };
}
