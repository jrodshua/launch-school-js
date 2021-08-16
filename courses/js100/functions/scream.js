// 4. what is logged

function scream(words) {
  words = words + `!!!!`;
  return;
  console.log(words);
  // function stops at return statement, words will not be logged
}

scream(`Yipeee`);
// nothing logged

// 5. what is logged

function scream2(words) {
  return words + `!!!!`;
}

scream2(`Yipeee`);

/**
 * nothing logged to console.
 * wrap scream2 in console.log or declare and initialize
 * a new variable with the value of scream2 and log it
 */

// console.log(scream2(`Yipeee`));

// let makeScream = scream2(`Yipeee`);
// console.log(makeScream);
