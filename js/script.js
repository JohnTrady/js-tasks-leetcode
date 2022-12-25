'use strict';

// Task-4 from leetcode.com
//  Longest Common Prefix
/**
 Write a function to find the longest common prefix string amongst an array of strings.
 If there is no common prefix, return an empty string "".
 */


 /**
 * @param {string[]} strs
 * @return {string}
 */

 const longestCommonPrefix  = strings => {
   
   const firstStr = strings[0];
   if (!firstStr.length) return "";
   if(strings.length === 1) {
    return firstStr;
   }

   for (let i = 0; i < firstStr.length; i++) {
      let symbolFirst = firstStr[i];
      for(let j = 1; j < strings.length; j ++) {
        let str = strings[j];
        let symbolSecond = str[i];

        
        

        if (symbolFirst !== symbolSecond ) {
           return firstStr.slice(0, i);
        }
      }
   }

   return firstStr;

   
 };

 console.log(longestCommonPrefix(["flower","flow","flight"]));
 console.log(longestCommonPrefix(["dog","racecar","car"]));
 console.log(longestCommonPrefix(["car","carrier","dog"]));
 console.log(longestCommonPrefix(["flower","flower","flower"]));
 console.log(longestCommonPrefix(["",""]));
 

/**
 * Runtime 70 ms   
   Beats 88.15%
*/

 /**
    * Memory 42.7 MB
Beats 46.64%   
*/


