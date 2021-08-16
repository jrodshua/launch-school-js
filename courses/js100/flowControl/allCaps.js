// 7. write all-caps function

function getAllCaps(str) {
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

console.log(getAllCaps(`hello world`));
// = HELLO WORLD
console.log(getAllCaps(`goodbye`));
// = goodbye
