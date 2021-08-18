// 2. log all even values to console

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

myArray.forEach((num) => {
  if (num % 2 === 0) {
    console.log(num);
  }
});

// 3. log all even numbers in nested arr

let nestedArr = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

nestedArr.forEach((num) => {
  if (Array.isArray(num)) {
    num.forEach((n) => {
      if (n % 2 === 0) {
        console.log(n);
      }
    });
  }
});

// 4. even numbers map variation

let mapArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

let evenOdd = mapArray.map((num) => {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

console.log(evenOdd);
