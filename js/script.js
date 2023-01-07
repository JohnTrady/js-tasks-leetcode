'use strict';

// Task - 10 (58. Length of Last Word from leetcode.com)

/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
   A word is a maximal      substring     consisting of non-space characters only.
 */

   /**
 * @param {string} s
 * @return {number}
 */
const  lengthOfLastWord = s => {
  let arr= s.split(' ').filter((str => str != ''));
  return arr[arr.length - 1].length;
};

console.log(lengthOfLastWord('Hello World '));
console.log(lengthOfLastWord( "   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));

/**
 * Runtime 63 ms
 * Beats 85.20%
 */

/**
 * Memory 41.7 MB
 * Beats 90.66%
 */