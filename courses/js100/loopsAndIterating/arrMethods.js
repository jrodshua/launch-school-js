// forEach
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
// names.forEach((name) => console.log(name));

function forEachMethod(arr, f) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let value = f(arr[i]);
    result.push(value);
  }

  return result;
}

forEachMethod(names, (name) => console.log(name));
