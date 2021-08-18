// 5. write findIntegers function

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(arr) {
  return arr.filter((int) => typeof int === 'number' && Number.isInteger(int));
}

let integers = findIntegers(things);

console.log(integers);
