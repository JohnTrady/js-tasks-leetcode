'use strict';

// Task - 8 Search Insert Position (task-35 from leetcode.com)

/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


 const  searchInsert = (nums, target) => {
   for(let i = 0; i < nums.length ; i++) {
       if(nums[i] === target) {
           return i;
       }
       if( nums[i] > target ) {
            return i;
       }
   }
   return nums.length;
};

console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([2,15, 77,101], 100));

/**
 * Runtime 63 ms
Beats 89.10%
 */

/**
 * Memory 42.1 MB
   Beats 57.36%
 */