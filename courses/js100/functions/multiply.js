// 3. multiply function

let rlSync = require('readline-sync');

function getNums(prompt) {
  let num = rlSync.question(prompt);
  return num;
}

let firstNum = parseFloat(getNums(`Enter the first number: `));
let secondNum = parseFloat(getNums(`Enter the second number: `));

console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
