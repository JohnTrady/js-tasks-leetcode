'use strict';
// Task-13 (69. Sqrt(x) from lettcode.com)

/**
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.
 */

/**
 * @param {number} x
 * @return {number}
 */

 const mySqrt = x => {
    if (x < 0) x = -x;
    if(x === 0 || x === 1) return x;
   for(let i = 2; i <= x; i++) {
        if(i * i === x) {
            return  i;
        } else if (i * i > x) {
            return i - 1;
        }
        
   }
};

console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(-16));
console.log(mySqrt(1));
console.log(mySqrt(2));



/**
 * Runtime 77 ms
   Beats 85.11%
 */

/**
 * Memory 42.8 MB
   Beats  76.56%
 */