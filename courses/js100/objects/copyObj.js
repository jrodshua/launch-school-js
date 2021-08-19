// 8. create function that creates and returns a copy of obj, takes obj to copy & optional arr of keys param

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let arrOfKeys = ['foo', 'qux'];

function copyObj(obj, arr) {
  let copy = {};

  if (!arr) {
    copy = Object.assign(copy, obj);
  } else {
    arr.forEach((prop) => {
      copy[prop] = obj[prop];
    });
  }

  return copy;
}

let withArr = copyObj(objToCopy, arrOfKeys);
let noArr = copyObj(objToCopy);

console.log(withArr);
// = { foo: 1, qux: 3 }

console.log(noArr);
// = { foo: 1, bar: 2, qux: 3 }
