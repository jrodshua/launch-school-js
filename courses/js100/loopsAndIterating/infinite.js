// 3. explain infinite loop

let counter = 0;

while ((counter = 1)) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/**
 * counter = 1 evaluates to true (not a condition, but an assignment,
 * return value of assignment (1) is truthy).
 * counter > 2 never runs because counter = 1, reassigns counter to 1
 * at the start of every loop
 */

// 4. does code produce error, why, what's output

for (let i = 0; i < 5; ) {
  console.log((i += 1));
}

/**
 * no error, all 3 expressions are optional.
 * 1, 2, 3, 4, 5 outputted to console. Since i
 * is incremented and printed to console before
 * next loop occurs, 1 is printed instead of 0.
 * Similar to the case of 1, i is incremented to
 * 5 and printed before next loop and before i < 5
 * condition is evaluated.
 */
