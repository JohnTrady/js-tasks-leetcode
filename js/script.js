'use strict'

// task from leetcode.com

/*
   Task 2  Palindrome Number

   Given an integer x, return true if x is a palindrome, and false otherwise.
 */

   const isPalindrome = num => {
    if  (num < 0) {
        return false;
    }
    
    return num.toString().split('').reverse().join('') === String(num);
    
};

console.log(isPalindrome(121));
console.log(isPalindrome(222));
console.log(isPalindrome(10));
console.log(isPalindrome(1));
console.log(isPalindrome(-121));

// Runtime: 164 ms Beats: 96.64%
// Memory: 51.6MB Beats: 24.41%




// second solution
/*
const isPalindrome = num => {
    if  (num < 0) {
        return false;
    }
    
    if(num >= 0) {
        num = num.toString();
        let result = '';

        for(let i = num.length -1 ; i >= 0; i-- ) {
          result += num[i];
        }
        

        return result === num;
    }
}

// Runtime: 271 ms Beats: 72.64%
// Memory: 51MB Beats: 60.20%

*/






