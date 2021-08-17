// function doubler(num) {
//   console.log(num * 2);

//   if (num === 5) {
//     return;
//   } else {
//     return doubler(num + 1);
//   }
// }

// doubler(1);

function fibo(num) {
  if (num < 2) return num;
  return fibo(num - 1) + fibo(num - 2);
}

console.log(fibo(6));
console.log(fibo(20));
