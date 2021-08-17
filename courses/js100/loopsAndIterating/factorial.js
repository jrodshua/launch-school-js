// 2. write function that computes and returns factorial

function getFactorial(n) {
  let factorial = n;

  for (let i = 1; i < n; i++) {
    factorial *= i;
  }

  return factorial;
}

console.log(getFactorial(5));

// 6. refactor factorial function to use recursion

function recursiveFact(n) {
  let factorial = n;

  if (n < 2) {
    return n;
  } else {
    factorial *= recursiveFact(n - 1);
  }

  return factorial;
}

console.log(recursiveFact(5));

function factorialSolution(n) {
  if (n === 1) return 1;

  return n * factorialSolution(n - 1);
}

console.log(factorialSolution(5));
