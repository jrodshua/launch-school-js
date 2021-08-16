// 6. what is the output to console

function isArrayEmpty(arr) {
  if (arr) {
    console.log(`Not Empty`);
  } else {
    console.log(`Empty`);
  }
}

isArrayEmpty([]);
/**
 * 'Not Empty' is logged to console.
 * Arrays & Objects, empty or not, are truthy
 */
