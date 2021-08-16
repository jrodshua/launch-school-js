// 2. evenOrOdd function

function evenOrOdd(num) {
  num % 2 === 0 ? console.log(`even`) : console.log(`odd`);
}

evenOrOdd(27);
// = odd
evenOrOdd(32);
// = even

//3. evenOrOdd validation

function evenOrOdd2(num) {
  if (typeof num !== 'number') {
    console.log(`Error: Please enter a valid number`);
    return;
  }

  num % 2 === 0 ? console.log(`even`) : console.log(`odd`);
}

evenOrOdd2(41);
// odd
evenOrOdd2(64);
// even
evenOrOdd2('fred');
// Error: Please enter a valid number
