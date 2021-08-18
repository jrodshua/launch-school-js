// 6. use map & filter return odd length values

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  let lengths = arr.map((str) => str.length);
  let oddLengths = lengths.filter((length) => length % 2 !== 0);
  return oddLengths;
}

console.log(oddLengths(arr)); // => [1, 5, 3]

// 8. refactor oddLengths to use reduce instead of map & filter

let reducedArr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengthsReduced(arr) {
  return arr.reduce((results, item) => {
    let length = item.length;

    if (length % 2 !== 0) {
      results.push(length);
    }

    return results;
  }, []);
}

console.log(oddLengthsReduced(reducedArr)); // => [1, 5, 3]
