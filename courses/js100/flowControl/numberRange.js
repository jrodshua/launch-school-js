// 8. write function that logs number between 0 - 50, 51 - 100, 100+, num < 0

function getNumsRange(num) {
  switch (true) {
    case num >= 0 && num <= 50:
      console.log(`${num} is between 0 and 50`);
      break;
    case num >= 51 && num <= 100:
      console.log(`${num} is between 51 and 100`);
      break;
    case num > 100:
      console.log(`${num} is greater than 100`);
      break;
    default:
      console.log(`${num} is less than 0`);
      break;
  }
}

getNumsRange(25);
// 25 is between 0 and 50
getNumsRange(75);
// 75 is between 51 and 100
getNumsRange(125);
// 125 is greater than 100
getNumsRange(-25);
// -25 is less than 0
