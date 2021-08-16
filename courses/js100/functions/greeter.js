// 2. refactor greeter.js

let rlSync = require('readline-sync');

// let firstName = rlSync.question(`What's your first name?\n`);
// let lastName = rlSync.question(`What's your last name?\n`);

// function getFullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }

// console.log(`Good Morning, ${getFullName(firstName, lastName)}`);

function getFullName(prompt) {
  let name = rlSync.question(prompt);
  return name;
}

let firstName = getFullName(`What's your first name? `);
let lastName = getFullName(`What's your last name? `);

console.log(`Hello, ${firstName} ${lastName}!`);
