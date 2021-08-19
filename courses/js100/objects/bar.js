// 9. what is logged to console, why

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
/**
 * 'hi' is logged to console
 */

console.log(qux);
/**
 * 'hello' is logged to console because
 * the bar function reassigns argument2 to 'hi'.
 * to change qux modify code to:
 * qux = argument2 // bar(foo, 'hi') // qux = 'hi'
 */
