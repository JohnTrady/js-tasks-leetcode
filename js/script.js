'use strict';
// Task-16 (88. Merge Sorted Array from leetcode.com)

/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 const  merge = (nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3) => {
 let firstIndex = m - 1;
 let secondIndex = n - 1;
 let i = m + n - 1;

  while(secondIndex >= 0) {
   
      let firstVal = nums1[firstIndex];
      let secondVal = nums2[secondIndex]
    if(firstVal > secondVal) {
      nums1[i] = firstVal;
      i--;
      firstIndex --;
    } else {
      nums1[i] = secondVal;
      i--;
      secondIndex--;
    }
  }

 


  return nums1;
};

console.log(merge());



/**
 * Runtime 73 ms
   Beats 52.25%
 */

/**
 * Memory 42 MB
   Beats 69.97%
 */