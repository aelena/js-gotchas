/**
 * Comparing NaN is useless
 * use isNaN
 */

console.log(NaN == NaN);    // returns false
console.log(NaN === NaN);    // returns false
console.log(isNaN(NaN));    // returns false

