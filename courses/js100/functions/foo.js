// 1. what's logged, foo affect output?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
// returns undefined
console.log(bar);
/**
 * bar = 1
 * foo declares a new local bar variable,
 * independent from the global bar variable
 */
