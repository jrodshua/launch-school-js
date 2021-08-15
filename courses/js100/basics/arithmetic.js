// 2. use arithmetic operators

let nums = 4936;

const ones = nums % 10;
ones;

nums = (nums - ones) / 10;

const tens = nums % 10;
tens;

nums = (nums - tens) / 10;

const hundreds = nums % 10;
hundreds;

const thousands = (nums - hundreds) / 10;
thousands;
// console.log(ones, tens, hundreds, thousands) = 6 3 9 4
