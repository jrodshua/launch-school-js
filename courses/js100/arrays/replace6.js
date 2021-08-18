// 10. replace value 6 with 606

let arr = [
  ['hello', 'world'],
  ['example', 'mem', null, 6, 88],
  [4, 8, 12],
];

// solution: arr[1][3] = 606;

function replaceValue(arr) {
  arr.forEach((outer) => {
    let index = outer.findIndex((i) => i === 6);
    if (index !== -1) {
      outer.splice(index, 1, 606);
    }
  });

  return arr;
}

console.log(replaceValue(arr));
