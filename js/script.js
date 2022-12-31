'use strict';



// Task-7


const  removeDuplicates = nums => {
   let result= [];
   for(let i = 0; i < nums.length; i++) {
      if(nums[i] !== nums[i + 1]) {
         result.push(nums[i]);
      }
   }
   return result;
}



 console.log(removeDuplicates([1, 1, 2]));
 console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));



