// 5. create myObj that uses myProtoObj as prototype

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.baz = 3;

console.log(myObj);
// = { baz: 3 }

console.log(myObj.foo);
// = 1
