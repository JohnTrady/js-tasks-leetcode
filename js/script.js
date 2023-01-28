'use strict';
// Task-19 (5. Longest Palindromic Substring from lettcode.com)

/**Given a string s, return the longest 
palindromic
 
substring
 in s. 

 Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"

 */

/**
 * @param {string} s
 * @return {string}
 */

 // First solution - too  much time complexity

//  const longestPalindrome = s => {
//     let start = 0;
//     let end = 0;
//     let maxSubstr;
//     let maxLenght = 0;
//     let reverseStr;

//     while( start >=0  && end < s.length && s[] ) {
//       let temp = '';
//        for( let i = start ; i < s.length; i++) {
//            temp += s[i];
//             reverseStr = temp.split('').reverse().join('');
//            if ( temp === reverseStr) {
//                if(temp.length > maxLenght) {
//                 maxSubstr = temp;
//                 maxLenght = temp.length;
//                }
//                if ((s.length - i) * 2 < maxSubstr.length) {
//                 // Break out to avoid unnecessary computation
//                 break;
//             }
//            }
//        }
  
//        start++;
//     }

//     return maxSubstr
// };

// Second solution

const getDrome = (left, right, s) => {
   while(left >= 0 && right < s.length) {
      if(s[left] !== s[right]) break;
      left --;
      right ++;
   }
   return [left + 1, right];
}

const longestPalindrome = s => {
  let max = [0, 1];

  for(let i = 0; i < s.length; i++) {
      let even = getDrome(i - 1, i , s);
      let odd = getDrome(i - 1, i + 1, s);
      let curMax =  odd[1] - odd[0] > even[1] - even[0] ? odd : even;
      max = max[1] - max[0] > curMax[1] - curMax[0] ? max : curMax;
  }


  return s.slice(max[0], max[1]);
};

console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));
console.log(longestPalindrome("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"));
console.log(longestPalindrome( "babcorocad"));


/**
 * Runtime 82 ms

   Beats  92.95%
 */

/**
 * Memory  48.2 MB
   Beats 41.81% 
 */