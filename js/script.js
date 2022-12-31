'use strict';

// Task-5 from leetcode.com
// Valid Parentheses

/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

 */


/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = string => {
   
  const stack = [];
  for(const symbol of string) {
     switch(symbol) {
      case "(": {
         stack.push(')');
         break;
      }
      case "{": {
         stack.push('}');
         break;
      }
      case "[": {
         stack.push(']');
         break;
      }

      default: {
         if (stack.pop() !== symbol){
             return false;
         }
      }
     }


  }

  return !stack.length;


   
};
console.log(isValid( "()[]{}"));
// console.log(isValid( "(}"));
// console.log(isValid( "([{}[()]])"));

/**                 
 * Runtime 52 ms 
   Beats 99.70%
 */

/**
 * Memory 42.1 MB
   Beats 88.12%
 */











