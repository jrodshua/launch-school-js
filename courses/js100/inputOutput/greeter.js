// 1. dynamic greeter program

let rlSync = require('readline-sync');
// let name = rlSync.question(`What's your name?\n`);

// console.log(`Hello, ${name}`);

// 2. Modify greeter.js

let firstName = rlSync.question(`What's your first name?\n`);
let lastName = rlSync.question(`What's your last name?\n`);

console.log(`Hello, ${firstName} ${lastName}`);
