// 1. what is logged to the console, why

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

/**
 * [1, 4, 3] logged to the console.
 * the array1 & array2 variables are stored
 * at different memory locations, however, they
 * point (pointer) to the same array object (same
 * memory locaiton).
 * Assignments of non-primitive values, do not create
 * new values but rather copy a reference to that value.
 */
