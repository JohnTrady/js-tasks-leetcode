'use strict';

// Task -11 (66. Plus One from leetcode.com)

/**
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */

 const plusOne = digits => {
    let str = BigInt(digits.join(''));
    let num = ++str;
    return num.toString().split('');
    
};

console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
console.log(plusOne([9]));
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));


/**
 * Runtime 71 ms
 * Beats 70.40% 
 */


/**
 * Memory 41.9 MB
 * Beats 62.16% 
 */
