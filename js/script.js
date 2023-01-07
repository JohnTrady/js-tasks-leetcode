'use strict';



// Task-7 (26. Remove Duplicates from Sorted Array from leetcode.com)

/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

const  removeDuplicates = nums => {
   let  uniqElements = 1;
   for(let i = 1; i < nums.length; i++) {
      if(nums[i]  !== nums[i - 1]) {
        nums[uniqElements] = nums[i];
        uniqElements++;

      }
   }
   
 
   return uniqElements;
}



 console.log(removeDuplicates([1, 1, 2]));
 console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

/**
 * Runtime 82 ms
 * Beats 82.67%
 */

/**
 * Memory 45.1 MB
 * Beats 17.81%
 */



