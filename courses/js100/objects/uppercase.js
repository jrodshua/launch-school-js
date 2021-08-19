// 4. create arr from keys, convert to all uppercase, don't mutate obj

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

function uppercaseKeys(obj) {
  let keys = Object.keys(obj);

  let uppercase = keys.map((key) => key.toUpperCase());

  return uppercase;
}

console.log(uppercaseKeys(obj));
// = ['B', 'A', 'C' ]
