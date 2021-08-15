// 3. what happens when you run the following, explain results

{
  let foo = 'bar';
}

// console.log(foo);
/**
 * error, foo is not defined.
 * foo is blocked scoped and not accessible
 * to console.log outside of block
 */

// 4. what happens when you run the code, why

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening ' + NAME);
/**
 * = 'Good Morning, Victor'
 * = 'Good Afternoon, Victor'
 * = 'Good Evening, Victor'
 */

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);
// error, you cannot reassign const variables

// 5. what does it log, why

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);
/**
 * = 'bar'
 * foo = 'qux' declares a new, block scoped variable
 * console.log outputs 'bar' since 'qux' is not within its scope
 */

// 6. will this produce an error, why/why not

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
/**
 * = 'bar'
 * although you cannot redeclare/reassign const variables
 * FOO = 'qux' is declared in its own block, so it creates a new
 * unrelated block scoped FOO that does not conflict with the
 * outter FOO that was declared
 */
