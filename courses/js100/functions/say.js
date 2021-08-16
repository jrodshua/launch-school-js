// console.log(`hello`);
// console.log(`hi`);
// console.log(`how do you do`);
// console.log(`Quite all right`);

function say(words = 'hello') {
  console.log(`${words}!`);
}

say();
say('sup');
say(`hello`);
say(`hi`);
say(`how do you do`);
say(`Quite all right`);

function add(a, b) {
  return a + b;
}

let result = add(2, 3);

console.log(result);
