// 5. what does the function do

function doSomething(str) {
  // example, str = 'hello world'
  return (
    str
      .split(' ')
      // = ['hello', 'world']
      .reverse()
      // = ['world', 'hello']
      .map((value) => value.length)
  );
  // = [5, 5];
}

/**
 * doSomething takes in a string,
 * split method splits string by space and returns array,
 * reverse method reverses order of that array,
 * map method creates a new array with the length of each item
 * from the previous array as its values.
 */

console.log(doSomething(`hello world`));
