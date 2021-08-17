let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

// while (index < names.length) {
//   let upperCaseName = names[index].toUpperCase();
//   upperNames.push(upperCaseName);
//   index += 1;
// }

// console.log(upperNames);

// let answer;
// do {
//   answer = prompt(`Do you want to do that again?`);
// } while (answer === 'y');

for (let i = 0; i < names.length; i++) {
  // if (names[i] === 'Naveed') {
  //   continue;
  // }

  // if (names[i] !== 'Naveed') {
  //   let upperCaseName = names[i].toUpperCase();
  //   upperNames.push(upperCaseName);
  // }

  if (names[i] === 'Naveed') continue;

  let upperCaseName = names[i].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames);
