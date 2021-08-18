// 7. use reduce return sum of squares of all items in arr

let array = [3, 5, 7];

function sumOfSquares(arr) {
  return arr.reduce((acc, curr) => acc + curr * curr, 0);
}

console.log(sumOfSquares(array)); // => 83
