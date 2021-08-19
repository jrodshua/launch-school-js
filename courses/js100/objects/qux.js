// 7. add qux property with value 3 to myObj & examine code

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

// snippet 1

/**
 * snippet 1 outputs qux because
 * Object.keys(myObj) returns an
 * array with the given obj's own
 * properties only, not prototype properties
 */

let objKeys = Object.keys(myObj);
objKeys.forEach((key) => console.log(key));

// snippet 2

for (let key in myObj) {
  console.log(key);
}

/**
 * snippet 2 outputs foo, bar, qux
 * because for/in loop iterates over all
 * properties in obj, including prototype properties
 */
