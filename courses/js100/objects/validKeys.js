// 2. which values are valid keys

let values = [1, '1', undefined, 'hello world', true, 'true'];

/**
 * all values are valid but JavaScript will
 * coerce all values to a string, so 1 & '1', and
 * true & 'true' will be the same key, modifying
 * their values will result in changing the the value
 * instead of adding a new value.
 * ex: values[1] = 'abc', values['1'] = 'def' => values = { 1: 'def' }
 */
