 'use strict';

 // Tesk-9 (27. Remove Element from leetcode.com)

 /**
  * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may   be changed.
  */

 /**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

 const removeElement = (nums, val) => {
   let notRemoveElements = 0;
    for (let i = 0; i < nums.length; i++) {
       if (nums[i] !== val) {
        nums[notRemoveElements] = nums[i];
        notRemoveElements++;
       }
    }
    return notRemoveElements;
 };

 console.log(removeElement([3,2,2,3], 3 ));
 console.log(removeElement([0,1,2,2,3,0,4,2], 2));

/**
 * Runtime 66 ms
 * Beats 80.75%
 */

/**
 * Memory 42.3 MB
 * Beats 20.57%
 */
