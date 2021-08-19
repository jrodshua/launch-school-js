// 10. what gets returned by y++ in second snippet, why

// snippet 1
let x = '5';
x = x + 1;
// = '51'

// snippet 2
let y = '5';
y++;
/**
 * = 5
 * js coerces strings to numbers if they have ++ applied to it.
 * ++ after y, increments value but returns original value.
 * ++y would return 6
 */
