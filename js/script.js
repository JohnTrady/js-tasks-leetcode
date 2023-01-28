'use strict';
// Task-18 (3. Longest Substring Without Repeating Characters from leetcode.com)

/**
 * Given a string s, find the length of the longest substring
   without repeating characters.
 */


   /**
 * @param {string} s
 * @return {number}
 */

    const  lengthOfLongestSubstring = s => {
       let max = 0;
       let start = 0;
       let soFar= {};

       for(let end = 0; end < s.length; end++ ){
         let rightChar = s[end];
         soFar[rightChar] = soFar[rightChar] + 1 || 1;
         
        while(soFar[rightChar] > 1) {
            let leftChar = s[start];
            if(soFar[leftChar] > 1) {
                soFar[leftChar]--;
            } else {
                delete soFar[leftChar];
            }
            start++;
        }
        max = Math.max(max, (end - start) +1)
       }
       return max;
    };

    console.log(lengthOfLongestSubstring("abcabcbb"));
    console.log(lengthOfLongestSubstring("bbbbb"));
    console.log(lengthOfLongestSubstring("pwwkew"));
    console.log(lengthOfLongestSubstring("house"));
    console.log(lengthOfLongestSubstring(""));

   

/**
 * Runtime 142 ms
   Beats 47.9%
 */

/**
 * Memory 47 MB
   Beats 69.95% 
 */