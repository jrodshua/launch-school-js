// 4. what is logged

function barCodeScanner(serial) {
  switch (serial) {
    case `123`:
      console.log(`Product1`);
    case `113`:
      console.log(`Product2`);
    case `142`:
      console.log(`Product3`);
    default:
      console.log(`Product not found!`);
  }
}

barCodeScanner(`113`);
/**
 * matching case and remaining cases logged.
 * upon matching case clause, associated expression is executed and
 * all remaining case expressions are executed due to no break statement
 */
