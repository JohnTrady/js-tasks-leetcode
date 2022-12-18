'use strict '

// Tasks from leetcode.com

/*
1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 @param {number[]} nums
  @param {number} target
  @return {number[]}

  */

const  twoSum = (nums, target) => {
    let sum;
    for (let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            let sum = nums[i] + nums[j];
            if(sum === target) {
                return [i, j];
            } 
        }      
    }
    if (sum !== target) {
        return 'Wrong target';
    }
};
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum( [3,3], 6));
console.log(twoSum([15,7,11,2], 9));
console.log(twoSum([2,7,11,15], 0));

/* https://leetcode.com/problems/two-sum/submissions/861647875
Runtime 120 ms
Beats 58.13%

Memory 41.9 MB
Beats 94.56%
*/
