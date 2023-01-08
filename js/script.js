'use strict';

// Task-12 (67. Add Binary from lettcode.com)

/**
 * Given two binary strings a and b, return their sum as a binary string.
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

 const addBinary = (a, b) => {
    let result  = '';
    let i = a.length - 1;
    let j = b.length - 1;
    let sum = 0;
    let carry = 0;
    while(i >= 0 || j >= 0) {
      sum = carry;
      if(i >=0) {sum += a[i] - '0';}
      if(j >=0){sum += b[j] - '0';}
      result += (sum % 2).toString();
      carry = sum > 1 ? 1 : 0;
      i--;
      j--;
    }
    if(carry !== 0) result += '1';
    return result.split('').reverse().join('');

};

// console.log(addBinary('11', '1'));
// console.log(addBinary("1010", "1011"));
// console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
// "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"));
console.log(addBinary("1010", "101"));
