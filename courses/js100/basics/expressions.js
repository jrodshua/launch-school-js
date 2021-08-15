// 10. what does expression evaluate to

'foo' === 'Foo';
/**
 * false
 * strict equality operator
 */

// 11. what does expression evaluate to

parseInt('3.1415');
/**
 * = 3
 * stops converting string to a number when
 * non-digit is encountered
 * parseFloat = 3.1415
 */

// 12. what does expression evaluate to

'12' < '9';
/**
 * true
 * when comparing strings
 * JS performs character-by-character comparison,
 * on first comparison it determines '1' < '9'
 * this results in '12' < '9' = true
 */
