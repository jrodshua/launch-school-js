// 1. access name property

let person = {
  name: 'Bob',
  occupation: 'web developer',
  hobbies: 'painting',
};

let name = person.name;
let name2 = person['name'];

console.log(name, name2);
