// 6. write function that searches array using regex

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(arr, expression) {
  return arr.filter((word) => expression.test(word));
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
