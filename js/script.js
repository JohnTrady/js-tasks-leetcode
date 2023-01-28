'use strict';
// Task-14 (70. Climbing Stairsfrom leetcode.com)

/**
 * @param {number} n
 * @return {number}
 */

const climbStairs = n => {
   let pre = 1;
   let curr = 1;
   let temp;
   for(let i = 1; i < n; i++) {
      temp = curr;
      curr = curr +  pre;
      pre = temp;
   }
    return curr;
}; 

    console.log(climbStairs(1));
    console.log(climbStairs(2));
    console.log(climbStairs(3));
    console.log(climbStairs(4));
    console.log(climbStairs(5));



/**
 * Runtime 61 ms
   Beats 85.81% 
 */

/**
 * Memory 41.3 MB 
   Beats 97.29%
 */