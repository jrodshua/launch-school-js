// 4. explain unexpected log

console.log('5' + 10);
/**
 * implicit type coercion
 * JavaScript coerces 10 to a string
 * then concatenates '10' to '5'
 * = '510'
 */

// 5. explicit coercion refactor

console.log(Number('5') + 10);
// = 15

// 6. template literals

console.log(`The value of 5 + 10 is ${Number('5') + 10}`);
