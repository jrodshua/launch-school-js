// 1. refactor age.js

let rlSync = require('readline-sync');

let age = Number(rlSync.question(`How old are you?\n`));

// console.log(`You are ${age} years old.`);
// console.log(`In 10 years, you will be ${age + 10} years old.`);
// console.log(`In 20 years, you will be ${age + 20} years old.`);
// console.log(`In 30 years, you will be ${age + 30} years old.`);
// console.log(`In 40 years, you will be ${age + 40} years old.`);

for (let i = 0; i < 5; i++) {
  if (i > 0) {
    console.log(`In ${i}0 years, you will be ${age + i * 10} years old.`);
  } else {
    console.log(`You are ${age} years old.`);
  }
}
