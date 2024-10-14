/**
 * input = 3[a2[c]]
 * output = 'accaccacc'
 */

function decode(input) {
  const stack = [];
  let curNumStr = "";
  let curStr = "";
  const isNumStr = (str) => str <= "9" && str >= "0";
  for (let i = 0; i < input.length; i++) {
    const curChart = input[i];
    if (isNumStr(curChart)) {
      curNumStr += curChart;
    } else if (curChart === "[") {
      // stack.push(curStr);
      stack.push(curNumStr);
      curNumStr = "";
      curStr = "";
    } else if (curChart === "]") {
      const num = stack.pop();
      const str = stack.pop();

      curStr += str.repeat(Number(num));
    } else {
      curStr += curChart;
    }
  }

  return curStr.repeat(Number(curNumStr || 1));
}

// function decode(input) {
//   if (!input) return "";
//   let num = "";
//   let i = 0;

//   const isNumStr = (str) => str >= "0" && str < "9";

//   while (isNumStr(input[i])) {
//     num = num + input[i];
//     i++;
//   }

//   const dfs = (str) => {
//     //[a2[cc]]

//     let curRet = "";
//     let curStr = str.slice(1, -1); // a2[cc]

//     for (let i = 0; i < curStr.length; i++) {
//       const chart = curStr[i];
//       if (isNumStr(chart)) {
//         curRet += decode(curStr.slice(i));
//         i = curStr.length;
//       } else {
//         curRet += chart;
//       }
//     }

//     return curRet;
//   };

//   return dfs(input.slice(i)).repeat(Number(num));
// }

console.log(decode("3[a2[c]]"));

const promise = new Promise((resolve, reject) => {
  resolve("Success");
  // or reject("Error");
});

const func = async function () {
  console.log("222");
  return Promise.resolve(2);
};

promise
  .then((result) => {
    console.log("Then:", result); // 如果 Promise 成功，这里会被调用
    func().then((res) => console.log("222>>>>>", res));
  })
  .then((result) => {
    console.log(">>>>", result);
  })
  .catch((error) => {
    console.log("Catch:", error); // 如果 Promise 失败，这里会被调用
  })
  .finally(() => {
    console.log("Finally"); // 无论成功或失败，最后总会执行
  });
