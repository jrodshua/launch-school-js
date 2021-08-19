// 3. use object literal, create object with for statement

let myArray = {
  0: 'hello',
  1: 'world',
  2: '!',
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
