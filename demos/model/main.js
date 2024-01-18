import { a, b } from "./a";
console.log(a); // 1
console.log(b); // { num: 1 }
setTimeout(() => {
  console.log(a); // 1
  console.log(b); // { num: 1 }
}, 500);
