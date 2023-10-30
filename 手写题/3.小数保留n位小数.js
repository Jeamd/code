const num = 3.1415926;

const func = function (num, saveNum) {
  //   return num.toFixed(saveNum);
  const temp = saveNum * 10 * num;
  const res1 = Math.floor(temp) / (saveNum * 10);
  const data = num.toString().split(".")?.[1]?.[saveNum] || 0;
  const res = res1 + data;
  const temp1 = res.toString.split(".");
  if ((temp1?.[1].length || 0) === saveNum) {
    return res.toString();
  }
  for (let i = 0; i < saveNum; i++) {
    temp1?.[1];
  }

  return;
};

console.log(func(num, 2));
